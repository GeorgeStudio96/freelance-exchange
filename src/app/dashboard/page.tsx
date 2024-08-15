"use server";

import Link from "next/link";
import Counter from "../components/Counter";
import { Suspense } from "react";
import Loading from "./Loading";

export default async function HomePage() {
  // async function handleClick() {
  //     'use client'
  //     console.log("You clicked me")
  // }
  return (
    <Suspense fallback={<Loading />}>
      <>
        <h1>This Dashboard page</h1>
        <Link href="/dashboard-info">go to info</Link>
        {/* <Button linkBtn={handleClick}/> */}
        <Counter counterText="отображаем каунтер" />
        <Counter counterText="отображаем каунтер2" />
      </>
    </Suspense>
  );
}
