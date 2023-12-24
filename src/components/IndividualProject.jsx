import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import { commercial_projects, residential_project } from "../data/projects";
import ProjectCard from "./ProjectCard";


const IndividualProject = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
   
      setScrollPosition((prevPosition) => prevPosition + 1);
    }, 100); 

    return () => clearInterval(interval);
  }, []);
    const  {project_name} = useParams()

    console.log(project_name)
    const resProject = findResProjectByName(project_name)
    const comProject = findComProjectByName(project_name)
    // console.log(resProject);
    function findResProjectByName(project_name) {
     
        for (const category in residential_project) {
          for (const subCategory in residential_project[category]) {
            for (const project of residential_project[category][subCategory]) {
              if (project.project_name === project_name) {
                 console.log(project)
                return project;
                
              }
            }
          }
        }
        return null; // Handle the case where the project is not found
       
      }
      function findComProjectByName(project_name) {
       
        for (const category in commercial_projects) {
          for (const subCategory in commercial_projects[category]) {
            for (const project of commercial_projects[category][subCategory]) {
              if (project.project_name === project_name) {
                console.log(project)
                return project;
                
              }
            }
          }
        }
        return null; 
       
      }
     
      // flex: "1 0 auto"
  return (
    <div className="container p-1">
        {resProject ?  
        <>
        <Card className="indvidualProjCard mainCard" sx={{ display: 'grid',
        gridTemplateColumns: '1fr 2fr',height: "85vh", padding: "15px", margin: "15px" }}>
        <Box className="contentBox" sx={{    height:"30%", marginRight: "15px" }}>
          <CardContent  sx={{  backgroundColor: "lightgrey",  }}>
          <Box sx={{backgroundColor: "white", padding: "15px" }}>
            <Typography component="div" variant="h5">
              {resProject.project_name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >{resProject.location}
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              component="div"
            >
              SQUARE FEET 
             
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
            {resProject.square_ft}
             
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              component="div"
            >
              Architect
             
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
            {resProject.architect}
             
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <Link className="btn btn-outline-danger" to={`/projectImages/${project_name}`}>
                More Images
              </Link>
          
             
            </Typography>
            </Box>
          </CardContent>
          {/* <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box> */}
        </Box>
        <CardMedia
          component="img"
          className="imgBox"
          sx={{ height: "57%"}} 
          image="/src/assets/tolu-olubode-PlBsJ5MybGc-unsplash.jpg"
          alt="Live from space album cover"
        />
      </Card>
     
 <div className="border-1" style={{width: "85vw", overflow:"hidden"}}>
  <div className="d-flex float-start "
  style={{ transform: `translateX(-${scrollPosition}px)`, transition: 'transform 0.5s ease' }} >
 {Object.keys(residential_project).map((cat) => (
   
   Object.keys(residential_project[cat]).map((subcat) => (
 
     residential_project[cat][subcat].map((project) => (
      <>
      {/* <div className="col"> */}
       <ProjectCard
         key={project.project_id}
         name={project.project_name}
         location={project.location}
         id={project.project_id}
       />
        {/* </div> */}
        </>
     ))
   ))
 ))}
 
</div>
</div>


 
{/* </marquee> */}
      </>
      
      :
      <>
       <Card className="indvidualProjCard mainCard" sx={{ display: 'grid',
       gridTemplateColumns: '1fr 2fr',height: "85vh", padding: "15px", margin: "15px" }}>
       <Box className="contentBox" sx={{    height:"30%", marginRight: "15px" }}>
         <CardContent  sx={{  backgroundColor: "lightgrey"  }}>
         <Box sx={{backgroundColor: "white", padding: "15px" }}>
           <Typography component="div" variant="h5">
             {comProject.project_name}
           </Typography>
           <Typography
             variant="subtitle1"
             color="text.secondary"
             component="div"
           >{comProject.location}
           </Typography>
           <Typography
              variant="h4"
              color="text.secondary"
              component="div"
            >
              SQUARE FEET 
             
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
            {comProject.square_ft}
             
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              component="div"
            >
              Architect
             
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
            {comProject.architect}
             
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <Link className="btn btn-outline-danger" to={`/projectImages/${project_name}`}>
                More Images
              </Link>
          
             
            </Typography>
            </Box>
         </CardContent>
         {/* <Box
           sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
         ></Box> */}
       </Box>
       <CardMedia
        component="img"
        className="imgBox"
        sx={{ height: "57%"}} 
        image="/src/assets/tolu-olubode-PlBsJ5MybGc-unsplash.jpg"
        alt="Live from space album cover"
       />
     </Card>
    <div className="border-1" style={{width: "85vw", overflow:"hidden"}}>
    <div className="d-flex float-start "
    style={{ transform: `translateX(-${scrollPosition}px)`, transition: 'transform 0.5s ease' }} >
   {Object.keys(commercial_projects).map((cat) => (
     
     Object.keys(commercial_projects[cat]).map((subcat) => (
   
      commercial_projects[cat][subcat].map((project) => (
        <>
        {/* <div className="col"> */}
         <ProjectCard
           key={project.project_id}
           name={project.project_name}
           location={project.location}
           id={project.project_id}
         />
          {/* </div> */}
          </>
       ))
     ))
   ))}
   
  </div>
  </div>
  </>
    }
    
    </div>
  );
};

export default IndividualProject;
