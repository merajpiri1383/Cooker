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
    const [page,setPage] = useState(1);
    const [prePage,setPrePage] = useState(false);
    const [nextPage,setNextPage] = useState(false);
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
            (error) => {}
        )
    }
    const getData = async ()=>{
        await API.get(`/products/?page=${page}`).then(
            (response) => {
                setProducts(response.data.results)
                if(response.data.next){
                    setNextPage(true);
                }else{
                    setNextPage(false);
                }
                if(response.data.previous){
                    setPrePage(true);
                }else{
                    setPrePage(false);
                }
                setTimeout(()=>{
                    setShowSpinner(false)
                },400)
            }
        ).then(
            (error) => {}
        )
    };
    useEffect(()=>{
        setShowSpinner(true)
        getData();
    },[page])
    return ( 
        <div className="products-sections">
            <h2>Products</h2>
            {
                !showSpinner && products && <div className="products">
                    {
                        products && products.map((product,index) => {
                            return (
                                <div className="product" key={index}>
                                    {
                                        product.picture &&  <img src={product.picture} />
                                    }
                                    {
                                        !product.picture && settings.default_product_image && <img 
                                        src={`${host}${settings.default_product_image}`} />
                                    }
                                    <h3>{product.title}</h3>
                                    <div className="btn-group">
                                        <button className="show-btn">افزودن به سبد خرید</button>
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
            <div className="product-pagination">
                <button disabled={!prePage} onClick={()=> setPage(page - 1)}>previous</button>
                <button disabled={!nextPage} onClick={()=> setPage(page + 1)}>next</button>
            </div>
        </div>
    )
};export default Products ;