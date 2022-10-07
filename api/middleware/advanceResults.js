// @eg      userName=reagan&select=email&sort=-userName,email

const advancedResults = (
    model,
    populates,
    visibility = { status: '', filter: '' }
  ) => async (req, res, next) => {
    let query
  
    if (visibility.status == 'private') {
      req.query.userId = req.user._id
  
      if (visibility.filter == 'user') {
        req.query.userId = req.user._id
        delete req.query.userId
      }
    } else if (visibility.status == 'public') {
      req.query.status = 'public'
    }
  
    // Copy req.query
    const reqQuery = { ...req.query }
  
    // Fields to exclude
    const removeFields = ['select', 'sort', 'page', 'limit']
    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach((param) => delete reqQuery[param])
  
    // Create query string
    let queryStr = JSON.stringify(reqQuery)
  
    // Create operators ($gt, $gte, etc)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`)
  
    // Find resource
    query = model.find(JSON.parse(queryStr))
  
    // Select Fields
    if (req.query.select) {
      const fields = req.query.select.split(',').join(' ')
      query = query.select(fields)
    }
  
    // Sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ')
      query = query.sort(sortBy)
    } else {
      query = query.sort({ createdAt: -1 })
      // '-createdAt'
    }
  
    // Pagination
    const page = parseInt(req.query.page, 10) || 1
    const limit = parseInt(req.query.limit, 10) || 12
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const total = await model.countDocuments()
    const totalPage = Math.ceil(total / limit)
  
    if (parseInt(req.query.limit) !== 0) {
      query = query.skip(startIndex).limit(limit)
    }
  
    if (populates) {
      populates.forEach((populate) => {
        query = query.populate(populate)
      })
    }
  
    const results = await query
  
    // Pagination result
    const pagination = {}
  
    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      }
    }
  
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      }
    }
  
    if (parseInt(req.query.limit) !== 0) {
      res.advancedResults = {
        success: true,
        count: results.length,
        totalPage,
        pagination,
        data: results
      }
    } else {
      res.advancedResults = {
        success: true,
        data: results
      }
    }
    next()
  }
  
  module.exports = advancedResults
  