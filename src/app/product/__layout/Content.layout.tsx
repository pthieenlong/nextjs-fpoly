'use client'
import React, { useState } from 'react';
import { ReviewLayout } from './Review.layout';
export default function ContentLayout() {
  const [contentState, setContentState] = useState("PD");
  function renderSwitch(param: string) {
    switch (param) {
      case "PD": return <> Product Details </>
      case "RR": return <ReviewLayout/>
      case "FQ": return <> FAQs </>
      default: return <ReviewLayout/>
    }
  }
  return (
    <section>
      <header>
        <div className="" onClick={() => {setContentState("PD")}}>
          Product Details
        </div>
        <div className="" onClick={() => {setContentState("RR")}}>
          Rating & Reviews
        </div>
        <div className="" onClick={() => {setContentState("FQ")}}>
          FAQs
        </div>
      </header>
      <section>
        {
          renderSwitch(contentState)
        }
      </section>
    </section>
  )
}