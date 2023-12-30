import React, { useState } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { useParams } from 'react-router-dom'
import { project_images } from '../data/projectImgs'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const ProjectImages = () => {
    const  {project_name} = useParams()
    //console.log(project_name)
    const images = project_images[project_name];
    const [data,setData] = useState({img: '', i:0})
    const viewImage = (img, i) => {
    
     setData({img,i})
    }
 
   
   
  return (
    <>
    {/* {
        data.img && 
        <div  className="bg-dark d-flex justify-content-center align-images-center overflow-hidden " style={{width:"100%", height: '100%'}}>
            <img src={data.img} style={{width: 'auto', maxWidth:'90%', maxHeight:"90%"}} alt="" />
        </div>
    } */}

    <div className="container">
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='20px'>
                {images.map((image, index) => (
            <img key={index} src={image.img}  style={{width: "100%", display: "block"}} onClick={() => viewImage(image.img, index)} alt='' />
          ))}
                   
                 
                </Masonry>
            </ResponsiveMasonry>
     {/* <ImageList sx={{ width: 600, height: 450 }} cols={3} rowHeight={164}>
      {images.map((image) => (
        <ImageListItem key={image.img}>
          <img
            srcSet={`${image.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${image.img}?w=164&h=164&fit=crop&auto=format`}
            alt={image.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList> */}

    </div>
    </>
   
  )
}

export default ProjectImages