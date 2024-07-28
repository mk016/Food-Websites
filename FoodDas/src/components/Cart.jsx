import React from "react";
import Dosha from "../img/dosha.png";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "../App.css";
 import Profile from '../img/Profile.png'

function Cart() {
  return (
    <div
      class=" flex justify-center items-center w-full min-h-screen"
      style={{ backgroundColor: "#FFEFE6" }}
    >
      <div className=" rounded-lg  p-8 m-7  max-w- xl ">
        <div className=" pr-6">
          <div className="flex items-center mb-4">
            <a className="font-bold text-xl mb-3">
              {<ArrowBackIosIcon />}Shopping Continue
            </a>
          </div>
          <div>
            {/* <div className="border-t-4 border-dashed border-orange-500 border-bold w-full my-4"></div> */}
            <div className="custom-dashed-line mb-7"></div>
            <span className="font-semibold text-sm mb-5">Shopping Items</span>
          </div>
          <div className="flex justify-between w-full mt-7 items-center bg-white p-8 mx-9 mb-8 ml-4 shadow-lg rounded-lg">
            <img
              src={Dosha}
              alt="cart-items"
              className="w-12 h-12 rounded-full"
            />
            <span className="text-black text-lg font-semibold">
              Vemicelli Upma
            </span>
            <button
              className="text-white rounded-full font-semibold text-xl w-10 h-10"
              style={{ backgroundColor: "#FF6000" }}
            >
              -
            </button>
            <span>00</span>
            <button
              className="text-white rounded-full  font-semibold text-xl w-10 h-10"
              style={{ backgroundColor: "#FF6000" }}
            >
              +
            </button>
            <span className="font-semibold text-lg">₹200</span>
            <button> {<DeleteIcon />}</button>
          </div>
          <div className="flex justify-between w-full items-center bg-white p-8 mx-9 mb-8 ml-4 shadow rounded-lg">
            <img
              src={Dosha}
              alt="cart-items"
              className="w-12 h-12 rounded-full"
            />
            <span className="text-black  font-semibold">Vemicelli Upma</span>
            <button
              className="text-white rounded-full font-semibold text-xl w-10 h-10"
              style={{ backgroundColor: "#FF6000" }}
            >
              -
            </button>
            <span>00</span>
            <button
              className="text-white rounded-full  font-semibold text-xl w-10 h-10"
              style={{ backgroundColor: "#FF6000" }}
            >
              +
            </button>
            <span className="font-semibold text-lg">₹200</span>
            <button> {<DeleteIcon />}</button>
          </div>
          <div className="flex justify-between w-full items-center bg-white p-8 mx-9 mb-8 ml-4 shadow rounded-lg">
            <img
              src={Dosha}
              alt="cart-items"
              className="w-12 h-12 rounded-full"
            />
            <span className="text-black text-lg font-semibold">
              Vemicelli Upma
            </span>
            <button
              className="text-white rounded-full font-semibold text-xl w-10 h-10"
              style={{ backgroundColor: "#FF6000" }}
            >
              -
            </button>
            <span>00</span>
            <button
              className="text-white rounded-full  font-semibold text-xl w-10 h-10"
              style={{ backgroundColor: "#FF6000" }}
            >
              +
            </button>
            <span className="font-semibold text-lg">₹200</span>
            <button> {<DeleteIcon />}</button>
          </div>
          <div className="flex justify-between w-full items-center bg-white p-8 mx-9 mb-8 ml-4 shadow rounded-lg">
            <img
              src={Dosha}
              alt="cart-items"
              className="w-12 h-12 rounded-full"
            />
            <span className="text-black text-lg font-semibold">
              Vemicelli Upma
            </span>
            <button
              className="text-white rounded-full font-semibold text-xl w-10 h-10"
              style={{ backgroundColor: "#FF6000" }}
            >
              -
            </button>
            <span>00</span>
            <button
              className="text-white rounded-full  font-semibold text-xl w-10 h-10"
              style={{ backgroundColor: "#FF6000" }}
            >
              +
            </button>
            <span className="font-semibold text-lg">₹200</span>
            <button> {<DeleteIcon />}</button>
          </div>
        </div>
      </div>
      <div
        className="w-1/3 pl-6  rounded-3xl p-6"
        style={{ backgroundColor: "#FF6000" }}
      >
        <div className="flex justify-between mr-9 mt-5">
          <h2 className="font-semibold mb-4 text-3xl flex items-center 2xl:ml-8">
            Card Details
          </h2>
          <img
            src={Profile}
            alt="img"
            className="rounded-full bg-white h-20 w-20 2xl:items-center"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1">Name on Card</label>
          <input className=" rounded  w-full px-3 py-2  " placeholder="Name" />
        </div>
        <div className="mb-4">
          <label className="block ">Card Number</label>
          <input
            className=" rounded w-full py-2 px-3"
            placeholder="1111 2222 3333 4444"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-3 ">
          <div className="mb-4">
            <label className="block mb-2">Expiration Date</label>
            <input className="rounded w-full px-2 py-2 " placeholder="mm/yy" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">CVV</label>
            <input className="rounded w-full px-3 py-2 " placeholder="123" />
          </div>
        </div>
        <div className="mb-4 flex justify-between mr-4">
          <span>Subtotal</span>
          <span>$1222</span>
        </div>
        <div className="mb-4 flex justify-between mr-4">
          <span>Shopping(Free Delivery)</span>
          <span>$0</span>
        </div>
        <div className="mb-9 flex justify-between mr-4">
          <span>Total(Tax incl.)</span>
          <span>$1672</span>
        </div>
        <button className=" mb-9 bg-white text-orange-500 rounded-3xl font-bold w-full py-4">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
