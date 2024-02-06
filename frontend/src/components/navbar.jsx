import { Link } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { logout } from "../reducer/user";
import "../static/navbar.css";
const Navbar = () => {
    const user = useSelector((state) => state.user) ;
    const dispatch = useDispatch();
    return (
        <div className="navbar">
            <div className="links">
                <li>
                    <Link className="navbar-link" to={"/"}>Shop</Link>
                </li>
                {
                    !user.is_valid && <li>
                        <Link className="navbar-link" to={"/login/"}>ورود</Link>
                    </li>
                }
                {
                    user.is_master && <li>
                        <Link className="navbar-link" to={"/settings/"} >تنظیمات</Link>
                    </li>
                }
                {
                    user.token && user.is_valid && <li>
                        <Link className="navbar-link" onClick={()=> dispatch(logout())}>خروج</Link>
                    </li>
                }
            </div>
            {
                user.phone !== 0 && user.isValid && <div className="navbar-info">
                    {user.phone}
                </div>
            }
        </div>
    )
}; export default Navbar;