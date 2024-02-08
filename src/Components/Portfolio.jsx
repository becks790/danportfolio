import React from "react";
import img1 from "../Assets/Images/1.jpg";
import img2 from "../Assets/Images/2.jpg";
import img3 from "../Assets/Images/3.jpg";
import img4 from "../Assets/Images/4.jpg";
import img5 from "../Assets/Images/5.jpg";
import img6 from "../Assets/Images/6.jpg";

export default function Portfolio() {
  return (
  <div class="works py-5" id="works">
    <div class="main-title ">
      <h2 class="display-6 text-center ">Portfolio.</h2>
    </div>

    <div class="container py-5">
       {/* Navs And Tabs  */}
    <ul class="nav nav-pills mb-3 fit-content m-auto  " id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active fw-bold" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link fw-bold" id="pills-brand-tab" data-bs-toggle="pill" data-bs-target="#pills-brand" type="button" role="tab" aria-controls="pills-brand" aria-selected="false">Brand</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link fw-bold" id="pills-design-tab" data-bs-toggle="pill" data-bs-target="#pills-design" type="button" role="tab" aria-controls="pills-design" aria-selected="false">Design</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link fw-bold" id="pills-graphic-tab" data-bs-toggle="pill" data-bs-target="#pills-graphic" type="button" role="tab" aria-controls="pills-graphic" aria-selected="false">Graphic</button>
      </li>
      
      

    </ul>
    <div class="tab-content" id="pills-tabContent">

      <div class="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabindex="0">
        <div class="row row-gap-3">
          <div class="col-lg-4 col-md-6">
            <div class="inner position-relative overflow-hidden  ">
              <img src={img1} class="w-100 rounded-1 " alt="1"/>
              <div class="layer w-100 h-100 position-absolute z-3 text-black  start-0 d-flex justify-content-center align-items-center text flex-column ">
                <h6 class="fw-bolder">WEB DESIGN</h6>
                <div class="por-icons d-flex gap-2">
                <div class="por-icons-1 d-flex justify-content-center align-items-center "><div><i class="fa-solid fa-burst"></i></div></div>
                <div class="por-icons-1 d-flex justify-content-center align-items-center"><div><i class="fa-solid fa-magnifying-glass-plus"></i></div></div>
              </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6  ">
            <div class="inner position-relative overflow-hidden  ">
              <img src={img2} class="w-100 rounded-1" alt="1"/>
              <div class="layer w-100 h-100 position-absolute z-3 text-black  start-0 d-flex justify-content-center align-items-center text flex-column ">
                <h6 class="fw-bolder">WEB DESIGN</h6>
                <div class="por-icons d-flex gap-2">
                <div class="por-icons-1 d-flex justify-content-center align-items-center "><div><i class="fa-solid fa-burst"></i></div></div>
                <div class="por-icons-1 d-flex justify-content-center align-items-center"><div><i class="fa-solid fa-magnifying-glass-plus"></i></div></div>
              </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6  ">
            <div class="inner position-relative overflow-hidden  ">
              <img src={img3} class="w-100 rounded-1" alt="1"/>
              <div class="layer w-100 h-100 position-absolute z-3 text-black  start-0 d-flex justify-content-center align-items-center text flex-column ">
                <h6 class="fw-bolder">WEB DESIGN</h6>
                <div class="por-icons d-flex gap-2">
                <div class="por-icons-1 d-flex justify-content-center align-items-center "><div><i class="fa-solid fa-burst"></i></div></div>
                <div class="por-icons-1 d-flex justify-content-center align-items-center"><div><i class="fa-solid fa-magnifying-glass-plus"></i></div></div>
              </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6  ">
            <div class="inner position-relative overflow-hidden  ">
              <img src={img4} class="w-100 rounded-1" alt="1"/>
              <div class="layer w-100 h-100 position-absolute z-3 text-black  start-0 d-flex justify-content-center align-items-center text flex-column ">
                <h6 class="fw-bolder">WEB DESIGN</h6>
                <div class="por-icons d-flex gap-2">
                <div class="por-icons-1 d-flex justify-content-center align-items-center "><div><i class="fa-solid fa-burst"></i></div></div>
                <div class="por-icons-1 d-flex justify-content-center align-items-center"><div><i class="fa-solid fa-magnifying-glass-plus"></i></div></div>
              </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6  ">
            <div class="inner position-relative overflow-hidden  ">
              <img src={img5} class="w-100 rounded-1" alt="1"/>
              <div class="layer w-100 h-100 position-absolute z-3 text-black  start-0 d-flex justify-content-center align-items-center text flex-column ">
                <h6 class="fw-bolder">WEB DESIGN</h6>
                <div class="por-icons d-flex gap-2">
                <div class="por-icons-1 d-flex justify-content-center align-items-center "><div><i class="fa-solid fa-burst"></i></div></div>
                <div class="por-icons-1 d-flex justify-content-center align-items-center"><div><i class="fa-solid fa-magnifying-glass-plus"></i></div></div>
              </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6  ">
            <div class="inner position-relative overflow-hidden  ">
              <img src={img6} class="w-100 rounded-1" alt="1"/>
              <div class="layer w-100 h-100 position-absolute z-3 text-black  start-0 d-flex justify-content-center align-items-center text flex-column ">
                <h6 class="fw-bolder">WEB DESIGN</h6>
                <div class="por-icons d-flex gap-2">
                <div class="por-icons-1 d-flex justify-content-center align-items-center "><div><i class="fa-solid fa-burst"></i></div></div>
                <div class="por-icons-1 d-flex justify-content-center align-items-center"><div><i class="fa-solid fa-magnifying-glass-plus"></i></div></div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tab-pane fade" id="pills-brand" role="tabpanel" aria-labelledby="pills-brand-tab" tabindex="0">
        
        <div class="row row-gap-3">
          
          <div class="col-lg-4 col-md-6  ">
            <div class="inner position-relative overflow-hidden  ">
              <img src={img2} class="w-100 rounded-1" alt="1"/>
              <div class="layer w-100 h-100 position-absolute z-3 text-black  start-0 d-flex justify-content-center align-items-center text flex-column ">
                <h6 class="fw-bolder">WEB DESIGN</h6>
                <div class="por-icons d-flex gap-2">
                <div class="por-icons-1 d-flex justify-content-center align-items-center "><div><i class="fa-solid fa-burst"></i></div></div>
                <div class="por-icons-1 d-flex justify-content-center align-items-center"><div><i class="fa-solid fa-magnifying-glass-plus"></i></div></div>
              </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6  ">
            <div class="inner position-relative overflow-hidden  ">
              <img src={img6} class="w-100 rounded-1" alt="1"/>
              <div class="layer w-100 h-100 position-absolute z-3 text-black  start-0 d-flex justify-content-center align-items-center text flex-column ">
                <h6 class="fw-bolder">WEB DESIGN</h6>
                <div class="por-icons d-flex gap-2">
                <div class="por-icons-1 d-flex justify-content-center align-items-center "><div><i class="fa-solid fa-burst"></i></div></div>
                <div class="por-icons-1 d-flex justify-content-center align-items-center"><div><i class="fa-solid fa-magnifying-glass-plus"></i></div></div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tab-pane fade" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab" tabindex="0">
        
        <div class="row row-gap-3">
          <div class="col-lg-4 col-md-6">
            <div class="inner position-relative overflow-hidden  ">
              <img src={img1} class="w-100 rounded-1 " alt="1"/>
              <div class="layer w-100 h-100 position-absolute z-3 text-black  start-0 d-flex justify-content-center align-items-center text flex-column ">
                <h6 class="fw-bolder">WEB DESIGN</h6>
                <div class="por-icons d-flex gap-2">
                <div class="por-icons-1 d-flex justify-content-center align-items-center "><div><i class="fa-solid fa-burst"></i></div></div>
                <div class="por-icons-1 d-flex justify-content-center align-items-center"><div><i class="fa-solid fa-magnifying-glass-plus"></i></div></div>
              </div>
              </div>
            </div>
          </div>
         
          <div class="col-lg-4 col-md-6  ">
            <div class="inner position-relative overflow-hidden  ">
              <img src={img3} class="w-100 rounded-1" alt="1"/>
              <div class="layer w-100 h-100 position-absolute z-3 text-black  start-0 d-flex justify-content-center align-items-center text flex-column ">
                <h6 class="fw-bolder">WEB DESIGN</h6>
                <div class="por-icons d-flex gap-2">
                <div class="por-icons-1 d-flex justify-content-center align-items-center "><div><i class="fa-solid fa-burst"></i></div></div>
                <div class="por-icons-1 d-flex justify-content-center align-items-center"><div><i class="fa-solid fa-magnifying-glass-plus"></i></div></div>
              </div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
      <div class="tab-pane fade" id="pills-graphic" role="tabpanel" aria-labelledby="pills-graphic-tab" tabindex="0">
        
        <div class="row row-gap-3">
          <div class="col-lg-4 col-md-6">
            <div class="inner position-relative overflow-hidden  ">
              <img src={img1} class="w-100 rounded-1 " alt="1"/>
              <div class="layer w-100 h-100 position-absolute z-3 text-black  start-0 d-flex justify-content-center align-items-center text flex-column ">
                <h6 class="fw-bolder">WEB DESIGN</h6>
                <div class="por-icons d-flex gap-2">
                <div class="por-icons-1 d-flex justify-content-center align-items-center "><div><i class="fa-solid fa-burst"></i></div></div>
                <div class="por-icons-1 d-flex justify-content-center align-items-center"><div><i class="fa-solid fa-magnifying-glass-plus"></i></div></div>
              </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6  ">
            <div class="inner position-relative overflow-hidden  ">
              <img src={img2} class="w-100 rounded-1" alt="1"/>
              <div class="layer w-100 h-100 position-absolute z-3 text-black  start-0 d-flex justify-content-center align-items-center text flex-column ">
                <h6 class="fw-bolder">WEB DESIGN</h6>
                <div class="por-icons d-flex gap-2">
                <div class="por-icons-1 d-flex justify-content-center align-items-center "><div><i class="fa-solid fa-burst"></i></div></div>
                <div class="por-icons-1 d-flex justify-content-center align-items-center"><div><i class="fa-solid fa-magnifying-glass-plus"></i></div></div>
              </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6  ">
            <div class="inner position-relative overflow-hidden  ">
              <img src={img3} class="w-100 rounded-1" alt="1"/>
              <div class="layer w-100 h-100 position-absolute z-3 text-black  start-0 d-flex justify-content-center align-items-center text flex-column ">
                <h6 class="fw-bolder">WEB DESIGN</h6>
                <div class="por-icons d-flex gap-2">
                <div class="por-icons-1 d-flex justify-content-center align-items-center "><div><i class="fa-solid fa-burst"></i></div></div>
                <div class="por-icons-1 d-flex justify-content-center align-items-center"><div><i class="fa-solid fa-magnifying-glass-plus"></i></div></div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      </div>
      
     {/* End of Navs And Tabs  */}
  </div>

);
}
