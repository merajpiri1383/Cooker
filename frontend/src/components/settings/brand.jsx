import { useState } from "react";
import API from "../../auth/auth";
import Store from "../../store";
import { useNavigate } from "react-router-dom";
import { setBrand } from "../../reducer/settings";
import { useDispatch, useSelector } from "react-redux";
const Brand = () => {
    const form = new FormData();
    const [file, setFile] = useState("");
    const dispatch = useDispatch();
    let isMaster  = useSelector((state) => state.user.is_master);
    const navigate = useNavigate();
    Store.subscribe(() => {
        isMaster = Store.getState().user.is_master;
    })
    const sendData = async (form) => {
        await API.post("/settings/", form).then(
            (response) => {
                API.get("/settings/").then(
                    (response) => {
                        dispatch(setBrand(response.data.brand));
                    }
                ).then(
                    (error) => {
                        console.log(error);
                    }
                )
            },
            (error) => {
                console.log(error)
            }
        )
    };
    const deleteHandeler = (type) => {
        const deleteData = async () => {
            await API.delete("/settings/" + type).then(
                (response) => {
                    console.log(response)
                }
            ).then(
                (error) => {
                    console.log(error)
                }
            )
        }; deleteData();
    }
    const changeBrandHandeler = (e) => {
        e.preventDefault();
        form.append("brand", file);
        sendData(form);
    }
    if (isMaster) {
        return (
            <form className="auth-form" onSubmit={changeBrandHandeler}>
                <div className="auth-form-group">
                    <h3 className="auth-form-title">تغییر نماد</h3>
                </div>
                <div className="auth-form-group">
                    <input type="file" accept="image/jpg,image/png" required
                        onChange={(e) => setFile(e.target.files[0])} className="auth-form-input" />
                </div>
                <div className="auth-form-group">
                    <button className="auth-form-button" type="submit">تغییر</button>
                </div>
                <div className="auth-form-group">
                    <button type="button" className="auth-form-button auth-form-delete"
                        onClick={() => deleteHandeler("brand")} >حذف</button>
                </div>
            </form>
        )
    }else{
        return navigate("/login/")
    }
}; export default Brand;