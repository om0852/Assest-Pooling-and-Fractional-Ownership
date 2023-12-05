'use client';
import react, { useState, useEffect } from 'react'
import Slider from './Slider';
import Link from 'next/link';


const Home = () => {
	const [portfoliodata, setportfoliodata] = useState([])
	useEffect(() => {
		allportfoliodata()
	}, [])
	const allportfoliodata = async () => {
		// alert("calling ")
		const res = await fetch(`http://localhost:3000//api/portfolio/AllPortfolio`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: "",
		});
		const response = await res.json();
		console.log("completed")
		setportfoliodata(response.error);
	}
	return (
		<div className='flex flex-col justify-center items-center w-auto p-4 md:p-10 overflow-hidden'>
			<div className='mx-auto w-full md:w-[60vw] h-auto'>
				<Slider />
			</div>
			<div className='flex flex-wrap w-full justify-center items-center'>
				<div className="text-center w-full my-2">
					<span className='text-white font-bold text-xl'>Latest</span>
				</div>
				{portfoliodata && portfoliodata.map((elem, index) => {
					console.log(elem)
					if (index < 6) {
						return (
							<div>
								<Link key={index} href={`/Portfolio/PortfolioDetails?pid=${elem._id}`}>{elem.PortfolioName}</Link>
								<Link key={index} href={'/about'}><div className="bg-white shadow-md rounded-lg max-w-sm m-2">
									buy
								</div>
								</Link>
							</div>
						)
					}
				})
				}

			</div>
		</div >

	)
}

export default Home
