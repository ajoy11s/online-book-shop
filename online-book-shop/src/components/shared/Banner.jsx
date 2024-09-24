import React from "react";

function Banner() {
  return (
    <section>
      <img
        src="src/assets/logo/1.jpg"
        alt="" className="w-full h-60 border-indigo-50"
      />
    </section>

    // <div className="carousel-item relative w-full">
    //   <div style={{ backgroundImage: `url(require("src/assets/logo/3.jpg"))`}}>
    //     <div className="hero-overlay bg-opacity-60"></div>
    //     <div className="hero-content text-neutral-content text-center py-20">
    //       <div className="max-w-md">
    //         <h2 className="mb-5 text-5xl font-bold">Potato</h2>
    //         <p className="mb-5 text-center">
    //           Potatoes are processed into a great variety of products, including cooked potatoes,
    //           par-fried potato strips, french fries, potato chips, potato starch, potato granules,
    //           potato flakes, and dehydrated diced potatoes, among others.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  );
}

export default Banner;