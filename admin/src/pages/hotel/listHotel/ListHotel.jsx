import "./list.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import Datatable from "../../../components/datatable/Datatable";

const ListHotel = ({ columns }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Datatable columns={columns} />
      </div>
    </div>
  );
};

export default ListHotel;
