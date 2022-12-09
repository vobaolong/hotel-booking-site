import "./newRoom.scss";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import useFetch from "../../../hooks/useFetch";
import Sidebar from "../../../components/sidebar/Sidebar";
import { roomInputs } from "../../../formSource";

const NewRoom = () => {
  const { user } = useContext(AuthContext);
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState("");
  const { data, loading, error } = useFetch("hotels");
  const [hotelId, setHotelId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (data[0]) {
      setHotelId(data[0]._id);
    }
  }, [data]);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    try {
      await axios.post(
        `http://localhost:5000/rooms/${hotelId}`,
        { ...info, roomNumbers },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      alert("Add new a hotel success!");
      navigate("/rooms");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="newRoom">
      <Sidebar />
      <div className="newContainer">
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleClick}>
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    required
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Rooms</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="Give comma between room numbers"
                  required
                />
              </div>

              <div className="formInput">
                <label>Choose a hotel</label>
                <select
                  id="hotelId"
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>
                          {hotel.name}
                        </option>
                      ))}
                </select>
              </div>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
