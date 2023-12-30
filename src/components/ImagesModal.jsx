import { ImageList, ImageListItem } from "@mui/material";
import React from "react";

const itemData = [
  { img: "/src/assets/SITES PHOTO/mutha1.jpg" },
  { img: "/src/assets/SITES PHOTO/mutha1.jpg" },
  { img: "/src/assets/SITES PHOTO/mutha1.jpg" },
  { img: "/src/assets/SITES PHOTO/mutha1.jpg" },
];

const ImagesModal = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
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
                <ImageList
                  sx={{ width: 400, height: 450 }}
                  cols={2}
                  variant="standard"
                  rowHeight={4}
                >
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
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
    </div>
  );
};

export default ImagesModal;
