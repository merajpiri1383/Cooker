import {useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import API from "../../auth/auth";
import "../../static/settings/settings.css";
import "../../static/auth/auth.css";
const Settings = () => {
    const user = useSelector((state) => state.user); 
    const navigate = useNavigate();
    if(!user.is_master){
        return (
            <div className="settings-section">
                <h1>شما اجازه دسترسی به این صفحه را ندارید </h1>
            </div>
        )
    }else{
        return (
            <div className="settings-section">
            {
                <div className="settings">
                    <div className="settings-links">
                        <Link className="settings-link" to={"/settings/change-default-image/"}>تغییر تصویر محصولات</Link>
                        <Link className="settings-link" to={"/settings/change-brand/"}>تغییر نماد </Link>
                    </div>
                </div>
            }
            <Outlet />
        </div>
        )
    }
};export default Settings ;