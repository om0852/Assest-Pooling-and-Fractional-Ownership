"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import Web3 from "web3";

const Page = () => {
    const [myContract, setMyContract] = useState(null);
    const [transactionHash, setTransactionHash] = useState(null);
    const [web3, setweb3] = useState(null);
    const [UserPrice, setUserPrice] = useState(0);
    const [sender, setsender] = useState(null);
    const router = useRouter();
    let price = Cookies.get("price");
    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', handleAccountsChanged);
        }

        if (!price) {
            router.push("/")
        }
        setContract();
        fetchEthereumPrice();
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

            console.log(accounts);
            setsender(accounts[0]); // Use the first account in the array
            const contractAddress = "0x930BC5ec6339AbC9343de0b5c1b5C1b4163670c8";
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
            console.log(myContractInstance)
            setMyContract(myContractInstance);

        } catch (error) {
            alert("connect to network")
        }
    }
    const [data, setdata] = useState({
        useremail: "",
        BuyAmount: "",
        pid: "",
        PortfolioTotalPrice: "",
        Transactionid: null,
        Transactionamount: null,
        OrginalBuyPrice: ""

    });
    const onchange = (e) => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let portfolioid = urlParams.get('pid'); // value1

        let APFOS_useremail = localStorage.getItem("APFOS_useremail");
        let val = e.target.value;
        setdata({
            ...data,
            useremail: APFOS_useremail,
            BuyAmount: val,
            pid: portfolioid,
            PortfolioTotalPrice: price,
            OrginalBuyPrice: val
        });
    };
    const BuyAssest = async (e) => {

        e.preventDefault();
        if (data.BuyAmount > 1 && data.BuyAmount <= 2000) {
            try {
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                let pid = urlParams.get('pid'); // value1

                console.log(web3);
                const receiverAddress = "0xaca8Dd3EC734Db2847c016356F682e5CB7Fe7783";
                let p;
                try {
                    p = await fetchEthereumPrice();
                    console.log(p);
                }
                catch (error) {
                    return alert("check internet connection,try again");
                }
                const amountInEther = (parseFloat(data.BuyAmount) / parseFloat(p));
                console.log(amountInEther)
                const gasEstimation = await myContract.methods
                    .deposit(pid)
                    .estimateGas({
                        from: sender,
                        value: web3.utils.toWei(amountInEther.toString(), 'ether'),
                    });

                console.log('Gas Estimation:', gasEstimation);


                const result = await myContract.methods.deposit(pid).send({
                    from: sender,
                    value: web3.utils.toWei(amountInEther.toString(), 'ether'),
                    gas: gasEstimation
                });

                console.log(result);

                setTransactionHash(result.transactionHash);


                await handleSubmit(e, result, amountInEther);
            }
            catch (error) {
                console.log(error)
                clearInterval();
                return alert("invalid attempt,try again");
            }
        } else {
            toast.error(`Invalid Amount [${1}-${2000}]`, {
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
    }

    const handleSubmit = async (e, result, amountInEther) => {
        e.preventDefault();
        console.log(data);

        let url = window.location.href;
        let domain = new URL(url).hostname;
        let protocol = new URL(url).protocol;
        let port = new URL(url).port ? `:${new URL(url).port}` : '';
        let urlString = `${protocol}//${domain}${port}`;

        const res = await fetch(`${urlString}/api/portfolio/Assest/BuyAssest`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                useremail: data.useremail,
                BuyAmount: data.BuyAmount,
                pid: data.pid,
                PortfolioTotalPrice: data.PortfolioTotalPrice,
                OrginalBuyPrice: data.OrginalBuyPrice,
                Transactionid: result.transactionHash,
                Transactionamount: amountInEther,
            }),
        });
        const response = await res.json();
        console.log(response)
        if (response.status === 200) {
            toast.success("Assest Buy Successfully", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            Cookies.remove("price");
            router.push("/Portfolio/assests/buyassestlist");
        } else if (response.error == "Account Not Found") {
            toast.error("Account Not Found", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            router.push("/login");

        }
        else if (response.error == "Portfolio Not Found") {
            toast.error("Portfolio Not Found", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            router.push("/");

        }
        else if (response.status === 201) {
            toast.error("Invalid Format", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            router.push("/");
        }
        else {
            toast.error("Empty Field", {
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
        setdata({
            useremail: "",
            walletaddress: "",
        });


    };

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="mb-6 md:mb-0 flex flex-row justify-center my-2">
                <p className="text-2xl text-center text-white font-bold ml-3 bg-red-500 w-auto h-auto py-1 -2">
                    <span className=" bg-black text-white px-2 py-1">Bluechip</span> Art{" "}
                </p>
            </div>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Transaction Page
                    </h1>

                    <form className="space-y-4 md:space-y-6" method="POST">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Enter Amount
                            </label>
                            <input
                                onChange={(e) => onchange(e)}
                                type="number"
                                name="BuyAmount"
                                id="BuyAmount"
                                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="min:10rs"
                                required="true"
                            />
                        </div>

                        <button
                            onClick={(e) => BuyAssest(e)}
                            type="submit"
                            className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                        >
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
