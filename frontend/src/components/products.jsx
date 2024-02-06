import {useState , useEffect } from "react";
import {BallTriangle} from "react-loader-spinner";
import { useSelector ,useDispatch } from "react-redux";
import { setBrand ,setDefaultProductImage } from "../reducer/settings";
import API from "../auth/auth";
const Products = () => {
    const [products,setProducts] = useState([]);
    const [showSpinner,setShowSpinner] = useState(true);
    const settings = useSelector((state) => state.settings);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const host = API.defaults.baseURL ;
    if (!settings.brand | !settings.background_image | !settings.default_product_image){
        API.get("/settings/").then(
            (response) => {
                const data = response.data
                if(data.brand){
                    dispatch(setBrand(data.brand))
                }if(data.default_product_image){
                    dispatch(setDefaultProductImage(data.default_product_image))
                }
            }
        ).then(
            (error) => {
                console.log(error)
            }
        )
    }
    useEffect(()=>{
        const getData = async ()=>{
            await API.get("/products/").then(
                (response) => {
                    setProducts(response.data)
                    setTimeout(()=>{
                        setShowSpinner(false)
                    },400)
                }
            ).then(
                (error) => {
                    console.log(error)
                }
            )
        };getData();
    },[])
    return ( 
        <div className="products-sections">
            <h2>Products</h2>
            {
                !showSpinner && products && <div className="products">
                    {
                        products.map((product,index) => {
                            return (
                                <div className="product" key={index}>
                                    {
                                        product.picture && <img 
                                        src={product.picture} />
                                    }
                                    {
                                        !product.picture && settings.default_product_image && <img 
                                        src={`${host}${settings.default_product_image}`} />
                                    }
                                    <h6>{product.title}</h6>
                                    <div className="btn-group">
                                        <button className="show-btn">مشاهده</button>
                                        {
                                            user.is_master && <button className="change-btn">تغییر</button>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
            {
                showSpinner && <div className="spinner">
                    <BallTriangle width={"10rem"} color="rgb(0,110,255)" />
                </div>
            }
        </div>
    )
};export default Products ;