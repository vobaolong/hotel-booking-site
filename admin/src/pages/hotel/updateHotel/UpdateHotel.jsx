import "./updateHotel.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import useFetch from "../../../hooks/useFetch";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const UpdateHotel = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const hotelId = location.pathname.split("/")[3];
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);
  const { data, loading, error } = useFetch("rooms");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/hotels/find/${hotelId}`)
      .then((res) => setInfo(res.data));
  }, []);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updateHotel = {
        ...info,
        rooms,
      };
      await axios.patch(
        `http://localhost:5000/hotels/${hotelId}`,
        updateHotel,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      alert("Update a hotel success!");
      navigate("/hotels");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="newHotel">
      <Sidebar />
      <div className="newContainer">
        <div className="top">
          <h1>Update Hotel</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleUpdate}>
              <div className="formInput">
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder={info.name}
                  defaultValue={info.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Type</label>
                <input
                  type="text"
                  id="type"
                  placeholder={info.type}
                  defaultValue={info.type}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>City</label>
                <input
                  type="text"
                  id="city"
                  placeholder={info.city}
                  defaultValue={info.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder={info.address}
                  defaultValue={info.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Distance from City Center</label>
                <input
                  type="text"
                  id="distance"
                  placeholder={info.distance}
                  defaultValue={info.distance}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Title</label>
                <input
                  type="text"
                  id="title"
                  placeholder={info.title}
                  defaultValue={info.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Description</label>
                <input
                  type="text"
                  id="desc"
                  placeholder={info.desc}
                  defaultValue={info.desc}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Price</label>
                <input
                  type="text"
                  id="price"
                  placeholder={info.cheapestPrice}
                  defaultValue={info.cheapestPrice}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Rating</label>
                <input
                  type="text"
                  id="rating"
                  placeholder={info.rating}
                  defaultValue={info.rating}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formInput">
                <label>Featured</label>
                <select
                  id="featured"
                  onChange={handleChange}
                  defaultValue={info.featured}
                >
                  <option value={info.featured}>
                    {info.featured ? "Yes" : "No"}
                  </option>
                  <option value={!info.featured}>
                    {!info.featured ? "Yes" : "No"}
                  </option>
                </select>
              </div>

              <div className="selectedRooms">
                <label>Rooms</label>
                <select id="rooms" multiple required onChange={handleSelect}>
                  {loading
                    ? "loading"
                    : data &&
                      data.map((room) => (
                        <option key={room._id} value={room._id}>
                          {room.title}
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

export default UpdateHotel;
