import './table.scss';
import useFetch from './../../hooks/useFetch';
import { format } from 'date-fns';
import { DataGrid } from '@mui/x-data-grid';
import { tranColumns } from '../../datatablesource';

const List = () => {
  const { data, loading, error } = useFetch('transactions');
  let list = [];

  data.map(tran => {
    const item = {
      id: tran._id,
      username: tran.username,
      hotel: tran.hotel,
      room: tran.room.map(room => room.roomNumber).toString(),
      date: `${format(new Date(tran.dateStart), 'dd/MM/yyyy')} - ${format(
        new Date(tran.dateEnd),
        'dd/MM/yyyy'
      )}`,
      price: tran.price,
      payment: tran.payment,
      status: tran.status,
    };
    list.push(item);
  });
  list = list.reverse().slice(0, 8);
  return (
    <div className='datatable'>
      {list.length > 0 && (
        <DataGrid
          className='datagrid'
          rows={list}
          getRowId={row => row.id}
          columns={tranColumns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      )}
    </div>
  );
};

export default List;
