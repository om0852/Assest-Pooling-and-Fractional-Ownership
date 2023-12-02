'use client';
import React, { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
    const router=useRouter();
    const [data, setdata] = useState({
      AType:"",
      Assest_Title:"",
      Assest_Price:"",
      Assest_Quantity:"",
      Assest_Description:"",
    Assest_Price:""
    })

    const onchange = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        setdata({ ...data,email:localStorage.getItem("APFOS_useremail")
 ,[name]: val });
        console.log(val);
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:3000/api/portfolio/createportfolio`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const response = await res.json();
        if (response.status === 200) {
          localStorage.setItem('token',response.token)
          toast.success("Login Successful", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
            router.push("/Portfolio");


        } else if(response.status===201) {
          toast.error("Invalid Credentials,Try Again..", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        else if(response.status===400) {
          toast.error("User not found.Please Register", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        else{
          toast.error("Failed to register.Try Again", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      };


  return (
   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  <div className="mb-6 md:mb-0 flex flex-row justify-center my-2">
		</div>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
Add Assest
              </h1>
              <form className="space-y-4 md:space-y-6" method="POST">
                  <div>
                      <label for="Assest_Title" className="block mb-2 text-sm font-medium text-gray-900 ">Assest Name</label>
                      <input onChange={(e)=>onchange(e)} type="text" name="Assest_Title" id="Assest_Title" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter Assest Name" required=""/>
                  </div>
                  <label for="AType" className="block mb-2 text-sm font-medium text-gray-900 ">Assest Type</label>
                  <select onSelect={(e)=>onchange(e)} type="text" name="AType" id="AType" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
<option value="Stock">Stock</option>
<option value="Cryptocurrency">Cryptocurrency</option>
<option value="Painting Assest">Painting Assest</option>
                  </select>
                  <div>
                      <label for="Assest_Quatity" className="block mb-2 text-sm font-medium text-gray-900 ">Assest Quantity</label>
                      <input onChange={(e)=>onchange(e)} type="number" name="Assest_Quatity" id="Assest_Quatity" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter Assest Quantity" required=""/>
                  </div>
                  <div>
                      <label for="Assest_Description" className="block mb-2 text-sm font-medium text-gray-900 ">Assest Description</label>
                      <input onChange={(e)=>onchange(e)} type="text" name="Assest_Description" id="Assest_Description" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter Assest Description" required=""/>
                  </div>
                  <div>
                      <label for="Assest_Price" className="block mb-2 text-sm font-medium text-gray-900 ">Assest Price</label>
                      <input onChange={(e)=>onchange(e)} type="text" name="Assest_Price " id="Assest_Price" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter Assest Price" required=""/>
                  </div>

                  <button onClick={handleSubmit} type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Next</button>

              </form>
          </div>
      </div>
  </div>

  )
}

export default page
