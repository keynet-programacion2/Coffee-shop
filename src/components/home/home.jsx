import React, { Component } from "react";
import "./home.css";
import { Section } from "./section/section";
import { Article } from "./article/article";

export function Home({ addToCart }) {
  return (
    <div>
      <Section  />
      <Article addToCart={addToCart} />
    </div>
  );
}
