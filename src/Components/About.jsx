import React from "react";
import heroImage from "../Assets/Images/hero.jpg"

export default function About() {
  return (
    // <div className="about d-flex justify-content-center align-content-center flex-column">
    //   <div className="about-title text-center ">
    //     <h2 className="display-5 fw-bold about-main">ABOUT COMPONENT</h2>
    //   </div>
    //   <div className="container about-content">
    //     <div className="row text-center py-3 ">
    //       <div className="col-md-6">
    //         <p>
    //           Freelancer is a free bootstrap theme created by Route. The
    //           download includes the complete source files including HTML, CSS,
    //           and JavaScript as well as optional SASS stylesheets for easy
    //           customization.
    //         </p>
    //       </div>
    //       <div className="col-md-6">
    //         <p>
    //           Freelancer is a free bootstrap theme created by Route. The
    //           download includes the complete source files including HTML, CSS,
    //           and JavaScript as well as optional SASS stylesheets for easy
    //           customization.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="about-section">
      <div class="about" id="about">
      <div class="container py-5">
        <div class="row py-5">
          <div class="col-md-5">
            <div class="hero-image position-relative ">
              <img class="img-thumbnail " src={heroImage} alt="hero"/>
            </div>
            
          </div>
          <div class="col-md-7 mt-4 mt-md-0">
            <div class="about-content">
              <h2 class="fw-bolder ">About Me.</h2>
              <h6 class="text-muted ">UI / UX DESIGNER & WEB DEVELOPER</h6>
              <p class="text-muted py-3">I am <span class="fw-bold ">Jerry Daniels</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not only five centuries, but also the leap into electronic but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>

              
              <div class="progress mb-4" role="progressbar" aria-label="Example 50px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" >
                <div class="progress-bar bg-dark d-flex flex-row justify-content-between align-items-center " >
                  <div class="par1 ps-3">Web Design</div>
                  <div class="par2 pe-3">95%</div>
                </div>
              </div>
              <div class="progress mb-4 " role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" >
                <div class="progress-bar bg-dark d-flex flex-row justify-content-between align-items-center" >
                  <div class="par1 ps-3">Branding</div>
                  <div class="par2 pe-3">80%</div>
                </div>
              </div>
              <div class="progress mb-4 " role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >
                <div class="progress-bar bg-dark d-flex flex-row justify-content-between align-items-center" >
                  <div class="par1 ps-3">Development</div>
                  <div class="par2 pe-3">90%</div>
                </div>
              </div>
              <button class="btn mt-3 btn-outline-dark btn-download ps-4 pe-4 py-2 " href="">Download C.V</button>
              <button class="btn mt-3 btn-outline-dark btn-contact ps-4 pe-4 py-2 " href="">Contact Me</button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
