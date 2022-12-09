import "./newHotel.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useContext } from "react";
import axios from "axios";
import { hotelInputs } from "./../../../formSource";
import useFetch from "./../../../hooks/useFetch";
import { AuthContext } from "./../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NewHotel = () => {
  const { user } = useContext(AuthContext);
  const [files, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);
  const { data, loading, error } = useFetch("rooms");
  const navigate = useNavigate();

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
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/baolong317/image/upload",
            data
          );
          const { url } = uploadRes.data;
          return url;
        })
      );

      const newHotel = {
        ...info,
        rooms,
        photos: list,
      };
      await axios.post("http://localhost:5000/hotels", newHotel, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      alert("Add new a hotel success!");
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
          <h1>Add New Hotel</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleClick}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFile(e.target.files)}
                  required
                />
              </div>

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    id={input.id}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                    required={input.required}
                    min="0"
                    max={input.id === "rating" ? 5 : ""}
                  />
                </div>
              ))}

              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className="selectedRooms">
                <label>Rooms</label>
                <select id="rooms" multiple onChange={handleSelect}>
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

export default NewHotel;
