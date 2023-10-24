import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { commercial_projects, residential_project } from "../data/projects";

const IndividualProject = () => {
    const  {project_name} = useParams()
    // console.log(project_name)
    const resProject = findResProjectByName(project_name)
    const comProject = findComProjectByName(project_name)
    // console.log(resProject);
    function findResProjectByName(project_name) {
        // const projectData = projectType === "residential" ? residential_project : commercial_projects;
      // const projectdata = Object.keys(residential_project).map((cat) => (Object.keys(residential_project[cat]).map((subcat) => (residential_project[cat][subcat].map((project) => project)))))
      // console.log(projectdata.project_name)
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
     
     
  return (
    <div className="container p-1">
        {resProject ?  
        <Card sx={{ display: "flex",height: "85vh",  }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "40%" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {resProject.project_name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >{resProject.location}
            </Typography>
          </CardContent>
          {/* <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box> */}
        </Box>
        <CardMedia
          component="img"
        //   sx={{ width: 151 }}
          image="/src/assets/tolu-olubode-PlBsJ5MybGc-unsplash.jpg"
          alt="Live from space album cover"
        />
      </Card>:
       <Card sx={{ display: "flex",height: "85vh",  }}>
       <Box sx={{ display: "flex", flexDirection: "column", width: "40%" }}>
         <CardContent sx={{ flex: "1 0 auto" }}>
           <Typography component="div" variant="h5">
             {comProject.project_name}
           </Typography>
           <Typography
             variant="subtitle1"
             color="text.secondary"
             component="div"
           >{comProject.location}
           </Typography>
         </CardContent>
         {/* <Box
           sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
         ></Box> */}
       </Box>
       <CardMedia
         component="img"
       //   sx={{ width: 151 }}
         image="/src/assets/tolu-olubode-PlBsJ5MybGc-unsplash.jpg"
         alt="Live from space album cover"
       />
     </Card>
    
    }
    
    </div>
  );
};

export default IndividualProject;
