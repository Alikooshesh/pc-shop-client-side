import ProductCard from "@/components/general/productCard";
import HeroBanner from "@/components/page/home/heroBanner";
import { Iproduct } from "@/interfaces/product";

async function getAllProducts() {
  const response = await fetch(process.env.PUBLIC_NEXT_BASE_API_URL + '/api/records/products', {
    headers: {
      api_key: process.env.PUBLIC_NEXT_API_KEY ?? ""
    }
  })
  const result = await response.json()
  return result.records
}

export default async function Home() {
  const products: Iproduct[] = await getAllProducts()

  return (
    <div className="w-full">
      <HeroBanner images={products.map(p => ({
        id: p.id,
        src: p.image
      }))} />

      <section className="w-full p-2 mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(p => (
          <ProductCard
            id={p.id}
            image={p.image}
            title={p.title}
            price={p.price}
            discountPercent={p.discount_percent}
          />
        ))}
      </section>

      <section>
        <p>ما اومدیم که بمانیم</p>
      </section>
    </div>
  );
}
