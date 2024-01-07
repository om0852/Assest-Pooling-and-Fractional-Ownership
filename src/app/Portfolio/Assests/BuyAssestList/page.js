"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from 'next/link'
import { toast } from "react-toastify";
import "../../../../css/BuyAssestList.css";
import Web3 from "web3";
import ASPOS from "../buyassest/APFOS_Contract.json";

export default function Main() {
  const router = useRouter();

  const [myContract, setMyContract] = useState(null);
  const [web3, setweb3] = useState(null);
  const [portfoliodata, setportfoliodata] = useState("");
  const [DeleteCartState, setDeleteCartState] = useState(false);
  const [Deletedata, setDeletedata] = useState(null);
  const fetchdata = async () => {
    let APFOS_useremail = localStorage.getItem("APFOS_useremail");

    let url = window.location.href;
    let domain = new URL(url).hostname;
    let protocol = new URL(url).protocol;
    let port = new URL(url).port ? `:${new URL(url).port}` : '';
    let urlString = `${protocol}//${domain}${port}`;

    const res = await fetch(`${urlString}/api/portfolio/Assest/BuyAssestList`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: APFOS_useremail }),
    });
    const response = await res.json();
    setportfoliodata(response.error);
  }
  const handleDeleteCart = (id) => {
    setDeleteCartState(true);

  }
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    setContract();
  }, []);
  const handleAccountsChanged = async (accounts) => {
    setsender(accounts[0]); // Use the first account in the array
  };
  const fetchEthereumPrice = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr');
      const data = await response.json();
      return (data.ethereum.inr);
      // setEthPriceInINR(data.ethereum.inr);
    } catch (error) {
      console.error('Error fetching Ethereum price:', error);
    }
  }

  const setContract = async () => {
    try {
      let web3c = new Web3(window.ethereum)
      // console.log(a);
      setweb3(web3c);
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      // Use the first account in the array
      const contractAddress = "0x930BC5ec6339AbC9343de0b5c1b5C1b4163670c8";
      console.log(ASPOS)
      const myContractInstance = new web3c.eth.Contract(ASPOS, contractAddress);
      console.log(myContractInstance)
      setMyContract(myContractInstance);

    } catch (error) {
      console.log(error)
      alert("connect to network")
    }
  }
  const handleWithdraw = async () => {
    try {

      let url = window.location.href;
      let domain = new URL(url).hostname;
      let protocol = new URL(url).protocol;
      let port = new URL(url).port ? `:${new URL(url).port}` : '';
      let urlString = `${protocol}//${domain}${port}`;

      let p;
      try {
        p = await fetchEthereumPrice();
      }
      catch (error) {
        return alert("check internet connection,try again");
      } console.log(p, Deletedata.AssestBuyPrice)
      const amountInEther = (parseFloat(Deletedata.AssestBuyPrice) / parseFloat(p)) * 1000000000000000000;
      console.log(amountInEther)

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const sender = accounts[0];
      console.log(Deletedata._id)
      const result = await myContract.methods.withdraw(Deletedata.AssestId, parseInt(amountInEther), "0xaca8Dd3EC734Db2847c016356F682e5CB7Fe7783").send({
        from: sender,
        gas: 200000,
        gasPrice: web3.utils.toWei('40', 'gwei'),
      });

      console.log(result);
      const res = await fetch(`${urlString}/api/portfolio/Assest/SellAssest`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: Deletedata._id, price: Deletedata.AssestBuyPrice, hash: result.transactionHash }),
      });
      const response = await res.json();
      if (response.status == 200) {
        toast.success("Assest Sell Successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        router.push("/Portfolio/assests/buyassestlist");
      }
      else {
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
    }
    catch (error) {
      console.log(error)
      return alert("invalid attempt,try again");
    }
  }
  useEffect(() => {
    fetchdata();
  }, [])
  return (
    <div className="mx-auto m-4 md:m-8 md:px-16 px-2">
      {DeleteCartState ? <div className="DeleteCart-main">
        <div className="DeleteCart">
          <h2>Title{Deletedata.AssestTitle}</h2>
          <h2>Profit{Deletedata.AssestBuyPrice - Deletedata.OrginalBuyPrice}</h2>
          <h2>BuyPrice{Deletedata.OrginalBuyPrice}</h2>
          <h2>Sell Price{Deletedata.AssestBuyPrice}</h2>
          <button onClick={handleWithdraw}>sell</button>
          <button onClick={() => { setDeleteCartState(false) }}>Cancel</button>
        </div>
      </div> : ""}

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
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Sell
                </th>
              </tr>
            </thead>
            <tbody>
              {portfoliodata && portfoliodata.map((data) => <tr className="bg-white border-b ">
                <td
                  scope="row"
                  className="px-6 py-4  text-gray-900 whitespace-nowrap "
                >
                  <p className="text-lg font-semibold">{data.AssestTitle}</p>
                  <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
                </td>
                <td className="px-6 py-4">{data.AssestTotalPrice}</td>
                <td className="px-6 py-4">{data.Profit[data.Profit.length]}</td>

                <td className="px-6 py-4">
                  <button onClick={() => { handleDeleteCart(data); setDeletedata(data) }} className="text-red-500 border py-1 px-2 rounded hover:text-red-700 hover:font-bold focus:outline-none">
                    Sell
                  </button>
                </td>
              </tr>)}


              <tr className="bg-white border-b ">
                <td className="px-6 py-4">
                  <p className="text-lg font-semibold">Assets:10</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-lg font-semibold">Price:140000</p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-semibold py-1 px-2 ">Quantity:4</p>
                </td>
                <td className="px-6 py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>
    </div>
    // <div className="w-full h-screen rounded p-2 md:px-16">
    //     <div className="flex justify-center items-center my-2 mb-4">
    //         <span className="text-white text-lg font-bold">Portfolio List</span>
    //     </div>
    //     <div className="w-[100%] overflow-auto">
    //         <div className="max-h-[70vh] w-[50rem] md:w-full md:p-3 bg-white rounded  p-4 md:px-2 overflow-y-scroll">
    //             <div className="sticky top-0 flex bg-blue-200 rounded items-center border-b border-gray-300 px-5 py-2">
    //                 <div className="w-[75%] ">
    //                     <p className="text-lg font-bold">Asset Name</p>
    //                 </div>
    //                 <div className="w-[18%] md:w-32 text-center mx-1">
    //                     <p className="text-lg font-bold">Price</p>
    //                 </div>
    //                 <div className="w-[24%] text-center mx-1">
    //                     <p className="mx-auto font-bold w-16 py-1 px-2">Assest Type</p>
    //                 </div>
    //                 <div className="w-[24%] text-center mx-1">
    //                     <p className="mx-auto font-bold w-16 py-1 px-2">Assest Quantity</p>
    //                 </div>
    //                 <div className="w-[24%] text-center mx-1">
    //                     <p className="mx-auto font-bold w-16 py-1 px-2">Assest Description</p>
    //                 </div>

    //                 <div className="w-[24%] text-center mx-1">
    //                     <p className="mx-auto font-bold w-16 py-1 px-2">Option</p>
    //                 </div>
    //             </div>
    //             <div className="bg-white  rounded-lg my-2">
    //                 {
    //                     portfoliodata && portfoliodata.map((data) => {
    //                         return (
    //                             <div className="flex rounded items-center border-b-2 border-gray-300 px-5 py-5" key={data._id}>
    //                                 <div className="w-[75%]">
    //                                     <p className="text-lg font-semibold">{data.AssestTitle}</p>
    //                                 </div>
    //                                 <div className="w-[18%] md:w-32 text-center mx-1">
    //                                     <p className="text-lg font-bold">{data.AssestTotalPrice}</p>
    //                                 </div>
    //                                 <div className="w-[18%] md:w-32 text-center mx-1">
    //                                     <p className="text-lg font-bold">{data.Profit[data.Profit.length]}</p>
    //                                 </div>


    //                                 <div className="w-[12%] text-center mx-1">
    //                                     <button className="text-red-500 font-bold py-1 px-2">
    //                                         Delete
    //                                     </button>
    //                                 </div>
    //                             </div>
    //                         );
    //                     })
    //                 }
    //             </div>


    //         </div>
    //     </div>
    // </div>
    // </div >

  );
}
