import {useState , useEffect } from "react";
import {BallTriangle} from "react-loader-spinner";
import API from "../auth/auth";
const Products = () => {
    const [products,setProducts] = useState([]);
    const [showSpinner,setShowSpinner] = useState(true);
    useEffect(()=>{
        const getData = async ()=>{
            await API.get("/products/").then(
                (response) => {
                    console.log(response)
                    setProducts(response.data)
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
                                    <h3>{product.title}</h3>
                                    <p>{product.price}</p>
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