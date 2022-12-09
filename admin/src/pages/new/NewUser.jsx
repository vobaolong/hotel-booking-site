import "./newUser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { userInputs } from "../../formSource";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [urlImg, setUrlImg] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      if (file !== "") {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/hoangsonit/image/upload",
          data
        );
        setUrlImg = uploadRes.data;
      }

      const newUser = {
        ...info,
        img: urlImg === "" ? urlImg : "http://i.ibb.co/MBtjqXQ/no-avatar.gif",
      };

      await axios.post("http://localhost:5000/auth/register", newUser);
      alert("Add new a user success!");
      navigate("/users");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
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
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {userInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    id={input.id}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
