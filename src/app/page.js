"use client";
import Home from "./components/Home"
import { useRouter } from "next/navigation";

export default function Main() {
  const router=useRouter();

  if(!localStorage.getItem("token")){
router.push("/login")
  }
  return (
    <Home/>
  )
}
