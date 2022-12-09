import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const Widget = ({ type }) => {
  const { user } = useContext(AuthContext);
  const [countUsers, setCountUsers] = useState(0);
  const [countTrans, setCountTrans] = useState(0);
  const [earning, setEarning] = useState(0);
  const [balance, setBalance] = useState(0);

  let data;

  useEffect(() => {
    axios
      .get("http://localhost:5000/users", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => setCountUsers(res.data.length));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/transactions", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        setCountTrans(res.data.length);
        const price = res.data
          .map((tran) => tran.price)
          .reduce((total, current) => {
            return total + current;
          });
        setEarning(price);
        const indexEnd = res.data.length - 1;
        const dateEnd = new Date(res.data[indexEnd].dateEnd);
        const dateStart = new Date(res.data[0].dateStart);
        const d1Y = dateStart.getFullYear();
        const d2Y = dateEnd.getFullYear();
        const d1M = dateStart.getMonth();
        const d2M = dateEnd.getMonth();

        const countMonth = d2M + 12 * d2Y - (d1M + 12 * d1Y);

        if (countMonth === 0) {
          setBalance(price);
        } else {
          setBalance((price / countMonth).toFixed(2));
        }
      });
  }, []);

  switch (type) {
    case "users":
      data = {
        path: "/users",
        title: "USERS",
        isMoney: false,
        amount: countUsers,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "transactions":
      data = {
        title: "ORDERS",
        amount: countTrans,
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        amount: earning,
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        amount: balance,
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
};

export default Widget;
