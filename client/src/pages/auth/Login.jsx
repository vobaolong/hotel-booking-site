import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./Login.css";
import loginImg from '../../assets/images/loginImg.png'

const Login = () => {
	const [auth, setAuth] = useState({
		username: undefined,
		password: undefined,
	});

	const { loading, error, dispatch } = useContext(AuthContext);

	const navigate = useNavigate()

	const handleChange = (e) => {
		setAuth((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleClick = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		try {
			const res = await axios.post('/auth/login', auth);
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
			navigate('/')
		} catch (err) {
			dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
		}
	};

	return (
		<section>
			<div className='imgBx'>
				<img src={loginImg} alt="login img" />
			</div>
			<div className="contentBx">
				<div className="formBx">
					<h2>Login</h2>
					<form action="">
						<div className="inputBx">
							<span>Username</span>
							<input
								type="text"
								id="username"
								onChange={handleChange}
							/>
						</div>
						<div className="inputBx">
							<span>Password</span>
							<input
								type="password"
								id="password"
								onChange={handleChange}
							/>
						</div>

						<button disabled={loading} onClick={handleClick}>
							Login
						</button>
						{error && <span>{error.message}</span>}
					</form>
				</div>
			</div>
		</section>
	);
};

export default Login;