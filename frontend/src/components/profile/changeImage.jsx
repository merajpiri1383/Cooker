import { useSelector , useDispatch } from "react-redux";
import { setProfile } from "../../reducer/user";
import { FaCircleUser } from "react-icons/fa6";
import {useState} from "react";
import API from "../../auth/auth";
import Store from "../../store";
const ChangeImage = () => {
    let user = useSelector((state) => state.user);
    const form = new FormData();
    const [img,setImage] = useState();
    const dispatch = useDispatch();
    const saveImageForm = (e)=>{
        e.preventDefault();
        form.append("image",img);
        API.patch(`profile/${user.phone}/`,form).then(
            (response) => {
                dispatch(setProfile({
                    image : response.data.image
                }))
            }
        )
    }
    const deleteImage  = async () => {
        await API.patch(`profile/${user.phone}/`,{"image":"delete"}).then(
            (response) => {
                dispatch(setProfile({
                    image : response.data.image
                }))
            }
        ).then(
            (error) => console.log(error)
        )
    };
    return ( 
        <div className="profile-img">
                    <div className="image">
                        {
                            user.image && <img src={`${API.defaults.baseURL}${user.image}`} />
                        }
                        {
                            !user.image && <FaCircleUser className="profile-icon" />
                        }
                    </div>
                    <form className="auth-form" onSubmit={saveImageForm}>
                        <div className="auth-form-group">
                            <input type="file" className="auth-form-input" onChange={(e)=> setImage(e.target.files[0])} />
                        </div>
                        <div className="auth-form-group">
                            <button type="submit" className="auth-form-button">ذخیره</button>
                        </div>
                        <div className="auth-form-group">
                            <button type="button"  onClick={() => deleteImage()}
                            className="auth-form-button auth-form-delete">حذف</button>
                        </div>
                    </form>
                </div>
    )
};export default ChangeImage;