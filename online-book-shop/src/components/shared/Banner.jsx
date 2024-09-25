import React from "react";

function Banner() {
  return (
    <div className="flex items-center justify-between rounded-lg bg-rose-100 p-6">

    <div className="text-center flex flex-col gap-2 items-center">
        <h3 className="font-extrabold text-2xl text-green-500">Unlock a World of  Stories</h3>

        <h4 className="font-semibold text-2xl text-gray-400"> Find Your Next Favorite Book at -</h4>

        <h2 className="font-semibold text-2xl text-green-400">Online Book Shop</h2>

        <button className="btn bg-green-400 text-xl text-white w-52">Buy Books</button>
    </div>

    <div className="w-1/2 h-full">
        <img className="rounded-lg"   src="src/assets/logo/1.jpg"></img>
    </div>
</div>
  );
}

export default Banner;