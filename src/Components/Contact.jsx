import React from "react";

export default function Contact() {
  return (
    <div className="contact-page">
      <section class="contact py-5" id="contact">
      <div class="container py-5 ">
        <div class="main-title">
          <h2 class="display-6 text-center ">Contact Us.</h2>
        </div>
        <div class="row">
          <div class="col-md-4 py-5">
            <div class="ver-one text-center ">
              <div class="icon-zero d-flex justify-content-center align-items-center m-auto mb-2"><i class="fa-solid fa-location-arrow fa-2xl"></i></div>
              <h6 class="py-2 fw-bold ">Address</h6>
              <p class="text-muted ">6834 Hollywood Blvd - Los Angeles CA</p>
            </div>
          </div>
          <div class="col-md-4 py-5">
            <div class="ver-one text-center ">
              <div class="icon-zero d-flex justify-content-center align-items-center m-auto mb-2"><i class="fa-solid fa-envelope fa-2xl"></i></div>
              <h6 class="py-2 fw-bold ">Address</h6>
              <p class="text-muted ">6834 Hollywood Blvd - Los Angeles CA</p>
            </div>
          </div>
          <div class="col-md-4 py-5">
            <div class="ver-one text-center ">
              <div class="icon-zero d-flex justify-content-center align-items-center m-auto mb-2"><i class="fa-solid fa-phone fa-2xl"></i></div>
              <h6 class="py-2 fw-bold ">Address</h6>
              <p class="text-muted ">6834 Hollywood Blvd - Los Angeles CA</p>
            </div>
          </div>
        </div>
        <form action="">
        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="input-one ">
              <input type="text" class=" in-1 w-100 p-1 border-0 rounded-2 " placeholder="Name"/>
            </div>
          </div>
          <div class="col-md-6 ">
            <div class="input-one">
              <input type="email" class=" in-1 w-100 p-1 border-0 rounded-2 " placeholder="Email"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="input-2">
              <textarea name="Message" id="" cols="30" rows="7" class="w-100 mt-4 mb-4 in-2 border-0 p-2 rounded-2 " placeholder="Message"></textarea>
            </div>
          </div>
        </div>
        <input type="submit" class="btn  btn-outline-dark btn-download ps-5 pe-5"/>
      </form>
      </div>
    </section>
    </div>            
  )
  ;
}
