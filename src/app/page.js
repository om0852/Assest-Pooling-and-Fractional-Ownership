"use client";
import Home from "./components/Home";
import {useEffect} from "react";
import { useRouter } from "next/navigation";

export default function Main() {
  const router=useRouter();

  useEffect(()=>{
    if(!localStorage.getItem("token")){
  router.push("/login")
    }
  },[])
  return (
    <Home/>
  )
}
