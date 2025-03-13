'use client'

import { add, remove } from "@/redux/reducers/cartReducer"
import { useDispatch, useSelector } from "react-redux"

interface Iprops {
    id: string
}

const CartHandler = ({ id }: Iprops) => {
    const dispatch = useDispatch()

    const cartData = useSelector((state: any) => state.cart)
    const count = cartData.find((item: any) => item.id === id)?.count ?? 0

    console.log(cartData)

    return (
        <div className="p-1 border border-black flexx items-center gap-1">
            <button onClick={()=> dispatch(add({id}))}>+</button>
            <p>تعداد : {count}</p>
            <button onClick={()=> dispatch(remove({id}))}>-</button>
        </div>
    )
}

export default CartHandler