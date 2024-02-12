import { useSelector } from "react-redux";
import ChangeProfile from "../../components/profile/changeProfile";
import ChangeImage from "../../components/profile/changeImage";
import GetDataProfile, { getPosition } from "../../components/profile/getDataProfile";
import "../../static/profile/profile.css";
import "../../static/auth/auth.css";
import Store from "../../store";
const Profile = () => {
    let user = useSelector((state) => state.user);
    if (user.token && user.is_valid) {
        console.log(user);
        Store.subscribe(()=>{
            user = Store.getState().user ;
            console.log(user);
        })
        return (
            <div className="profile-section">
                <GetDataProfile />
                <div className="profile">
                    <ChangeImage />
                    <div className="profile-info">
                        <li>
                            <b>شماره : </b>
                            <p>
                                {
                                    user.phone ? user.phone : "نامشخص"
                                }
                            </p>
                        </li>
                        <li>
                            <b>نام کاربری : </b>
                            <p>
                                {
                                    user.username ? user.username : "نامشخص"
                                }
                            </p>
                        </li>
                        <li>
                            <b>سن : </b>
                            <p>
                                {
                                    user.age ? user.age : "نامشخص"
                                }
                            </p>
                        </li>
                        <li>
                            <b>میزان تجربه : </b>
                            <p>
                                {
                                    user.experience_age ? user.experience_age : "نامشخص"
                                }
                            </p>
                        </li>
                        <li>
                            <b>موقیعت : </b>
                            <p>
                                {
                                    getPosition()
                                }
                            </p>
                        </li>
                        <li>
                            <b>آدرس : </b>
                            <p>
                                {
                                    user.address ? user.address : "نامشخص"
                                }
                            </p>
                        </li>
                    </div>
                </div>
                <ChangeProfile />
            </div>
        )
    } else {
        return (
            <h3 className="profile-permission error">شما اجازه دسترسی به این صفحه را ندارید </h3>
        )
    }
}; export default Profile;