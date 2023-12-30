import React from 'react'

const SingleImageModal = ({imgUrl}) => {
  return (
    <>
    <div
  className="modal fade "
  id="staticBackdrop1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-fullscreen">
    <div className="modal-content">
      
      <div className="modal-body">
        <div className="container">
        <img src={imgUrl}  style={{width: "90vw",height: "85vh"}}  />
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
     
      </div>
    </div>
  </div>
</div>

    </>
  
  )
}

export default SingleImageModal