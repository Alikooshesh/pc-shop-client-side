'use client'

import ProductCard from "@/components/page/cart/productCard"
import { useSelector } from "react-redux"

const CartPage = ()=>{

    const cartData = useSelector((state:any)=> state.cart)

    return(
        <div>
            {cartData.map((item:any) => (
                <ProductCard key={item.id} id={item.id}/>
            ))}
        </div>
    )
}

export default CartPage