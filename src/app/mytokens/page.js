import react from 'react'

const page = () => {
    return (

        <div className="mx-auto m-4 md:m-8 md:px-16 px-2">
            <h1 className="mx-auto bg-white p-2 rounded w-fit text-3xl font-semibold mb-4">All Tokens</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="flex items-center border-b border-gray-200 px-4 py-1">
                    <div className="flex-1">
                        <p className="text-lg font-semibold">Token Name</p>
                    </div>
                    <div className="w-18 md:w-32 text-center">
                        <p className="text-lg font-semibold">Price</p>
                    </div>
                    <div className="w-24 text-center">
                        <p className="w-16  rounded-md py-1 px-2 text-lg font-semibold" >Quantity</p>
                    </div>
                    <div className="w-12 text-center">
                    <p className="  rounded-md py-1 px-2  text-lg font-semibold" >Sell</p>
                    </div>
                </div>
    
                <div className="flex items-center border-b border-gray-200 p-4">
                    <div className="flex-1">
                        <p className="text-lg font-semibold">Token Name</p>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="w-18 md:w-32 text-center">
                        <p className="text-lg font-semibold">$49.99</p>
                    </div>
                    <div className="w-24 text-center">
                        <p className="w-16 border rounded-md py-1 px-2 focus:outline-none" >2</p>
                    </div>
                    <div className="w-12 text-center">
                        <button className="text-red-500 border py-1 px-2 rounded hover:text-red-700 hover:font-bold focus:outline-none">
                           Sell
                        </button>
                    </div>
                </div>
                <div className="flex items-center border-b border-gray-200 p-4">
                    <div className="flex-1">
                        <p className="text-lg font-semibold">Token Name</p>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="w-18 md:w-32 text-center">
                        <p className="text-lg font-semibold">$49.99</p>
                    </div>
                    <div className="w-24 text-center">
                        <p className="w-16 border rounded-md py-1 px-2 focus:outline-none" >2</p>
                    </div>
                    <div className="w-12 text-center">
                        <button className="text-red-500 border py-1 px-2 rounded hover:text-red-700 hover:font-bold focus:outline-none">
                           Sell
                        </button>
                    </div>
                </div>
                <div className="flex items-center border-b border-gray-200 p-4">
                    <div className="flex-1">
                        <p className="text-lg font-semibold">Token Name</p>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="w-18 md:w-32 text-center">
                        <p className="text-lg font-semibold">$49.99</p>
                    </div>
                    <div className="w-24 text-center">
                        <p className="w-16 border rounded-md py-1 px-2 focus:outline-none" >2</p>
                    </div>
                    <div className="w-12 text-center">
                        <button className="text-red-500 border py-1 px-2 rounded hover:text-red-700 hover:font-bold focus:outline-none">
                           Sell
                        </button>
                    </div>
                </div>
                <div className="flex justify-evenly items-center border-b border-gray-200 p-4">
                    <div className="flex-1">
                    </div>
                    <div className="w-32 text-center">
                        <p className="text-lg font-bold">Total Price</p>
                        <p className="text-lg font-semibold">$49.99</p>
                    </div>
                    <div className="w-36 ">
                    <p className="text-lg font-bold">Quantity</p>
                        <p className="text-center w-16 border rounded-md py-1 px-2 focus:outline-none" >2</p>
                    </div>
                </div>
            </div>
        </div>
    
        )
}

export default page