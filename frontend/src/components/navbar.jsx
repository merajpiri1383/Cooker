import { Link } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { logout } from "../reducer/user";
import "../static/navbar.css";
const Navbar = () => {
    const phone = useSelector((state) => state.user.phone);
    const isValid = useSelector((state) => state.user.is_valid);
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();
    return (
        <div className="navbar">
            <div className="links">
                <li>
                    <Link className="navbar-link" to={"/"}>Shop</Link>
                </li>
                {
                    !token && !isValid && <li>
                        <Link className="navbar-link" to={"/login/"}>ورود</Link>
                    </li>
                }
                {
                    token && isValid && <li>
                        <Link className="navbar-link" onClick={()=> dispatch(logout())}>خروج</Link>
                    </li>
                }
            </div>
            {
                phone !== 0 && isValid && <div className="navbar-info">
                    {phone}
                </div>
            }
        </div>
    )
}; export default Navbar;