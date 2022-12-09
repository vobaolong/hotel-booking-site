import "./mailList.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const MailList = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y2tumva",
        "template_xnlhrbv",
        form.current,
        "w9ccyzffRs-6ByHms"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="mail">
      <h1 className="mailTitle">Liên hệ với chúng tôi</h1>
      <h3 className="mailDesc">
        Hãy liên hệ với chúng tối để biết được nhiều tips hơn
      </h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mailInput">
          <div className="mailInputContainer">
            <input type="email" placeholder="Nhập email của bạn" required />
            <input type="text" placeholder="Tiêu đề" />
          </div>
          <textarea
            type="text"
            placeholder="Viết nhận xét"
            required=""
          ></textarea>
        </div>
        <input className="sendBtn" type="submit" value="GỬI" />
      </form>
    </div>
  );
};

export default MailList;
