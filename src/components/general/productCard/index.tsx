import Link from "next/link"

interface Iprops {
    id: string | number
    image: string
    title: string
    price: number
    discountPercent: number
}

const ProductCard = ({ id, image, title, price, discountPercent }: Iprops) => {
    return (
        <Link href={`/product/${id}`}>
            <div className="w-full border border-black">
                <img className="w-full" src={image} />
                <div className="mt-1 p-2 flex flex-col gap-1">
                    <h3>{title}</h3>
                    <div className="flex items-center gap-2">
                        <span className="p-1 rounded-full bg-red-200 text-red-600" dir="ltr">
                            -{discountPercent}%
                        </span>
                        <p>
                            {price * ((100 - discountPercent) % 100)} تومان
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard