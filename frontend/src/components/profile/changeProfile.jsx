import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../../reducer/user";
import API from "../../auth/auth";
const ChangeProfile = () => {
    const user = useSelector((state) => state.user);
    const [username, setUsername] = useState(user.username ? user.username : "");
    const [age, setAge] = useState(user.age ? user.age : "");
    const [experienceAge, setExperiencAge] = useState(user.experience_age ? user.experience_age : "");
    const [address, setAddress] = useState(user.address ? user.address : "");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const submitHandeler = (e) => {
        e.preventDefault();
        try {
            const sendData = async () => {
                let data = {}
                if(username){
                    data.username = username
                }if(age){
                    data.age = age
                }if(experienceAge){
                    data.experience_age = experienceAge
                }if(address){
                    data.address = address
                }
                await API.patch(`/profile/${user.phone}/`, data).then(
                    (response) => {
                        console.log(response)
                        dispatch(setProfile({
                            username: response.data.username,
                            age: response.data.age,
                            experience_age: response.data.experience_age,
                            address: response.data.address
                        }))
                    }
                )
            }; sendData();
        } catch {
            setError("مشکلی پیش آمده است لطفا بعدا امتخان کنید .")
        }
    }
    return (
        <form className="auth-form" onSubmit={submitHandeler}>
            <div className="auth-form-group">
                <h3 className="auth-form-title">تغییر پروفایل</h3>
            </div>
            <div className="auth-form-group">
                <label className="auth-form-label"> : نام کاربری</label>
                <input className="auth-form-input" value={username}
                    onChange={(e) => setUsername(e.target.value)} type="text" />
            </div>
            <div className="auth-form-group">
                <label className="auth-form-label">: سن</label>
                <input className="auth-form-input" value={age}
                    onChange={(e) => setAge(e.target.value)} type="number" />
            </div>
            <div className="auth-form-group">
                <label className="auth-form-label"> : تجربه کاری</label>
                <input className="auth-form-input" value={experienceAge}
                    onChange={(e) => setExperiencAge(e.target.value)} type="number" />
            </div>
            <div className="auth-form-group">
                <label className="auth-form-label">: آدرس</label>
                <input className="auth-form-input" value={address}
                    onChange={(e) => setAddress(e.target.value)} type="text" />
            </div>
            <div className="auth-form-group">
                <button className="auth-form-button">ذخیره</button>
            </div>
        </form>
    )
}; export default ChangeProfile;