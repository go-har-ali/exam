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
        <div className="mx-auto row gap-20 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
           {product.map(p =>{
            return(
                <>
                <div className="ml-12 continer shadow-lg col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-2 mt-2 border-black border-2">
                    <img className=" w-auto" src={p.image} alt=""></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">The Coldest Sunset</div>
                        <p className=" text-xl font-bold">Price {p.price} </p>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Add to Cart</button>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </>
            )
           })}
        </div>
    );
}
