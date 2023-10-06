import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./home.css";
import { Navbar } from "../navbar/navbar";
import { Section } from "./section/section";

export function Home() {
  return (
    <div>
      <Navbar />
      <Section />
    </div>
  );
}
