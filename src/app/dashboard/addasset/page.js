'use client';
import React, { useState } from "react";

const AddAsset = () => {
  return (
    <div className=" mx-auto h-full  flex justify-center items-center flex-col">
      <div className="flex justify-content-center align-items-center my-2 mb-4">
        <span className="text-white text-lg font-bold">ADD Assets</span>
      </div>
      <div class="block mx-auto max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] my-2">
        <form>
        <div class="relative mb-6" data-te-input-wrapper-init>
            <label
              for="title"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Enter Title"
              required="true"
            />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="relative mb-6" data-te-input-wrapper-init>
              <label
                for="type"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Type
              </label>
              <input
                type="text"
                name="type"
                id="type"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Enter Type"
                required="true"
              />
            </div>
            <div class="relative mb-6" data-te-input-wrapper-init>
              <label
                for="token"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Tokens
              </label>
              <input
                type="number"
                name="token"
                id="token"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Enter Tokens"
                required="true"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="relative mb-6" data-te-input-wrapper-init>
              <label
                for="price"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Enter Price"
                required="true"
              />
            </div>
            <div class="relative mb-6" data-te-input-wrapper-init>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                required="true"
              />
            </div>
          </div>

          <div class="relative mb-6" data-te-input-wrapper-init>
            <label
              for="desc"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Description
            </label>
            <textarea
              type="text"
              name="desc"
              id="desc"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Enter Description"
              required="true"
            />
          </div>

          <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add</button>

        </form>
      </div>
    </div>
  );
};

export default AddAsset;
