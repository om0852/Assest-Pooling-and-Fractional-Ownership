"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const router = useRouter();
  const [active, setactive] = useState("user");
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    role:"user",
    password: "",
    cpassword: "",
  });

  const onchange = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setdata({ ...data, [name]: val });
    console.log(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.email && data.name && data.password && data.cpassword) {
      if (data.password === data.cpassword) {
        const res = await fetch(`http://localhost:3000/api/signup`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const response = await res.json();
        if (response.status === 200) {
          toast.success("Registration Successful", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(() => {
            router.push("/orgsignup");
          }, 3000);
        } else {
          toast.error("Registration Failed.Try again", {
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
      } else {
        toast.error("Confirm Password Not Match", {
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
    } else {
      toast.error("Please Fill all Fields", {
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
    <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
      <div className="mb-6 md:mb-0 flex flex-row justify-content-center justify-center my-2">
        <p className="text-2xl text-center text-white font-bold ml-3 bg-red-500 w-auto h-auto py-1 pr-2">
          <span className=" bg-black text-white px-2 py-1">Bluechip</span> Art{" "}
        </p>
      </div>
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Create an User account
          </h1>
          <div className="flex w-[100%]">
            <Link
              href={"/signup"}
              className="w-[50%] text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm m-2 px-3 py-2.5 text-center "
            >
              User
            </Link>
            <Link
              href={"/orgsignup"}
              className="w-[50%] text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm m-2 px-3 py-2.5 text-center "
            >
              Organization
            </Link>
          </div>

          <form method="POST" className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your Name
              </label>
              <input
                onChange={(e) => onchange(e)}
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Enter your Name"
                required="true"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                onChange={(e) => onchange(e)}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="name@company.com"
                required="true"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your Phone Number
              </label>
              <input
                onChange={(e) => onchange(e)}
                type="text"
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="123*****9"
                required="true"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                onChange={(e) => onchange(e)}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                required="true"
              />
            </div>
            <div>
              <label
                htmlFor="cpassword"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Confirm password
              </label>
              <input
                onChange={(e) => onchange(e)}
                type="password"
                name="cpassword"
                id="cpassword"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                required="true"
              />
            </div>

            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 ">
              Already have an account?{" "}
              <Link
                href={"/login"}
                className="font-medium text-primary-600 hover:underline "
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
