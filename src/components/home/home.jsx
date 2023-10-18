import React, { Component } from "react";
import "./home.css";
import { Section } from "./section/section";
import { Article } from "./article/article";

export function Home() {
  return (
    <div>
      <Section  />
      <Article />
    </div>
  );
}
