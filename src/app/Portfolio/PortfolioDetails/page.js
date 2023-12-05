"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from 'next/link'

export default function Main() {
  const router = useRouter();


  const [portfoliodata, setportfoliodata] = useState("");
  const fetchdata = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let pid = urlParams.get('pid'); // value1

    const res = await fetch(`http://localhost:3000/api/portfolio/portfoliodetails`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pid: pid }),
    });
    const response = await res.json();
    console.log(response)
    setportfoliodata(response.error);
  }
  useEffect(() => {
    fetchdata();
  }, [])
  return (
    <div className="w-full h-screen rounded p-2 md:px-16">
      <div className="flex justify-center items-center my-2 mb-4">
        <span className="text-white text-lg font-bold">Portfolio List</span>
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
              <p className="mx-auto font-bold w-16 py-1 px-2">Assest Type</p>
            </div>
            <div className="w-[24%] text-center mx-1">
              <p className="mx-auto font-bold w-16 py-1 px-2">Assest Quantity</p>
            </div>
            <div className="w-[24%] text-center mx-1">
              <p className="mx-auto font-bold w-16 py-1 px-2">Assest Description</p>
            </div>

            <div className="w-[24%] text-center mx-1">
              <p className="mx-auto font-bold w-16 py-1 px-2">Option</p>
            </div>
          </div>
          <div className="bg-white  rounded-lg my-2">
            {
              portfoliodata.Assests && portfoliodata.Assests.map((data) => {
                return (
                  <div className="flex rounded items-center border-b-2 border-gray-300 px-5 py-5" key={data.id}>
                    <div className="w-[75%]">
                      <p className="text-lg font-semibold">{data.Assest_Title}</p>
                    </div>
                    <div className="w-[18%] md:w-32 text-center mx-1">
                      <p className="text-lg font-bold">{data.price}</p>
                    </div>
                    <div className="w-[18%] md:w-32 text-center mx-1">
                      <p className="text-lg font-bold">{data.AType}</p>
                    </div>

                    <div className="w-[18%] md:w-32 text-center mx-1">
                      <p className="text-lg font-bold">{data.Assest_Quantity}</p>
                    </div>
                    <div className="w-[18%] md:w-32 text-center mx-1">
                      <p className="text-lg font-bold">{data.Assest_Description}</p>
                    </div>
                    <div className="w-[12%] text-center mx-1">
                      <button className="text-red-500 font-bold py-1 px-2">
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
            }
            <div className="flex rounded items-center border-b-2 border-gray-300 px-5 py-5">
              Total:-  {portfoliodata && portfoliodata.Price}
            </div>

          </div>


        </div>
      </div>
    </div>
    // </div >

  );
}
