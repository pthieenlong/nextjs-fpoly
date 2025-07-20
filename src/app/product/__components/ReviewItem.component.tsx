import { CheckIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Rating } from "@smastrom/react-rating";
export default function ReviewItemComponent() {
  return (
    <article className="max-w-[600px] border border-gray-400 rounded-xl px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <Rating style={{ maxWidth: 120 }} value={4.5} readOnly={true} />
        </div>
        <div className="w-8 h-8 flex justify-center items-center">
          <ExclamationCircleIcon className="w-full h-full text-gray-600" />
        </div>
      </div>
      <div className="">
        <p className="flex items-center gap-4 ">
          <p className="font-semibold text-lg"> Samantha D. </p>
          <p className="bg-green-600 overflow-hidden rounded-full w-6 h-6 flex items-center justify-center">
            <CheckIcon className="w-4 h-4 text-white" />
          </p>
        </p>
        <p>
          "I absolutely love this t-shirt! The design is unique and the fabric
          feels so comfortable. As a fellow designer, I appreciate the attention
          to detail. It's become my favorite go-to shirt."
        </p>
        <p>Posted on December 14, 2024</p>
      </div>
    </article>
  );
}
