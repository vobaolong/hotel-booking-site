import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from '../../hooks/useFetch';
import { useState, useContext, useEffect } from 'react';
import { SearchContext } from '../../context/SearchContext';
import './reserve.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { AuthContext } from './../../context/AuthContext';

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRoomsId, setSelectedRoomsId] = useState([]);
  const { data, loading, error } = useFetch(`hotels/room/${hotelId}`);
  const { datesCt } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const [datesReserve, setDatesReserve] = useState(datesCt);
  const [payment, setPayment] = useState('Credit Card');

  const navigate = useNavigate();

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(
    datesReserve[0].endDate,
    datesReserve[0].startDate
  );

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate.getTime());
    const end = new Date(endDate);

    const date = new Date(start);
    let dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const allDates = getDatesInRange(
    datesReserve[0].startDate,
    datesReserve[0].endDate
  );

  const isAvailable = roomNumber => {
    const isFound = roomNumber.unavailableDates.some(date =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleSelectRoom = e => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRoomsId(
      checked
        ? [...selectedRoomsId, value]
        : selectedRoomsId.filter(item => item !== value)
    );
  };

  const totalPrice = () => {
    let total = 0;
    selectedRoomsId.map(item => {
      const dataRoom = data.find(i =>
        i.roomNumbers.find(roomNumber => roomNumber._id === item)
      );

      total = total + dataRoom.price * (days === 0 ? 1 : days);
    });

    return total;
  };

  const handleReserve = async () => {
    let rooms = [];
    selectedRoomsId.map(item => {
      const dataRoom = data
        .find(i => i.roomNumbers.find(roomNumber => roomNumber._id === item))
        .roomNumbers.find(room => room._id === item);
      const room = {
        roomNumber: dataRoom.number,
        _id: dataRoom._id,
      };
      rooms.push(room);
    });
    const newTransaction = {
      username: user.details.username,
      hotelId: hotelId,
      room: rooms,
      dateStart: datesReserve[0].startDate,
      dateEnd: datesReserve[0].endDate,
      price: totalPrice(),
      payment: payment,
      status: 'Booked',
    };
    try {
      await axios.post(
        `http://localhost:5000/transactions/${user.details._id}`,
        newTransaction,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );

      await Promise.all(
        selectedRoomsId.map(roomId => {
          const res = axios.put(
            `http://localhost:5000/rooms/availability/${roomId}`,
            {
              dates: allDates,
            }
          );
          return res.data;
        })
      );
      navigate('/transactions');
      setOpen(false);
    } catch (err) {}
  };

  return (
    <div className='reserve'>
      <div className='rContainer'>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className='rClose'
          onClick={() => setOpen(false)}
        />
        <div className='rDatesInfo'>
          <div className='rDates'>
            <h3>Dates </h3>
            <DateRange
              minDate={new Date()}
              ranges={datesReserve}
              onChange={item => setDatesReserve([item.selection])}
            />
          </div>
          <div className='rInfo'>
            <h3>Reserve Info</h3>
            <label>Your Full Name</label>
            <input type='text' placeholder={user.details.fullName} />
            <label>Your Email</label>
            <input type='text' placeholder={user.details.email} />
            <label>Your Phone Number</label>
            <input type='number' placeholder={user.details.phoneNumber} />
            <label>Your identity Card Number</label>
            <input
              type='number'
              placeholder='Card Number'
              className='rInfoInput'
            />
          </div>
        </div>
        <h3>Select your rooms: </h3>
        <div className='rRoom'>
          {data &&
            data.map(item => (
              <div className='rRoomItem' key={item._id}>
                <div className='rItemInfo'>
                  <div className='rTitle'>{item.title}</div>
                  <div className='rDesc'>{item.desc}</div>
                  <div className='rMax'>
                    Max people: <b>{item.maxPeople}</b>
                  </div>
                  <div className='rPrice'>${item.price}</div>
                </div>
                <div className='rSelectRooms'>
                  {item &&
                    item.roomNumbers.map(roomNumber => (
                      <div className='room' key={roomNumber._id}>
                        <label>{roomNumber.number}</label>
                        <input
                          type='checkbox'
                          value={roomNumber._id}
                          onChange={handleSelectRoom}
                          disabled={!isAvailable(roomNumber)}
                        />
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
        <h3>Total Bill: {totalPrice()}</h3>
        <div className='rBillBook'>
          <select
            name='payment'
            id='payment'
            className='payment'
            onChange={e => setPayment(e.target.value)}
          >
            <option>Select Payment Method</option>
            <option value='Credit Card'>Credit Card</option>
            <option value='Cash'>Cash</option>
          </select>
          <button className='rButton' onClick={handleReserve}>
            Reserve Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
