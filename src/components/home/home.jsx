import React, { Component } from "react";
import "./home.css";
import { Navbar } from "../navbar/navbar";
import { Section } from "./section/section";

export function Home() {
  return (
    <div className="wrapper">
      <Navbar />
      <Section />
    </div>
  );
}
