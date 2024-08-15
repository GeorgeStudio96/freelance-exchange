"use client";

export default function Button() {
  function test() {
    console.log("click this");
  }

  return <button onClick={test}>Click me</button>;
}
