import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Car rental</li>
          <li className="fListItem">Flight Finder</li>
          <li className="fListItem">Restaurant reservations </li>
          <li className="fListItem">Travel Agents </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Investor relations</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <span className="copyright">
        Copyright &copy; Larada. All Right Reserved
      </span>
    </div>
  );
};

export default Footer;
