import CartHandler from "@/components/page/product/cartHandler"
import { Iproduct } from "@/interfaces/product"

async function getData(id: string) {
    const response = await fetch(process.env.PUBLIC_NEXT_BASE_API_URL + '/api/records/products/' + id, {
        headers: {
            api_key: process.env.PUBLIC_NEXT_API_KEY ?? ""
        }
    })
    const result = await response.json()
    return result
}

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const product: Iproduct = await getData(id)
    return (
        <div>
            <img className="h-[160px]" src={product.image} />
            <div className="flex flex-wrap gap-2">
                {product.image_gallery.map(i => <img className="h-[32px]" src={i} />)}
            </div>
            <h1>
                {product.title}
            </h1>
            <h2>
                {product.company_title}
            </h2>
            <div className="flex items-center gap-2">
                <span className="p-1 rounded-full bg-red-200 text-red-600" dir="ltr">
                    -{product.discount_percent}%
                </span>
                <p>
                    {product.price * ((100 - product.discount_percent) % 100)} تومان
                </p>
            </div>
            <section>
                {product.details.map(d => (
                    <div className="w-full flex items-center justify-between gap-2">
                        <p>{d.title}</p>
                        <p>{d.content}</p>
                    </div>
                ))}
            </section>

            <CartHandler id={id}/>
        </div>
    )
}

export default ProductPage