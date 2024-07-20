import React from "react";
import Navbar from "./Navbar";
import biryani from "../img/biryani2.png";
import DeleteIcon from "@mui/icons-material/Delete";

function Menu() {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="font-bold text-2xl flex items-center justify-center mt-5">
          Our
          <span className="text-orange-500 font-bold mx-1">Most Popular</span>
        </h1>
        <a className="font-bold mr-2 text-2xl flex items-center justify-center mb-4">
          Indian Dish
        </a>
      </div>
      <div className="flex justify-around">
        <div className="bg-orange-300 py-8 w-50 h-30 rounded-t-full">
          <div className="">
            <img
              src={biryani}
              alt="Indian Vegetable Pulao"
              className="rounded-full h-21 w-21 flex justify-center items-center ml-5 mr-5 "
            />
            <a className="font-semibold flex justify-center">
              Indian vegetable poha
            </a>
            <div className="flex mt-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((star, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.207 1.193-5.931 5.774 1.401 8.175L12 18.897l-7.345 3.863 1.401-8.175-5.931-5.774 8.207-1.193z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600">(120)</span>
            </div>
            <span className="font-bold mb-4 flex justify-center">200</span>
            <div className="flex justify-center items-center mb-2">
              <button
                className="text-white rounded-full font-semibold text-xl w-10 h-10"
                style={{ backgroundColor: "#FF6000" }}
              >
                -
              </button>
              <span className="mx-2">00</span>
              <button
                className="text-white rounded-full font-semibold text-xl w-10 h-10"
                style={{ backgroundColor: "#FF6000" }}
              >
                +
              </button>
            </div>
            <div className="flex justify-center mb-4">
              <button
                className="font-semibold text-sm py-2 px-7 text-white rounded-2xl w-full"
                style={{ backgroundColor: "#FF6000" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
          </div>
        
        <div className="bg-orange-300 py-7 w-40 h-30 rounded-t-full">
          <div className="">
            <img
              src={biryani}
              alt="Indian Vegetable Pulao"
              className="rounded-full h-20 w-20 flex justify-center"
            />
            <a className="font-semibold flex justify-center">
              Indian vegetable poha
            </a>
            <div className="flex mt-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((star, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.207 1.193-5.931 5.774 1.401 8.175L12 18.897l-7.345 3.863 1.401-8.175-5.931-5.774 8.207-1.193z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600">(120)</span>
            </div>
            <span className="font-bold mb-4 flex justify-center">200</span>
            <div className="flex justify-center items-center mb-2">
              <button
                className="text-white rounded-full font-semibold text-xl w-10 h-10"
                style={{ backgroundColor: "#FF6000" }}
              >
                -
              </button>
              <span className="mx-2">00</span>
              <button
                className="text-white rounded-full font-semibold text-xl w-10 h-10"
                style={{ backgroundColor: "#FF6000" }}
              >
                +
              </button>
            </div>
            <div className="flex justify-center mb-4">
              <button
                className="font-semibold text-sm py-2 text-white rounded-2xl w-full"
                style={{ backgroundColor: "#FF6000" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-300 py-7 w-40 h-30 rounded-t-full">
          <div className="">
            <img
              src={biryani}
              alt="Indian Vegetable Pulao"
              className="rounded-full h-20 w-20 flex justify-center"
            />
            <a className="font-semibold flex justify-center">
              Indian vegetable poha
            </a>
            <div className="flex mt-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((star, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.207 1.193-5.931 5.774 1.401 8.175L12 18.897l-7.345 3.863 1.401-8.175-5.931-5.774 8.207-1.193z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600">(120)</span>
            </div>
            <span className="font-bold mb-4 flex justify-center">200</span>
            <div className="flex justify-center items-center mb-2">
              <button
                className="text-white rounded-full font-semibold text-xl w-10 h-10"
                style={{ backgroundColor: "#FF6000" }}
              >
                -
              </button>
              <span className="mx-2">00</span>
              <button
                className="text-white rounded-full font-semibold text-xl w-10 h-10"
                style={{ backgroundColor: "#FF6000" }}
              >
                +
              </button>
            </div>
            <div className="flex justify-center mb-4">
              <button
                className="font-semibold text-sm py-2 text-white rounded-2xl w-full"
                style={{ backgroundColor: "#FF6000" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
           
      

  );
}

export default Menu;
