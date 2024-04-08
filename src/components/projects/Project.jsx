import React from "react";
import { Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Project.css';
import { Player, BigPlayButton  } from 'video-react';
import 'video-react/dist/video-react.css';

export const Project = ({ title, description, imageUrl, videoUrl }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Col size={12} md={12} lg={6} xl={4} style={{marginBottom: '20px'}}>
            <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                customTransition="transform 500ms ease-in-out"
            >
                {imageUrl.map((image, index) => (
                    <div key={`image-${index}`} className="proj-imgbx">
                        <img src={image} alt={title} />
                        <div className="proj-txtx">
                            <h4>{title}</h4>
                            <span>{description}</span>
                        </div>
                    </div>
                ))}
                {videoUrl && videoUrl.map((video, index) => (
                    <div key={`video-${index}`} className="proj-vidbx">
                            <Player fluid={false} width={'100%'} height={'100%'} src={video}>
                            <BigPlayButton position="center" />
                            </Player>
                    </div>
                ))}
            </Carousel>
        </Col>
    );
};
