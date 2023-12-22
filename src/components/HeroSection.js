import { useEffect } from "react";
import { APIs } from "../const/APIs";
import { useExamContext } from "../context/FinalExamContext";
import axios from "axios";

export default function HeroSection() {
    const {product, setProduct} = useExamContext()

    const allProducts = async () =>{
        await axios.get(APIs.ECOMMERCE.PRODUCT.GET_ALL_PRODUCT).then(res =>{
            console.log(res)
            setProduct(res.data)
        })
    }
    useEffect(() =>{allProducts()} ,[])
    return (
        <div>
           {product.map(p =>{
            return(
                <div>
                    <p>{p.id}</p>
                    <h1>{p.title}</h1>
                    <p>{p.price}</p>
                </div>
            )
           })}
        </div>
    );
}
