const ProductPage = async ({params} : {params : Promise<{ id: string }>})=>{
    const {id} = await params
    return(
        <p>pdp {id}</p>
    )
}

export default ProductPage