import {useState} from "react";
import API from "../../auth/auth";
import { setDefaultProductImage } from "../../reducer/settings";
import { useDispatch } from "react-redux";
const IamgeProduct = () => {
    const form = new FormData();
    const [file,setFile] = useState("");
    const dispatch = useDispatch();
    const sendData = async (form) => {
        await API.post("/settings/",form).then(
            (response) => {
                API.get("/settings/").then(
                    (response) => {
                        dispatch(setDefaultProductImage(response.data.default_product_image))
                    }
                ).then(
                    (error) => {
                        console.log(error)
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
            await API.delete("/settings/"+type).then(
                (response) => {
                    console.log(response)
                }
            ).then(
                (error) => {
                    console.log(error)
                }
            )
        };deleteData();
    }
    const formHandeler = (e) =>{
        e.preventDefault();
        form.append("default_product_image",file);
        sendData(form);
    };
    return (
        <form className="auth-form" onSubmit={formHandeler}>
            <div className="auth-form-group">
                <h3 className="auth-form-title">تغییر تصویر محصولات</h3>
            </div>
            <div className="auth-form-group">
                <input type="file" accept="image/jpg,image/png"
                className="auth-form-input" onChange={(e)=> setFile(e.target.files[0])} />
            </div>
            <div className="auth-form-group">
                <button type="submit" className="auth-form-button">تغییر</button>
            </div>
            <div className="auth-form-group">
                <button type="button" onClick={()=> deleteHandeler("default_product_image")}
                className="auth-form-button auth-form-delete">حذف</button>
            </div>
        </form>
    )
};export default IamgeProduct ;