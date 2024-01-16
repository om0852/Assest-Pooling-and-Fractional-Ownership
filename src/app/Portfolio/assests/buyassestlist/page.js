

"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import "../../../../css/BuyAssestList.css";
import Web3 from "web3";

export default function Main() {
  const router = useRouter();

  const [myContract, setMyContract] = useState(null);
  const [web3, setweb3] = useState(null);
  const [portfoliodata, setportfoliodata] = useState("");
  const [DeleteCartState, setDeleteCartState] = useState(false);
  const [Deletedata, setDeletedata] = useState(null);
  const [sender, setsender] = useState(null);
  let total = 0;
  const fetchdata = async () => {
    let APFOS_useremail = localStorage.getItem("APFOS_useremail");
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/portfolio/Assest/BuyAssestList`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: APFOS_useremail }),
    });
    const response = await res.json();
    setportfoliodata(response.error);
  };
  const handleDeleteCart = (id) => {
    setDeleteCartState(true);
  };
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    setContract();
  }, []);
  const handleAccountsChanged = async (accounts) => {
    setsender(accounts[0]); // Use the first account in the array
  };
  const fetchEthereumPrice = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr"
      );
      const data = await response.json();
      return data.ethereum.inr;
      // setEthPriceInINR(data.ethereum.inr);
    } catch (error) {
      console.error("Error fetching Ethereum price:", error);
    }
  };

  const setContract = async () => {
    try {
      let web3c = new Web3(window.ethereum);
      // console.log(a);
      setweb3(web3c);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      // Use the first account in the array
      const contractAddress = "0x4C2E31D9a55D82380d7E9C7779dd232AFBDA2d52";
      const myContractInstance = new web3c.eth.Contract([
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "balances",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "contractBalance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            }
          ],
          "name": "deposit",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            }
          ],
          "name": "getBalance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "internalType": "address payable",
              "name": "_receiver",
              "type": "address"
            }
          ],
          "name": "withdraw",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        }
      ], contractAddress);
      console.log(myContractInstance);
      setMyContract(myContractInstance);
    } catch (error) {
      console.log(error);
      alert("connect to network");
    }
  };
  const handleWithdraw = async () => {
    try {
      let p;
      try {
        p = await fetchEthereumPrice();
      } catch (error) {
        return alert("check internet connection,try again");
      }
      console.log(p, Deletedata.AssestBuyPrice);
      const amountInEther =
        (parseFloat(Deletedata.AssestBuyPrice) / parseFloat(p)) *
        1000000000000000000;
      console.log(amountInEther);

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const sender = accounts[0];
      // console.log(Deletedata._id);
      const result = await myContract.methods
        .withdraw(
          Deletedata.AssestId,
          parseInt(amountInEther),
          "0xaca8Dd3EC734Db2847c016356F682e5CB7Fe7783"
        )
        .send({
          from: sender,
          gas: 90000,
        });

      console.log(result);
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/portfolio/Assest/SellAssest`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Deletedata._id,
          price: Deletedata.AssestBuyPrice,
          hash: result.transactionHash,
        }),
      });
      const response = await res.json();
      if (response.status == 200) {
        toast.success("Asset Sell Successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        window.location.reload();
        router.push("/Portfolio/assests/buyassestlist");
      } else {
        toast.error("Trnsaction Failed ,Try Again", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        router.push("/Portfolio/assests/buyassestlist");
      }
      // await handleSubmit(e, result, amountInEther);
    } catch (error) {
      console.log(error);
      return alert("invalid attempt,try again");
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="mx-auto m-4 md:m-8 md:px-16 px-2 h-screen">
      {DeleteCartState && (
        <div class="fixed top-32 left-[10%] md:left-[30%] lg:left-[40%]  z-50 flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-blue-900 to-gray-800 text-white shadow-gray-900/20 shadow-md w-full max-w-[20rem] p-3">
          <div className="mb-6 md:mb-0 flex flex-row justify-content-center justify-center my-2">
            <p className="text-2xl text-center text-white font-bold ml-3 bg-red-500 w-auto h-auto py-1 pr-2">
              <span className=" bg-black text-white px-2 py-1">Bluechip</span>{" "}
              Art{" "}
            </p>
          </div>
          <div class="py-6">
            <ul class="flex flex-col gap-4 ">
              <li class="flex items-center gap-4">
                <span class="p-1 border rounded-full border-white/20 bg-white/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-3 h-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  Title:{Deletedata ? Deletedata.AssestTitle : "N/A"}
                </p>
              </li>
              <li class="flex items-center gap-4">
                <span class="p-1 border rounded-full border-white/20 bg-white/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-3 h-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  Profit:
                  {Deletedata
                    ? Deletedata.AssestBuyPrice - Deletedata.OrginalBuyPrice
                    : "N/A"}
                </p>
              </li>
              <li class="flex items-center gap-4">
                <span class="p-1 border rounded-full border-white/20 bg-white/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-3 h-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  Buy Price:{Deletedata ? Deletedata.OrginalBuyPrice : "N/A"}
                </p>
              </li>
              <li class="flex items-center gap-4">
                <span class="p-1 border rounded-full border-white/20 bg-white/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-3 h-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  Sell Price:{Deletedata ? Deletedata.AssestBuyPrice : "N/A"}
                </p>
              </li>
              <li class="flex items-center gap-4">
                <span class="p-1 border rounded-full border-white/20 bg-white/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-3 h-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  Life time technical support
                </p>
              </li>
            </ul>
          </div>
          <div class="flex w-full flex-row justify-center items-center">
            <button onClick={handleWithdraw} className="w-[50%] text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm m-2 px-3 py-2.5 text-center ">
              Sell
            </button>
            <button onClick={() => {
              setDeleteCartState(false);
            }} className="w-[50%] text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm m-2 px-3 py-2.5 text-center ">
              Cancel
            </button>
          </div>
        </div>
      )}

      <h1 className="mx-auto bg-white p-2 rounded w-fit text-3xl font-semibold mb-4">
        All Assets
      </h1>
      <div className=" bg-white shadow-md rounded-lg md:overflow-hidden overflow-scroll">
        <div className="relative overflow-x-auto overflow-y-hidden">
          <table className="w-full px-4 text-md text-left  text-black ">
            <thead className="text-md text-white uppercase bg-blue-400 ">
              <tr className="">
                <th scope="col" className="px-6 py-3">
                  Asset Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Invest Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Current Price                </th>
                <th scope="col" className="px-6 py-3">
                  Sell
                </th>
              </tr>
            </thead>
            <tbody>
              {portfoliodata &&
                portfoliodata.map((data) => (
                  <tr key={data._id} className="bg-white border-b ">
                    <td
                      scope="row"
                      className="px-6 py-4  text-gray-900 whitespace-nowrap "
                    >
                      <p className="text-lg font-semibold">
                        {data.AssestTitle}
                      </p>
                      <p className="text-gray-500">
                      </p>
                    </td>
                    <td className="px-6 py-4">{data.OrginalBuyPrice}</td>
                    <td className="px-6 py-4">
                      {data.AssestBuyPrice}
                    </td>

                    <td className="px-6 py-4">
                      <button
                        onClick={() => {
                          handleDeleteCart(data);
                          setDeletedata(data);
                        }}
                        className="text-red-500 border py-1 px-2 rounded hover:text-red-700 hover:font-bold focus:outline-none"
                      >
                        Sell
                      </button>
                    </td>
                  </tr>
                ))}

              <tr className="bg-white border-b ">
                <td className="px-6 py-4">
                  <p className="text-lg font-semibold">
                    Assets:{portfoliodata && portfoliodata.length}
                  </p>
                </td>
                <td className="px-6 py-4">
                  {portfoliodata && portfoliodata.forEach(element => {
                    total += parseFloat(element.OrginalBuyPrice);
                  })}
                  <p className="text-lg font-semibold">Total Assests Price:{total}</p>
                </td>

                <td className="px-6 py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link href="/Portfolio/assests/sellassests">Sell Assest List</Link>
      </div>
    </div>
  );
}
