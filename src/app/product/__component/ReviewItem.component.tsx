import { CheckBadgeIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
export default function ReviewItemComponent() {
  return (
    <article className="max-w-[610px] border rounded-xl">
      <div className="flex items-center justify-between">
        <div>Rating with start</div>
        <div className="w-8 h-8 flex justify-center items-center">
          <ExclamationCircleIcon className="w-full h-full"/>
        </div>
      </div>
      <div className="">
        <p>Samantha D. <CheckBadgeIcon/></p>
        <p>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
        <p>Posted on December 14, 2024</p>
      </div>
    </article>
  );
}