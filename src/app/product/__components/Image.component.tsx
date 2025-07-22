import Image from "next/image"
export default function ProductImageItem ( {source, alt = "Product image" } : { source: string, alt?: string}) {
  return (
    <div className="w-25 h-25 border rounded-2xl overflow-hidden relative">
      <Image src={source ? source : "http://localhost:8000/product/tshirt.png"} alt={alt} fill={true} className="hover:scale-115 transition-all"/>
    </div>
  )
}