import React from "react";

const CarouselComp = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide border border-5"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://st2.depositphotos.com/1001335/9340/i/450/depositphotos_93401314-stock-photo-concept-of-construction-and-design.jpg"
            alt=""
            width={"100%"}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Get The Best Gaming Experience</h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://st2.depositphotos.com/1001335/9340/i/450/depositphotos_93401314-stock-photo-concept-of-construction-and-design.jpg"
            alt=""
            width={"100%"}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://st2.depositphotos.com/1001335/9340/i/450/depositphotos_93401314-stock-photo-concept-of-construction-and-design.jpg"
            alt=""
            width={"100%"}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComp;
