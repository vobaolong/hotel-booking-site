import { Link } from "react-router-dom"
import logoImg from '../../assets/images/logo.png'
import "./Navbar.css"
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';


const Navbar = () => {
	const { user } = useContext(AuthContext)
	return (
		<div className="navbar">
			<div className="navContainer">
				<Link to='/'>
					<img src={logoImg} alt="" />
				</Link>

				{user ?
					(<h3 className='userName'>Hi, {user.username}</h3>)
					:
					(
						<div className="navItems">
							<Link to='/register'>
								<button className="navButton">Register</button>
							</Link>
							<Link to='/login'>
								<button className="navButton">Login</button>
							</Link>
						</div>
					)
				}
			</div>
		</div>
	)
}

export default Navbar