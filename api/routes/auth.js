const express = require('express')
const router = express.Router()

const {
  register,
  login,
  logout,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword
} = require('../controllers/auth')

const { protect } = require('../middleware/auth')

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.post('/me', protect, getMe)
router.put('/update-details', protect, updateDetails)
router.put('/update-password', protect, updatePassword)
router.post('/forgot-password', forgotPassword)
router.put('/resetpassword/:reset-token', resetPassword)

module.exports = router
