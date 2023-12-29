"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from 'next/link'
import "../../../../css/BuyAssestList.css";
import Web3 from "web3";
import ASPOS from "../BuyAssest/APFOS_Contract.json";

export default function Main() {
    const router = useRouter();

    const [myContract, setMyContract] = useState(null);
    const [web3, setweb3] = useState(null);
    const [portfoliodata, setportfoliodata] = useState("");
    const [DeleteCartState, setDeleteCartState] = useState(false);
    const [Deletedata, setDeletedata] = useState(null);
    const fetchdata = async () => {
        let APFOS_useremail = localStorage.getItem("APFOS_useremail");

        const res = await fetch(`http://localhost:3000/api/portfolio/Assest/BuyAssestList`, {
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
    }, [])
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
            const result = await myContract.methods.withdraw(Deletedata.AssestId, amountInEther, "0xaca8Dd3EC734Db2847c016356F682e5CB7Fe7783").send({
                from: sender,
                gas: 200000,
                gasPrice: web3.utils.toWei('40', 'gwei'),
            });

            console.log(result);

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
        <div className="w-full h-screen rounded p-2 md:px-16">
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
                            <p className="mx-auto font-bold w-16 py-1 px-2">Sell All</p>
                        </div>
                    </div>
                    <div className="bg-white  rounded-lg my-2">
                        {
                            portfoliodata && portfoliodata.map((data) => {
                                return (
                                    <div className="flex rounded items-center border-b-2 border-gray-300 px-5 py-5" key={data._id}>
                                        <div className="w-[75%]">
                                            <p className="text-lg font-semibold">{data.AssestTitle}</p>
                                        </div>
                                        <div className="w-[18%] md:w-32 text-center mx-1">
                                            <p className="text-lg font-bold">{data.AssestTotalPrice}</p>
                                        </div>
                                        <div className="w-[18%] md:w-32 text-center mx-1">
                                            <p className="text-lg font-bold">{data.Profit && data.Profit.length > 0 ? data.Profit[data.Profit.length - 1] : 'N/A'}</p>

                                        </div>


                                        <div className="w-[12%] text-center mx-1">
                                            <button onClick={() => { handleDeleteCart(data); setDeletedata(data) }} className="text-red-500 font-bold py-1 px-2">
                                                Sell
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>


                </div>
            </div>
        </div>
        // </div >

    );
}
