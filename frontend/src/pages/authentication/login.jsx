import { useState , useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import API from "../../auth/auth";
import {useDispatch} from "react-redux";
import {setPhone} from "../../reducer/user";
import "../../static/auth/auth.css";
const Login = () => {
    const [showLoader, setShowLoader] = useState(true);
    const [number,setNumber]  = useState(0);
    const [error,setError] = useState("");
    const dispatch  = useDispatch();
    const navigate = useNavigate();
    const submitHandeler = (e) => {
        setShowLoader(true)
        setError("");
        e.preventDefault();
        if(number.length < 8 ){
            setError("شماره وارد شده نامعتبر است .")
        }else{
            API.post("/accounts/login/",{mobile:number}).then(
                (response) => {
                    console.log(response)
                    if (response.status === 200){
                        dispatch(setPhone(number));
                        return navigate("/verify/")
                    }
                }
            ).then(
                (error) => {
                    console.log(error)
                    setError("مشکلی رخ داده است لطفا بعدا امتحان کنید.")
                }
            )
        };
    };
    useEffect(()=>{
        setTimeout(()=>{
            setShowLoader(false)
        },400)
    },[])
    return (
        <>
            {
                !showLoader && <form method="post" onSubmit={submitHandeler} className="auth-form">
                    <div className="auth-form-group">
                        <h3 className="auth-form-title">Login</h3>
                    </div>
                    <div className="auth-form-group">
                        <input onChange={(e) => setNumber(e.target.value)} className="auth-form-input"
                        required placeholder="phone number ..."
                        type="number" min={"0"} />
                    </div>
                    <div className="auth-form-group">
                        <button type="submit" className="auth-form-button">Login</button>
                    </div>
                    <div className="auth-form-group">
                        {
                            error && <p className="error">{error}</p>
                        }
                    </div>
                </form>
            }
            {
                showLoader && <div className="spinner">
                    <BallTriangle width="10rem" color="rgb(0,110,255)" />
                </div>
            }
        </>
    )
}; export default Login;