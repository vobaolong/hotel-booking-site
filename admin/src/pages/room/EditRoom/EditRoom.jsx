import "./editRoom.scss";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import useFetch from "../../../hooks/useFetch";
import Sidebar from "../../../components/sidebar/Sidebar";

const EditRoom = () => {
  const location = useLocation();
  const roomId = location.pathname.split("/")[3];
  const { user } = useContext(AuthContext);
  const [info, setInfo] = useState({});
  const { data, loading, error } = useFetch(`rooms/${roomId}`);
  const navigate = useNavigate();

  useEffect(() => {
    setInfo(data);
  }, [data]);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/rooms/${roomId}`, info, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      alert("Update a hotel success!");
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
          <h1>Edit Room</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleUpdate}>
              <div className="formInput">
                <label>Title</label>
                <input
                  id="title"
                  type="text"
                  placeholder={info.title}
                  defaultValue={info.title}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="formInput">
                <label>Description</label>
                <input
                  id="desc"
                  type="text"
                  placeholder={info.desc}
                  defaultValue={info.desc}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="formInput">
                <label>Price</label>
                <input
                  id="price"
                  type="text"
                  placeholder={info.price}
                  defaultValue={info.price}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="formInput">
                <label>Max People</label>
                <input
                  id="maxPeople"
                  type="number"
                  placeholder={info.maxPeople}
                  defaultValue={info.maxPeople}
                  required
                  onChange={handleChange}
                />
              </div>

              {/* <div className='formInput'>
                <label>Rooms</label>
                <textarea
                  onChange={e => setRooms(e.target.value)}
                  placeholder='Give comma between room numbers'
                  defaultValue={number}
                  required
                />
              </div> */}
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRoom;
