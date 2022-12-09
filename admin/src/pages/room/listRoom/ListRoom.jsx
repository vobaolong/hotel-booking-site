import "./list.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Datatable from "../../../components/datatable/Datatable";

const ListRoom = ({ columns }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Datatable columns={columns} />
      </div>
    </div>
  );
};

export default ListRoom;
