import React from "react";
import NumberCard from "../components/NumberCard";
import ChooseCard from "../components/ChooseCard";

const Home = () => {
  return (
    <div>
      <div className="container">
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

        {/* why choose us section */}
        <div>
          <h3 className="text-center">
            <span className="border-bottom border-danger">Why Choose Us ?</span>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
