import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import useFetch from "./../../hooks/useFetch";
import axios from "axios";
import { AuthContext } from "./../../context/AuthContext";
import { format } from "date-fns";

const Datatable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const { user } = useContext(AuthContext);
  const [list, setList] = useState([]);
  const { data, loading, error } = useFetch(`${path}`);

  useEffect(() => {
    if (path === "transactions") {
      let trans = [];
      data.map((tran) => {
        const item = {
          id: tran._id,
          username: tran.username,
          hotel: tran.hotel,
          room: tran.room.map((room) => room.roomNumber).toString(),
          date: `${format(new Date(tran.dateStart), "dd/MM/yyyy")} - ${format(
            new Date(tran.dateEnd),
            "dd/MM/yyyy"
          )}`,
          price: tran.price,
          payment: tran.payment,
          status: tran.status,
        };
        trans.push(item);
      });
      setList(trans);
    } else {
      setList(data);
    }
  }, [data]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      try {
        await axios
          .delete(`http://localhost:5000/${path}/${id}`, {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          })
          .then((res) => setList(list.filter((item) => item._id !== id)));
      } catch (err) {
        alert(err.response.data);
      }
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>

            {path === "hotels" && (
              <Link to={`/hotels/edit/${params.row._id}`}>
                <div className="viewButton">Edit</div>
              </Link>
            )}
            {path === "rooms" && (
              <Link to={`/rooms/edit/${params.row._id}`}>
                <div className="viewButton">Edit</div>
              </Link>
            )}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path.charAt(0).toUpperCase() + path.slice(1)} List
        {path !== "transactions" && (
          <Link to={`/${path}/new`} className="link">
            Add New
          </Link>
        )}
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        getRowId={(row) => (path === "transactions" ? row.id : row._id)}
        columns={
          path === "transactions" ? columns : columns.concat(actionColumn)
        }
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
