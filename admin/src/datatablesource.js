export const userColumns = [
  { field: '_id', headerName: 'ID', width: 200 },
  {
    field: 'username',
    headerName: 'User',
    width: 150,
    renderCell: params => {
      return (
        <div className='cellWithImg'>
          <img
            className='cellImg'
            src={params.row.img || 'http://i.ibb.co/MBtjqXQ/no-avatar.gif'}
            alt='avatar'
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },
  {
    field: 'fullName',
    headerName: 'Full Name',
    width: 150,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone',
    width: 150,
  },
];

export const hotelColumns = [
  { field: '_id', headerName: 'ID', width: 200 },
  {
    field: 'name',
    headerName: 'Name',
    width: 250,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 100,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 250,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 100,
    renderCell: params => {
      return <div>{params.row.city[0]}</div>;
    },
  },
];

export const roomColumns = [
  { field: '_id', headerName: 'ID', width: 250 },
  {
    field: 'title',
    headerName: 'Title',
    width: 230,
  },
  {
    field: 'desc',
    headerName: 'Description',
    width: 230,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 70,
  },
  {
    field: 'maxPeople',
    headerName: 'Max People',
    width: 100,
  },
];

export const tranColumns = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'username',
    headerName: 'User',
    width: 100,
  },
  {
    field: 'hotel',
    headerName: 'Hotel',
    width: 230,
  },
  {
    field: 'room',
    headerName: 'Room',
    width: 100,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 200,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 70,
  },
  {
    field: 'payment',
    headerName: 'Payment Method',
    width: 130,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
  },
];
