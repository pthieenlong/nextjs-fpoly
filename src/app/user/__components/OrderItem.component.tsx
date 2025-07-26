import Image from "next/image";
import Link from "next/link";

type OrderItemProp = {
  slug: string,
  name: string,
  image: string,
  price: number,
  quantity: number,
  size?: string,
  color?: string,
}
export default function OrderItemComponent(props: OrderItemProp) {
  return (
    <article>
      <Image src={props.image} alt={props.slug} fill={true} className=""/>
      <div className="">
        <Link href=''>{props.name}</Link>
        <p>Color: {props.color ?? "None"}, Size: {props.size ?? "None"}, </p>
      </div>
      <p>
        $ {props.price}
      </p>
      <p>
        {props.quantity}
      </p>
      <p>{props.quantity * props.price}</p>
    </article>
  )
}