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
        {/* /assets/SITES PHOTO/On Going Dombivali site/WhatsApp Image 2023-08-07 at 4.20.52 PM.jpeg */}
          <img src="/assets/SITES PHOTO/On Going Dombivali site/WhatsApp Image 2023-08-07 at 4.20.52 PM.jpeg" alt="" width={"100%"} height={650} />
          <div className="carousel-caption  ">
          
            <p>  <h3 style={{ fontWeight:"bolder"}} className="">Witness progress in action at our construction sites, where safety and precision converge to bring your vision to life. We take pride in creating environments that stand as a testament to quality craftsmanship</h3></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/assets/SITES PHOTO/mutha1.jpg" alt="" width={"100%"} height={650} />
          <div className="carousel-caption">
            <h3 className="" style={{ fontWeight:"bolder"}}>Our dedicated team, fueled by passion and expertise, transforms blueprints into reality. With a commitment to excellence, we ensure every project is a masterpiece of construction, blending innovation with traditional craftsmanship</h3>
            {/* <p>Some representative placeholder content for the second slide.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img src="/assets/SITES PHOTO/silver.jpg"  alt="" width={"100%"} height={650} />
          <div className="carousel-caption ">
            <h3 style={{ fontWeight:"bolder"}}>Explore the future of construction with our state-of-the-art machinery and innovative technologies. We embrace advancements to deliver projects with efficiency, sustainability, and a touch of modernity, setting new standards in the construction industry.</h3>
            {/* <p>Some representative placeholder content for the third slide.</p> */}
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
