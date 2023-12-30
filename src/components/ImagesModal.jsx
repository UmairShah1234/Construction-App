import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { project_images } from "../data/projectImgs";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SingleImageModal from "./SingleImageModal";
import { useState } from "react";

const itemData = [
  { img: "/src/assets/SITES PHOTO/mutha1.jpg" },
  { img: "/src/assets/SITES PHOTO/mutha1.jpg" },
  { img: "/src/assets/SITES PHOTO/mutha1.jpg" },
  { img: "/src/assets/SITES PHOTO/mutha1.jpg" },
];

const ImagesModal = () => {
  const  {project_name} = useParams()
  // console.log(project_name)
    //console.log(project_name)
    const images = project_images[project_name];

    
     const [selectedImage, setSelectedImage] = useState(null);

  const viewImage = (img) => {
    setSelectedImage(img);
  };
  const closeImageModal = () => {
    setSelectedImage(null);
  };
  
  return (
    <>
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
  
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                More Images Here
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
              <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='20px'>
                {images.map((image, index) => (
                  <>
                    <button
                    className="btn  rounded-0"
                    // to={`/projectImages/${project_name}`}
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop1"
                  >
            <img key={index} src={image.img}  style={{width: "100%",height: "100%", display: "block"}} onClick={() => viewImage(image.img, index)} alt='' />
            </button>
        
            </>
          ))}
                   
                 
                </Masonry>
            </ResponsiveMasonry>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
                Understood
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
          <SingleImageModal
            imgUrl={selectedImage}
            closeModal={closeImageModal}
          />
        )}
    </div>




   
    </>
  );
};

export default ImagesModal;
