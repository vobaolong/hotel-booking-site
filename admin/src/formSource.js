export const userInputs = [
  {
    id: 'username',
    label: 'Username',
    type: 'text',
    placeholder: 'john_doe',
  },
  {
    id: 'fullName',
    label: 'Full Name',
    type: 'text',
    placeholder: 'John Doe',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'john_doe@gmail.com',
  },
  {
    id: 'phoneNumber',
    label: 'Phone',
    type: 'number',
    placeholder: '+1 234 567 89',
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
  },
];

export const hotelInputs = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'My Hotel',
    required: true,
  },
  {
    id: 'type',
    label: 'Type',
    type: 'text',
    placeholder: 'hotel',
    required: true,
  },
  {
    id: 'city',
    label: 'City',
    type: 'text',
    placeholder: 'New York',
    required: true,
  },
  {
    id: 'address',
    label: 'Address',
    type: 'text',
    placeholder: 'elton st, 216',
    required: true,
  },
  {
    id: 'distance',
    label: 'Distance from City Center',
    type: 'number',
    placeholder: '500',
    required: true,
  },
  {
    id: 'title',
    label: 'Title',
    type: 'text',
    placeholder: 'The best Hotel',
    required: true,
  },
  {
    id: 'desc',
    label: 'Description',
    type: 'text',
    placeholder: 'description',
    required: true,
  },
  {
    id: 'cheapestPrice',
    label: 'Price',
    type: 'text',
    placeholder: '100',
    required: true,
  },
  {
    id: 'rating',
    label: 'Rating',
    type: 'number',
    placeholder: '5',
    min: 0,
    max: 5,
  },
];

export const roomInputs = [
  {
    id: 'title',
    label: 'Title',
    type: 'text',
    placeholder: '2 bed room',
  },
  {
    id: 'desc',
    label: 'Description',
    type: 'text',
    placeholder: 'King size bed, 1 bathroom',
  },
  {
    id: 'price',
    label: 'Price',
    type: 'number',
    placeholder: '100',
  },
  {
    id: 'maxPeople',
    label: 'Max People',
    type: 'number',
    placeholder: '2',
  },
];
