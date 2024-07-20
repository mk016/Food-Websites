import React from "react";
import Nav2 from "./Nav2";
import biryani from "../img/biryani2.png";
import DeleteIcon from "@mui/icons-material/Delete";
import Footer2 from "./Footer2";
import Paneer from '../img/paneer2.png'
import Upma from '../img/upma.png' 
import Murmura from '../img/Murmura.png' 
import TeaTime from '../img/TeaTime.jpg'
import Naan from '../img/Naan.png' 
import PuriSabji from '../img/PuriSabji.png' 
import Salted from '../img/Salted.png'
import MasalaDosa from '../img/MasalaDosa.png'
import Pavbhaji from '../img/pavbhaji.png'
import CHURMA from '../img/DAL-BAATI-CHURMA.png'
import Allu from '../img/AlluMuter.png'




function Menu() {
  return (
    <div>
      <Nav2 />
      <div>
        <h1 className="font-bold text-2xl flex items-center justify-center mt-5">
          Our
          <span className="text-orange-500 font-bold mx-1">Most Popular</span>
        </h1>
        <a className="font-bold mr-2 text-2xl flex items-center justify-center mb-4">
          Indian Dish
        </a>
      </div>
      <div className="flex justify-evenly ">
        <div
          className="py-4 w-50 h-25 border-dashed border-2 border-orange-500 rounded-t-full custom-rounded"
          style={{ backgroundColor: "#FFEFE6" }}
        >
          <div className="">
            <img
              src={biryani}
              alt="Indian Vegetable Pulao"
              className="rounded-full  h-15 w-40  flex justify-center items-center mx-5 "
            />
            <a className="font-semibold  mt-5 flex justify-center">
              Indian vegetable <br></br>Pulao
            </a>
            <div className="flex mt-2 mb-4 items-center justify-center">
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
            <span className="font-bold mb-4 flex justify-center text-xl">
              ₹200
            </span>
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
            <div className="flex justify-center mt-4">
              <button
                className="font-semibold text-sm px-7 py-3 text-white rounded-3xl"
                style={{ backgroundColor: "#FF6000" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
       
        <div
          className=" py-5 w-50 h-30  border-dashed border-2 border-orange-500 rounded-t-full"
          style={{ backgroundColor: "#FFEFE6" }}
        >
          <div className="">
            <img
              src={Upma}
              alt="Indian Vegetable Pulao"
              className="rounded-full  h-15 w-40 mb-4 flex justify-center items-center mx-5 "
            />
            <a className="font-semibold flex justify-center">
            Vermicelli 
<br></br>Upma 
            </a>
            <div className="flex mt-2 mb-4 items-center justify-center">
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
            <span className="font-bold mb-4 flex justify-center text-xl">
              ₹200
            </span>
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
                className="font-semibold text-sm  mt-2 py-3 px-7 text-white rounded-3xl"
                style={{ backgroundColor: "#FF6000" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div>
        <div
          className=" py-5 w-50 h-30  border-dashed border-2 border-orange-500 rounded-t-full"
          style={{ backgroundColor: "#FFEFE6" }}
        >
          <div className="">
            <img
              src={Paneer}
              alt="Indian Vegetable Pulao"
              className="rounded-full  h-15 w-40 mb-4 flex justify-center items-center mx-5 "
            />
            <a className="font-semibold flex justify-center">
            Paneer Bhuna 
<br></br>Masala 
            </a>
            <div className="flex mt-2 mb-4 items-center justify-center">
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
            <span className="font-bold mb-4 flex justify-center text-xl">
              ₹200
            </span>
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
                className="font-semibold text-sm mt-2 py-3 px-7 text-white rounded-3xl "
                style={{ backgroundColor: "#FF6000" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        
        </div>
      </div>
      {/*  second*/}
      <div>
        <h1 className="font-bold text-2xl flex items-center justify-center mt-5 mb-7">
          Our
          <span className="text-orange-500 font-bold mx-2">Snacks</span>
          Menu
        </h1>
      
      </div>
      <div className="flex justify-evenly">
        <div
          className="py-4 w-50 h-25 border-dashed border-2 border-orange-500 rounded-t-full custom-rounded"
          style={{ backgroundColor: "#FFEFE6" }}
        >
          <div className="">
            <img
              src={TeaTime}
              alt="Indian Vegetable Pulao"
              className="rounded-full  h-15 w-40  flex justify-center items-center mx-5 "
            />
            <a className="font-bold  mt-5 flex justify-center">
              Tea Time <br></br>Snacks
            </a>
            <div className="flex mt-2 mb-4 items-center justify-center">
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
            <span className="font-bold mb-4 flex justify-center text-xl">
              ₹200
            </span>
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
            <div className="flex justify-center mt-4">
              <button
                className="font-semibold text-sm px-7 py-3 text-white rounded-3xl"
                style={{ backgroundColor: "#FF6000" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
       
        <div
          className=" py-5 w-50 h-30  border-dashed border-2 border-orange-500 rounded-t-full"
          style={{ backgroundColor: "#FFEFE6" }}
        >
          <div className="">
            <img
              src={Salted}
              alt="Indian Vegetable Pulao"
              className="rounded-full  h-15 w-40 mb-4 flex justify-center items-center mx-5 "
            />
            <a className="font-semibold flex justify-center">
              Salted  <br></br> Fenugreek
            </a>
            <div className="flex mt-2 mb-4 items-center justify-center">
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
            <span className="font-bold mb-4 flex justify-center text-xl">
              ₹200
            </span>
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
                className="font-semibold text-sm  mt-2 py-3 px-7 text-white rounded-3xl"
                style={{ backgroundColor: "#FF6000" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div>
        <div
          className=" py-5 w-50 h-30  border-dashed border-2 border-orange-500 rounded-t-full"
          style={{ backgroundColor: "#FFEFE6" }}
        >
          <div className="">
            <img
              src={Murmura}
              alt="Indian Vegetable Pulao"
              className="rounded-full  h-15 w-40 mb-4 flex justify-center items-center mx-5 "
            />
            <a className="font-semibold flex justify-center">
              Murukku<br></br>Dish
            </a>
            <div className="flex mt-2 mb-4 items-center justify-center">
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
            <span className="font-bold mb-4 flex justify-center text-xl">
              ₹200
            </span>
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
                className="font-semibold text-sm mt-2 py-3 px-7 text-white rounded-3xl "
                style={{ backgroundColor: "#FF6000" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        
        </div>
      </div>
      {/*  thired */}
      <div>
        <h1 className="font-bold text-2xl flex items-center justify-center mt-5 mb-8">
          Our
          <span className="text-orange-500 font-bold mx-2">Regular</span>
          Menu
        </h1>
       
      </div>
      <div className="flex justify-evenly">
        <div
          className="py-4 w-50 h-25 border-dashed border-2 border-orange-500 rounded-t-full custom-rounded"
          style={{ backgroundColor: "#FFEFE6" }}
        >
          <div className="">
            <img
              src={MasalaDosa}
              alt="Indian Vegetable Pulao"
              className="rounded-full  h-15 w-40  flex justify-center items-center mx-5 "
            />
            <a className="font-semibold  mt-5 flex justify-center">
              Masala <br></br>Dosa
            </a>
            <div className="flex mt-2 mb-4 items-center justify-center">
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
            <span className="font-bold mb-4 flex justify-center text-xl">
              ₹200
            </span>
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
            <div className="flex justify-center mt-4">
              <button
                className="font-semibold text-sm px-7 py-3 text-white rounded-3xl"
                style={{ backgroundColor: "#FF6000" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
       
        <div
          className=" py-5 w-50 h-30  border-dashed border-2 border-orange-500 rounded-t-full"
          style={{ backgroundColor: "#FFEFE6" }}
        >
          <div className="">
            <img
              src={Pavbhaji}
              alt="Indian Vegetable Pulao"
              className="rounded-full  h-15 w-40 mb-4 flex justify-center items-center mx-5 "
            />
            <a className="font-semibold flex justify-center">
              Pav <br></br>Bhaji
            </a>
            <div className="flex mt-2 mb-4 items-center justify-center">
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
            <span className="font-bold mb-4 flex justify-center text-xl">
              ₹200
            </span>
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
                className="font-semibold text-sm  mt-2 py-3 px-7 text-white rounded-3xl"
                style={{ backgroundColor: "#FF6000" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div>
        <div
          className=" py-5 w-50 h-30  border-dashed border-2 border-orange-500 rounded-t-full"
          style={{ backgroundColor: "#FFEFE6" }}
        >
          <div className="">
            <img
              src={CHURMA}
              alt="Indian Vegetable Pulao"
              className="rounded-full  h-15 w-40 mb-4 flex justify-center items-center mx-5 "
            />
            <a className="font-semibold flex justify-center">
            Dal Baati<br></br> Churma 
            </a>
            <div className="flex mt-2 mb-4 items-center justify-center">
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
            <span className="font-bold mb-4 flex justify-center text-xl">
              ₹200
            </span>
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
                className="font-semibold text-sm mt-2 py-3 px-7 text-white rounded-3xl "
                style={{ backgroundColor: "#FF6000" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        
        </div>
      </div>
      {/* Four */}
      {/* <div>
        <h1 className="font-bold text-2xl flex items-center justify-center mt-5">
          Our
          <span className="text-orange-500 font-bold mx-1">Most Popular</span>
        </h1>
        <a className="font-bold mr-2 text-2xl flex items-center justify-center mb-4">
          Indian Dish
        </a>
      </div> */}
      <div className="flex justify-evenly mt-10 mb-10">
        <div
          className="py-4 w-50 h-25 border-dashed border-2 border-orange-500 rounded-t-full custom-rounded"
          style={{ backgroundColor: "#FFEFE6" }}
        >
          <div className="">
            <img
              src={PuriSabji}
              alt="Indian Vegetable Pulao"
              className="rounded-full  h-15 w-40  flex justify-center items-center mx-5 "
            />
            <a className="font-semibold  mt-5 flex justify-center">
              PuriSabji <br></br>Pulao
            </a>
            <div className="flex mt-2 mb-4 items-center justify-center">
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
            <span className="font-bold mb-4 flex justify-center text-xl">
              ₹200
            </span>
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
            <div className="flex justify-center mt-4">
              <button
                className="font-semibold text-sm px-7 py-3 text-white rounded-3xl"
                style={{ backgroundColor: "#FF6000" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
       
        <div
          className=" py-5 w-50 h-30  border-dashed border-2 border-orange-500 rounded-t-full"
          style={{ backgroundColor: "#FFEFE6" }}
        >
          <div className="">
            <img
              src={Naan}
              alt="Indian Vegetable Pulao"
              className="rounded-full  h-15 w-40 mb-4 flex justify-center items-center mx-5 "
            />
            <a className="font-semibold flex justify-center">
              Naan <br></br>Pulao
            </a>
            <div className="flex mt-2 mb-4 items-center justify-center">
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
            <span className="font-bold mb-4 flex justify-center text-xl">
              ₹200
            </span>
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
                className="font-semibold text-sm  mt-2 py-3 px-7 text-white rounded-3xl"
                style={{ backgroundColor: "#FF6000" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div>
        <div
          className=" py-5 w-50 h-30  border-dashed border-2 border-orange-500 rounded-t-full"
          style={{ backgroundColor: "#FFEFE6" }}
        >
          <div className="">
            <img
              src={Allu}
              alt="Indian Vegetable Pulao"
              className="rounded-full  h-15 w-40 mb-4 flex justify-center items-center mx-5 "
            />
            <a className="font-semibold flex justify-center">
             Allu Matter <br></br>Pulao
            </a>
            <div className="flex mt-2 mb-4 items-center justify-center">
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
            <span className="font-bold mb-4 flex justify-center text-xl">
              ₹200
            </span>
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
                className="font-semibold text-sm mt-2 py-3 px-7 text-white rounded-3xl "
                style={{ backgroundColor: "#FF6000" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Menu;
