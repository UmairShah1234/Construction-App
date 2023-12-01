import React from "react";
import NumberCard from "../components/NumberCard";
import ChooseCard from "../components/ChooseCard";
import AboutHome from "../components/AboutHome";
import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import CarouselComp from "../components/CarouselComp";

const Home = () => {
  return (
    <div>
      <div className="container">
        {/* carousel component */}
        <div className="my-3">
          <CarouselComp />
        </div>

        {/* about section */}
        <AboutHome />

        {/* box section */}
        <div className="row m-3">
          <div className="col-md-3">
            <NumberCard
              number={20}
              text={"million sq ft"}
              desc={"TOTAL CONSTRUCTED AREA TILL DATE"}
            />
          </div>

          <div className="col-md-3">
            <NumberCard
              number={20}
              text={"million sq ft"}
              desc={"OF SAFE, ACCIDENT-FREE WORKING"}
            />
          </div>

          <div className="col-md-3">
            <NumberCard
              number={20}
              text={"million sq ft"}
              desc={"BUILT SINCE INCEPTION"}
            />
          </div>

          <div className="col-md-3">
            <NumberCard
              number={20}
              text={"million sq ft"}
              desc={"BUILT SINCE INCEPTION"}
            />
          </div>
        </div>

        {/* project sections */}
        <div className="mb-1">
          <div className="d-flex justify-content-between mb-3">
            <h3 className="">
              <span className="border-bottom border-danger">
                <span className="text-secondary">Check</span> <br />
                Out Our Recent Projects
              </span>
            </h3>
            <div className="  align-items-center d-flex">
              <div className="rounded-0 btn btn-outline-danger">More</div>
            </div>
          </div>

          <div className="row mb-1 bg-secondary">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>

        {/* why choose us section */}
        <div>
          <h3 className="text-center">
            <span className="border-bottom border-danger">Why Choose Us?</span>
          </h3>

          <div className="row">
            <div className="col-md-4">
              <ChooseCard />
            </div>
            <div className="col-md-4">
              <ChooseCard />
            </div>
            <div className="col-md-4">
              <ChooseCard />
            </div>
            <div className="col-md-4">
              <ChooseCard />
            </div>
            <div className="col-md-4">
              <ChooseCard />
            </div>
            <div className="col-md-4">
              <ChooseCard />
            </div>
          </div>

          <div className="mt-3">
            <h3></h3>
            <marquee>
              <img
                src="https://www.investopedia.com/thmb/yWopXC98WleAk2BKf0jgqcDUM2E=/fit-in/1500x1000/filters:format(png):fill(white):max_bytes(150000):strip_icc()/bofa_lo2_rgb_Digital-20d4dc2ee16d4412a0722dd5923c13e7.jpg"
                alt=""
                height={150}
                width={200}
                className="mx-1"
              />
              <img
                src="https://seeklogo.com/images/M/McLaren-logo-6D13A50642-seeklogo.com.png"
                alt=""
                height={150}
                width={200}
                className="mx-1"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/en/c/cd/ICAI_logo.png"
                alt=""
                height={150}
                width={200}
                className="mx-1"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/en/2/21/Red_Chillies_Entertainment_logo.png"
                alt=""
                height={150}
                width={200}
                className="mx-1"
              />
              <img
                src="https://getvectorlogo.com/wp-content/uploads/2018/12/icici-bank-vector-logo.png"
                alt=""
                height={150}
                width={200}
                className="mx-1"
              />
              <img
                src="https://i.pinimg.com/originals/74/ea/81/74ea81de637ec497ca21a83bfd4b886f.png"
                alt=""
                height={150}
                width={200}
                className="mx-1"
              />{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png"
                alt=""
                height={150}
                width={200}
                className="mx-1"
              />{" "}
              <img
                src="https://blog.logomyway.com/wp-content/uploads/2021/06/monster-logo-2-1.jpg"
                alt=""
                height={150}
                width={200}
                className="mx-1"
              />{" "}
              <img
                src="https://1000logos.net/wp-content/uploads/2021/04/Red-Bull-logo.png"
                alt=""
                height={150}
                width={200}
                className="mx-1"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/T-series-logo.svg/1317px-T-series-logo.svg.png"
                alt=""
                height={150}
                width={200}
                className="mx-1"
              />
              <img
                src="https://static.brandirectory.com/logos/dhla001_a08f794d_91af_4b74_83b4_82f7356c232d.jpg"
                alt=""
                height={150}
                width={200}
                className="mx-1"
              />
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
