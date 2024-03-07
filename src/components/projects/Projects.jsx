import React from "react";
import { Row, Container } from "react-bootstrap";
import { Project } from "./Project";
import { projectData } from '../../assets/data/projects'


export const Projects = () => {
    return (
        // <div>
        //     <ReactPlayer url={epVideo} playing controls />
        // </div>

        <section className="projects" id="projects">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx-no-bg wow zoomIn">
                            <h2>Projects</h2>
                            <Container>
                                <Row>
                                    {projectData.map((project, index) => (
                                        <Project
                                            key={index}
                                            title={project.title}
                                            description={project.description}
                                            imageUrl={project.imageUrl}
                                            videoUrl={project.videoUrl}
                                        />
                                    ))}
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};