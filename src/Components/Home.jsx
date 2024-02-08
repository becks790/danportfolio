import React from "react";

import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
    <header class="container home vh-100  d-flex justify-content-center align-items-center" id="home">
      <div class="container text-center text-white">
          <h2 class="fw-bolder display-5 text-black">Hello</h2>
          <h1 class="display-3 text-black">I Am JERRY DANIELS <span id="element"></span></h1>
          <div class="icons d-flex  gap-2 justify-content-center py-4">
            <Link class=""><i class="fa-brands fa-facebook-f fa-fw text-white"></i></Link>
            <Link><i class="fa-brands fa-twitter fa-fw text-white"></i></Link>
            <Link><i class="fa-brands fa-linkedin-in fa-fw text-white"></i></Link>
            <Link><i class="fa-brands fa-behance fa-fw text-white"></i></Link>
            <Link><i class="fa-brands fa-youtube fa-fw text-white"></i></Link>
        </div>

      </div>
    </header>
    </>
    // <div className="land text-center">
    //   <img className="w-50" src={img1} alt="" />
    //   <div className="main-title">
    //     <h2 className="display-5 fw-bold title">Start Framework</h2>
    //     <h6 className="my-4">Graphic Artist - Web Designer - Illustrator</h6>
    //   </div>
    // </div>
  );
}
