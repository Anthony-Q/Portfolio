import React from 'react';

const Projects = () => {
     return  (
      <div className="projectContainer">
          
          <div className="project2">
          <h2 className="project2Title">Ikea System Capstone</h2>
            <a className="blurb">Designed and created a functional backend system
                for a mock Ikea website using relational and non-relational
                 databases capable of withstanding nearly 3,000RPS</a>
                <a className="github">Github </a>
          </div>
          
          <div className="project2">
            <h2 className="project2Title">Sephora Design Project</h2>
            <a className="blurb">Recreated the aesthetics and functionality
                of a Sephora product page to a tee using 
                React and Styled-Components. The project was
                deployed using an AWS EC2 instance and S3 
                cloud.
            </a>
            <a className="github" href="https://github.com/Anthony-Q/SephoraDesignProject" target="_blank">Github</a>
          </div>
      
      </div>
     )
}


export default Projects;

