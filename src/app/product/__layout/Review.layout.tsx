import { AdjustmentsVerticalIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import ReviewItemComponent from "../__component/ReviewItem.component";
export function ReviewLayout() {
  return (<section>
    <header className="flex items-center w-full justify-between">
      <p><span className="font-bold text-2xl">All Reviews</span> <span className="font-light text-sm">(451)</span></p>
      <div className="flex items-center gap-4">
        <button className="w-12 text-white rounded-full bg-gray-400 py-3 px-3">
          <AdjustmentsVerticalIcon className="w-full"/>
        </button>
        {/* select */}
        <div className="max-w-30">
          <div className="flex gap-3 px-5 py-3 bg-[#ccc] rounded-full"><p className="text-center">Latest</p> <ChevronDownIcon className="w-6 h-6"/></div>
        </div>
        <div className="flex gap-3 px-6 py-3 bg-black text-white rounded-full">
          <p>Write a review</p>
        </div>
      </div>
    </header>
    <section>
      <ReviewItemComponent></ReviewItemComponent>
      <ReviewItemComponent></ReviewItemComponent>
      <ReviewItemComponent></ReviewItemComponent>
      <ReviewItemComponent></ReviewItemComponent>
      <ReviewItemComponent></ReviewItemComponent>
      <ReviewItemComponent></ReviewItemComponent>
    </section>
  </section>)
}