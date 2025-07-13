"use client";
import React, { SyntheticEvent, useState } from "react";
import { ReviewLayout } from "./Review.layout";
import { Tab, Tabs } from "@mui/material";
export default function ContentLayout() {
  const [contentState, setContentState] = React.useState("RR");

  function renderSwitch(param: string) {
    switch (param) {
      case "PD":
        return <> Product Details </>;
      case "RR":
        return <ReviewLayout />;
      case "FQ":
        return <> FAQs </>;
      default:
        return <ReviewLayout />;
    }
  }

  return (
    <section className="my-4">
      <section>{renderSwitch(contentState)}</section>
    </section>
  );
}
