import { BallTriangle } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { setToken , setIsValid ,setPermission} from "../../reducer/user";
import {useSelector , useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../auth/auth";
const Verify = () => {
    const [showSpinner, setShowSpinner] = useState(true);
    const [otp,setOtp] = useState(0);
    const [error,setError] = useState("");
    const dispatch = useDispatch();
    const phone = useSelector((state) => state.user.phone);
    const navigate = useNavigate();
    const submitHandeler = (e) => {
        e.preventDefault();
        setShowSpinner(true);
        if(phone){
            try{
                API.post(`/accounts/verify/${phone}/`,{otp: otp}).then(
                    (response) => {
                        console.log(response)
                        if (response.status === 200){
                            const token = response.data.token ;
                            const user = response.data.user ;
                            console.log(user.is_staff)
                            console.log(user.is_master)
                            dispatch(setPermission({
                                is_active : user.is_active ,
                                is_chef : user.is_chef ,
                                is_staff : user.is_staff ,
                                is_master : user.is_master 
                            }))
                            dispatch(setToken(token));
                            dispatch(setIsValid(true));
                            return navigate("/")
                        }else if (response.status === 203){
                            setError("کد نامعتبر می باشد .")
                            setShowSpinner(false)
                        }
                    }
                ).then(
                    (error) => {
                        setError("مشکلی رخ داده است لطفا بعدا امتحان کنید.")
                    }
                )
            }catch{
                setError("مشکلی رخ داده است لطفا بعدا امتحان کنید.")
            }
        }else{
            setError("مشکلی رخ داده است لطفا بعدا امتحان کنید.")
        }
    }; useEffect(() => {
        setTimeout(() => {
            setShowSpinner(false);
        }, 400)
    }, [])
    return (
        <>
            {
                !showSpinner && <form className="auth-form" method="post" onSubmit={submitHandeler}>
                    <div className="auth-form-group">
                        <h3 className="auth-form-title">Verify </h3>
                    </div>
                    <div className="auth-form-group">
                        <input placeholder="verfy code ..." required className="auth-form-input" 
                        min={"0"} type="number"
                        onChange={(e) => setOtp(e.target.value)} />
                    </div>
                    <div className="auth-form-group">
                        <button type="submit" className="auth-form-button">Verify</button>
                    </div>
                    {
                        error && <p className="error">{error}</p>
                    }
                </form>
            }
            {
                showSpinner && <div className="spinner">
                    <BallTriangle width={"10rem"} color="rgb(0,110,255)" />
                </div>
            }
        </>
    )
}; export default Verify;