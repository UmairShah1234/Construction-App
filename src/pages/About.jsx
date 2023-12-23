import { Avatar } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <Avatar
            src="https://media.istockphoto.com/id/1345384816/photo/construction-industry-and-engineering-in-post-recession-period.jpg?s=612x612&w=0&k=20&c=3sK6hLkePixyVhbjrSDKATOx9cVnbor2d2qASBkUucM="
            sx={{
              height: 500,
              width: 500,
            }}
            className="shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="my-3">
            <span className="text-secondary">About</span> <br />
            Company
          </h3>
          <div className="info phone ">
            <p>
              About Jaatvedas Construction Jaatvedas Group has a rich history in
              the field of construction industry in India. We are today, one of
              the fastest growing civil and building contractors in India. We
              have successfully completed some of the most challenging
              infrastructure projects in the country. The name Jaatvedas
              emerging from a Sanskrit root implies the force obtained from the
              purest element of fire. The name signifies an abundance of energy
              and growth in itself.
            </p>
            <p>
              With specialized experience in the construction industry, we at
              JCC, have carved a niche for ourselves as one of the fastest
              growing civil contractors of the country, and with over 15 years
              of experience in the industry, we have constructed over 5.6
              million square feet.
            </p>
            <p>
              We have a broad portfolio of successfully completed projects
              across a range of sectors including Residential, Restoration /
              Refurbishment, Hospitality, Commercial, Industrial, Healthcare and
              Pharmaceutical. We are known for our client focus and hands-on
              approach. We are proud of the fact that the majority of our
              workload comes from our existing clients and that we have a strong
              reputation for our competitive edge and reliable execution of all
              projects undertaken. This is achieved through our relentless
              attention to detail and an experienced team with the drive and
              customer focus to ensure client delight is a given on all JCC
              projects.
            </p>
            <p>
              We continue to invest in modern business practices and management
              techniques in order to ensure that we retain the cutting edge in
              our industry. We continue to scale new heights with our focus
              firmly on growing the ability & capacity of our business be it in
              terms of Manpower or Machinery to deliver in new and innovative
              ways. Our ambition and goals for almost a decade have always been
              to deliver quality projects and value for money to our clients;
              our success and reputation today have been testament to this
              vision of ours.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h3 className="my-3">
            <span className="text-secondary">About</span> <br />
            Founder
          </h3>
          <div className="info email mb-3">
            <p>
              About Jaatvedas Construction Jaatvedas Group has a rich history in
              the field of construction industry in India. We are today, one of
              the fastest growing civil and building contractors in India. We
              have successfully completed some of the most challenging
              infrastructure projects in the country. The name Jaatvedas
              emerging from a Sanskrit root implies the force obtained from the
              purest element of fire. The name signifies an abundance of energy
              and growth in itself.
            </p>
            <p>
              With specialized experience in the construction industry, we at
              JCC, have carved a niche for ourselves as one of the fastest
              growing civil contractors of the country, and with over 15 years
              of experience in the industry, we have constructed over 5.6
              million square feet.
            </p>
            <p>
              We have a broad portfolio of successfully completed projects
              across a range of sectors including Residential, Restoration /
              Refurbishment, Hospitality, Commercial, Industrial, Healthcare and
              Pharmaceutical. We are known for our client focus and hands-on
              approach. We are proud of the fact that the majority of our
              workload comes from our existing clients and that we have a strong
              reputation for our competitive edge and reliable execution of all
              projects undertaken. This is achieved through our relentless
              attention to detail and an experienced team with the drive and
              customer focus to ensure client delight is a given on all JCC
              projects.
            </p>
            <p>
              We continue to invest in modern business practices and management
              techniques in order to ensure that we retain the cutting edge in
              our industry. We continue to scale new heights with our focus
              firmly on growing the ability & capacity of our business be it in
              terms of Manpower or Machinery to deliver in new and innovative
              ways. Our ambition and goals for almost a decade have always been
              to deliver quality projects and value for money to our clients;
              our success and reputation today have been testament to this
              vision of ours.
            </p>
          </div>
        </div>

        <div className="col-md-6 d-flex align-items-center">
          <Avatar
            src="https://www.shutterstock.com/image-photo/group-portrait-happy-confident-young-260nw-1904033500.jpg"
            sx={{
              height: 500,
              width: 500,
            }}
            className="shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
