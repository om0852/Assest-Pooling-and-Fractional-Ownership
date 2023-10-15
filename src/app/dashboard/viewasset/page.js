'use client';
import React, { useState } from "react";
// import AddAsset from "./AddAsset";
import  Link  from "next/link";

const AssestList = () => {
  return (
    <div className="w-full h-screen rounded p-2 md:px-16">
      <div className="flex justify-center items-center my-2 mb-4">
        <span className="text-white text-lg font-bold">All Assets</span>
      </div>
      <div className="w-[100%] overflow-auto">
        <div className="max-h-[70vh] w-[50rem] md:w-full md:p-3 bg-white rounded  p-4 md:px-2 overflow-y-scroll">
          <div className="sticky top-0 flex bg-blue-200 rounded items-center border-b border-gray-300 px-5 py-2">
            <div className="w-[75%] ">
              <p className="text-lg font-bold">Asset Name</p>
            </div>
            <div className="w-[18%] md:w-32 text-center mx-1">
              <p className="text-lg font-bold">Price</p>
            </div>
            <div className="w-[24%] text-center mx-1">
              <p className="mx-auto font-bold w-16 py-1 px-2">Qty</p>
            </div>
            <div className="w-[12%] text-center mx-1">
              <button className="text-red-500 font-bold py-1 px-2  ">
                Remove
              </button>
            </div>
          </div>
          <div className="bg-white  rounded-lg my-2">

          <div className="flex rounded items-center border-b-2 border-gray-300 px-5 py-5">
            <div className="w-[75%] ">
              <p className="text-lg font-semibold">lorem sdf sfs ff</p>
            </div>
            <div className="w-[18%] md:w-32 text-center mx-1">
              <p className="text-lg font-bold">499</p>
            </div>
            <div className="w-[24%] text-center mx-1">
              <p className="mx-auto font-bold w-16 py-1 px-2">2</p>
            </div>
            <div className="w-[12%] text-center mx-1">
              <button className="text-red-500 font-bold py-1 px-2  ">
                Delete
              </button>
            </div>
          
          </div>
          <div className="flex rounded items-center border-b-2 border-gray-300 px-5 py-5">
            <div className="w-[75%] ">
              <p className="text-lg font-semibold">lorem sdf sfs ff</p>
            </div>
            <div className="w-[18%] md:w-32 text-center mx-1">
              <p className="text-lg font-bold">499</p>
            </div>
            <div className="w-[24%] text-center mx-1">
              <p className="mx-auto font-bold w-16 py-1 px-2">2</p>
            </div>
            <div className="w-[12%] text-center mx-1">
              <button className="text-red-500 font-bold py-1 px-2  ">
                Delete
              </button>
            </div>
          
          </div>
          <div className="flex rounded items-center border-b-2 border-gray-300 px-5 py-5">
            <div className="w-[75%] ">
              <p className="text-lg font-semibold">lorem sdf sfs ff</p>
            </div>
            <div className="w-[18%] md:w-32 text-center mx-1">
              <p className="text-lg font-bold">499</p>
            </div>
            <div className="w-[24%] text-center mx-1">
              <p className="mx-auto font-bold w-16 py-1 px-2">2</p>
            </div>
            <div className="w-[12%] text-center mx-1">
              <button className="text-red-500 font-bold py-1 px-2  ">
                Delete
              </button>
            </div>
          
          </div>
          <div className="flex rounded items-center border-b-2 border-gray-300 px-5 py-5">
            <div className="w-[75%] ">
              <p className="text-lg font-semibold">lorem sdf sfs ff</p>
            </div>
            <div className="w-[18%] md:w-32 text-center mx-1">
              <p className="text-lg font-bold">499</p>
            </div>
            <div className="w-[24%] text-center mx-1">
              <p className="mx-auto font-bold w-16 py-1 px-2">2</p>
            </div>
            <div className="w-[12%] text-center mx-1">
              <button className="text-red-500 font-bold py-1 px-2  ">
                Delete
              </button>
            </div>
          
          </div>
          <div className="flex rounded items-center border-b-2 border-gray-300 px-5 py-5">
            <div className="w-[75%] ">
              <p className="text-lg font-semibold">lorem sdf sfs ff</p>
            </div>
            <div className="w-[18%] md:w-32 text-center mx-1">
              <p className="text-lg font-bold">499</p>
            </div>
            <div className="w-[24%] text-center mx-1">
              <p className="mx-auto font-bold w-16 py-1 px-2">2</p>
            </div>
            <div className="w-[12%] text-center mx-1">
              <button className="text-red-500 font-bold py-1 px-2  ">
                Delete
              </button>
            </div>
          
          </div>
          <div className="flex rounded items-center border-b-2 border-gray-300 px-5 py-5">
            <div className="w-[75%] ">
              <p className="text-lg font-semibold">lorem sdf sfs ff</p>
            </div>
            <div className="w-[18%] md:w-32 text-center mx-1">
              <p className="text-lg font-bold">499</p>
            </div>
            <div className="w-[24%] text-center mx-1">
              <p className="mx-auto font-bold w-16 py-1 px-2">2</p>
            </div>
            <div className="w-[12%] text-center mx-1">
              <button className="text-red-500 font-bold py-1 px-2  ">
                Delete
              </button>
            </div>
          
          </div>
          <div className="flex rounded items-center border-b-2 border-gray-300 px-5 py-5">
            <div className="w-[75%] ">
              <p className="text-lg font-semibold">lorem sdf sfs ff</p>
            </div>
            <div className="w-[18%] md:w-32 text-center mx-1">
              <p className="text-lg font-bold">499</p>
            </div>
            <div className="w-[24%] text-center mx-1">
              <p className="mx-auto font-bold w-16 py-1 px-2">2</p>
            </div>
            <div className="w-[12%] text-center mx-1">
              <button className="text-red-500 font-bold py-1 px-2  ">
                Delete
              </button>
            </div>
          
          </div>
          <div className="flex rounded items-center border-b-2 border-gray-300 px-5 py-5">
            <div className="w-[75%] ">
              <p className="text-lg font-semibold">lorem sdf sfs ff</p>
            </div>
            <div className="w-[18%] md:w-32 text-center mx-1">
              <p className="text-lg font-bold">499</p>
            </div>
            <div className="w-[24%] text-center mx-1">
              <p className="mx-auto font-bold w-16 py-1 px-2">2</p>
            </div>
            <div className="w-[12%] text-center mx-1">
              <button className="text-red-500 font-bold py-1 px-2  ">
                Delete
              </button>
            </div>
          
          </div>
          <div className="flex rounded items-center border-b-2 border-gray-300 px-5 py-5">
            <div className="w-[75%] ">
              <p className="text-lg font-semibold">lorem sdf sfs ff</p>
            </div>
            <div className="w-[18%] md:w-32 text-center mx-1">
              <p className="text-lg font-bold">499</p>
            </div>
            <div className="w-[24%] text-center mx-1">
              <p className="mx-auto font-bold w-16 py-1 px-2">2</p>
            </div>
            <div className="w-[12%] text-center mx-1">
              <button className="text-red-500 font-bold py-1 px-2  ">
                Delete
              </button>
            </div>
          
          </div>

          <div className="flex rounded items-center border-b-2 border-gray-300 px-5 py-5">
            <div className="w-[75%] ">
              <p className="text-lg font-semibold">lorem sdf sfs ff</p>
            </div>
            <div className="w-[18%] md:w-32 text-center mx-1">
              <p className="text-lg font-bold">499</p>
            </div>
            <div className="w-[24%] text-center mx-1">
              <p className="mx-auto font-bold w-16 py-1 px-2">2</p>
            </div>
            <div className="w-[12%] text-center mx-1">
              <button className="text-red-500 font-bold py-1 px-2  ">
                Delete
              </button>
            </div>
          
          </div>
          <div className="sticky bottom-0 bg-white flex justify-evenly items-center border-b border-gray-200 px-5 py-2">
                <div className="w-[75%]">
                <Link href={'/dashboard/addassets'} className="text-white font-bold bg-blue-900 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm mx-2 px-4 py-2.5 text-center ">Add Assets</Link>
                </div>
                <div className="w-[32%] text-center mx-1">
                    <p className="text-lg font-bold">Total Price</p>
                    <p className="text-lg font-semibold">$49.99</p>
                </div>
                <div className="w-[32%] ">
                <p className="text-lg font-bold">Quantity</p>
                    <p className="text-center w-16 border rounded-md py-1 px-2 focus:outline-none" >2</p>
                </div>
            </div>

          </div>
          
     
        </div>
      </div>
    </div>
  )
};

export default AssestList;
