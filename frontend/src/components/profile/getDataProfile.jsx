import {  useDispatch , useSelector} from "react-redux";
import API from "../../auth/auth";
import Store from "../../store";
import {setProfile} from "../../reducer/user";
let user  = Store.getState().user;
const GetDataProfile = () => {
    const dispatch = useDispatch();
    user = useSelector((state) => state.user);
    const getData = async () => {
        await API.get(`/profile/${user.phone}/`).then(
            (response) => {
                const d = response.data ;
                dispatch(setProfile({
                    username : d.username,
                    age : d.age,
                    address : d.address,
                    experience_age : d.experience_age,
                    image : response.data.image
                }))
            }
        )   
    };getData();
    return (<div></div>)
};export default GetDataProfile;
const getPosition = () => {
    if (user.is_master) {
        return "مدیر"
    } else {
        if (user.is_chef) {
            return "سرآشپز"
        } else if (user.staff) {
            return "کارمند"
        } else {
            return "کاربر"
        }
    }
};export {getPosition};