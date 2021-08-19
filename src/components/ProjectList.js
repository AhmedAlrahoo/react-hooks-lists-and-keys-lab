import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log("tesssttt", projects[0].id);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
      projects.map((e)=>{
       return <ProjectItem name={e.name} about={e.about} technologies={e.technologies} key={e.id} >{e.name}</ProjectItem>
      })
      }</div>
    </div>
  );
}

export default ProjectList;
