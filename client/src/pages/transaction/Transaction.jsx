import Header from "../../components/header/Header";
import "./transaction.css";
import { useEffect, useContext } from "react";
import { AuthContext } from "./../../context/AuthContext";
import axios from "axios";
import { useState } from "react";
import { format } from "date-fns";

const Transaction = () => {
  const { user } = useContext(AuthContext);
  const [trans, setTrans] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/transactions/${user._id}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => setTrans(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header type="list" />
      <div className="trans">
        {trans.length === 0 ? (
          <h1>Bạn không có đơn đặt phòng nào!</h1>
        ) : (
          <table border="1" className="transTable">
            <caption>Your Transactions</caption>

            <tr className="tableTr">
              <th>#</th>
              <th>Khách sạn</th>
              <th>Số phòng</th>
              <th>Ngày đặt</th>
              <th>Giá</th>
              <th>Thanh toán</th>
              <th>Trạng thái</th>
            </tr>

            {trans.map((tran, i) => {
              return (
                <tr className={i % 2 === 0 ? "tableRow" : ""} key={tran._id}>
                  <td>{i + 1}</td>
                  <td>{tran.hotel}</td>
                  <td>{tran.room.map((room) => room.roomNumber).toString()}</td>
                  <td>{`${format(
                    new Date(tran.dateStart),
                    "dd/MM/yyyy"
                  )} to ${format(new Date(tran.dateEnd), "dd/MM/yyyy")}`}</td>
                  <td>${tran.price}</td>
                  <td>{tran.payment}</td>
                  <td className={tran.status.toLowerCase()}>
                    <span>{tran.status}</span>
                  </td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    </div>
  );
};

export default Transaction;
