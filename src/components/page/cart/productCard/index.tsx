import { useSelector } from "react-redux"
import CartHandler from "../../product/cartHandler"
import { useEffect, useState } from "react"
import { Iproduct } from "@/interfaces/product"

interface Iprops{
    id : string
}

const ProductCard = ({id}:Iprops)=>{

    const [product , setProduct] = useState<Iproduct | null>(null)

    const cartData = useSelector((state: any) => state.cart)
    const count = cartData.find((item: any) => item.id === id)?.count ?? 0

    useEffect(()=>{
        fetch('http://api.alikooshesh.ir:3000/api/records/products/' + id, {
            headers: {
                api_key: "maktab124mhnDO1BjkB9Vd3rVov5MEFPPfGcsWgVh0mXDAjFX6kH5Meuu5Ud4thy2yQ4ZLEAvKo0vwrNGuaiqusgiKnJodBPCGq3hK1g6mZfskj9t5Lmwz7x08JwoU3E"
            }
        }).then(res => res.json())
        .then(result => setProduct(result))
    },[id])

    if(!product){
        return null
    }

    return(
        <div className="p-1 border border-black flex items-center justify-between">
            <p>{product.title}</p>
            <div>
                <CartHandler id={id}/>
                <div className="flex items-center gap-2">
                <span className="p-1 rounded-full bg-red-200 text-red-600" dir="ltr">
                    -{product.discount_percent}%
                </span>
                <p>
                    {(product.price * ((100 - product.discount_percent) % 100) * count)} تومان
                </p>
            </div>
            </div>
        </div>
    )
}

export default ProductCard