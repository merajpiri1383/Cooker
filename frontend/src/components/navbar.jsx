import { Link } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { logout } from "../reducer/user";
import "../static/navbar.css";
import { useState } from "react";
import Store from "../store";
const Navbar = () => {
    const user = useSelector((state) => state.user) ;
    const dispatch = useDispatch();
    const isMaster = useSelector((state) => state.user.is_master) ;
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
                    isMaster && <li>
                        <Link className="navbar-link" to={"/settings/"} >تنظیمات</Link>
                    </li>
                }
                {
                    user.token && user.is_valid && <li>
                        <Link className="navbar-link" to={"/profile/"}>حساب کاربری</Link>
                    </li>
                }
                {
                    user.token && user.is_valid && <li>
                        <Link className="navbar-link" onClick={()=> {
                            dispatch(logout());
                        }}>خروج</Link>
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