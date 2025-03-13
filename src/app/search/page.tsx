'use client'

import { useSearchParams } from "next/navigation"

const ProductListPage = ()=>{
    const searchParams = useSearchParams()

    const category = searchParams.get('category')
    return(
        <p>plp {category}</p>
    )
}

export default ProductListPage