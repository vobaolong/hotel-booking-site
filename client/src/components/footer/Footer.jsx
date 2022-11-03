import React from 'react'
import "./Footer.css";
import logoImg from '../../assets/images/logo.png'
import ScrollToTop from "react-scroll-to-top";
const Footer = () => {
	return (
		<div className="footer">
			<ScrollToTop smooth
				style={{ border: "1px solid #ff3366" }}
				width='20px'
				color='#ff3366' />
			<div className="col">
				<img src={logoImg} alt="logo Images" />
				<p>LARANA là một trang web du lịch trực tuyến cho đặt chỗ,
					<br /> được thành lập vào năm 2022. Công ty được vận hành bởi <br /> LARANA Holdings, có có trụ sở tại Thủ Đức</p>
			</div>
			<div className="col">
				<h3>Contact</h3>
				<p><strong>Phone:</strong>(+84) 34 8073 013</p>
				<p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
			</div>
			<div className="col">
				<h3>Technology</h3>
				<p>MongoDB</p>
				<p>ExpressJS</p>
				<p>ReactJS</p>
				<p>NodeJS</p>
			</div>
			<div className="col">
				<h3>Secured Payment Gateways</h3>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1920px-PayPal_logo.svg.png" alt="" />
			</div>
			<div className="copyright">Copyright &copy; by LARANA INC. All rights reserved</div>
		</div >
	);
};

export default Footer;