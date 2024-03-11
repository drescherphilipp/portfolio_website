import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../assets/img/color-sharp.png"
import './Skills.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { SkillEntry } from './SkillEntry';

// all images are 512x512
import logoUnity from "../../assets/img/technology/Unity.png"
import logoUnreal from "../../assets/img/technology/Unreal.png"
import logoC from "../../assets/img/technology/C.png"
import logoCpp from "../../assets/img/technology/Cpp.png"
import logoCs from "../../assets/img/technology/Cs.png"
import logoPython from "../../assets/img/technology/Python.png"
import logoFmod from "../../assets/img/technology/Fmod.png"
import logoAbleton from "../../assets/img/technology/Ableton.png"
import logoBlender from "../../assets/img/technology/Blender.png"
import logoAseprite from "../../assets/img/technology/Aseprite.png"
import logoPhotoshop from "../../assets/img/technology/Photoshop.png"


export const Skills = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 464);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 464);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const percentage = 66;

    return (



        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <h4>Game Engines</h4>
                            {isMobile
                                ?
                                <Carousel autoPlay={true} responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                    <SkillEntry title="Unity" logo={logoUnity} percentage="80" />
                                    <SkillEntry title="Unreal" logo={logoUnreal} percentage="15" />
                                </Carousel>
                                :
                                <div className="owl-carousel owl-theme skill-slider skill-slider-center" style={{ display: "flex", flexDirection: "row" }}>
                                    <div className="item skill-item" style={{ flex: '100%' }}>
                                        <SkillEntry title="Unity" logo={logoUnity} percentage="80" />
                                    </div>
                                    <div className="item skill-item" style={{ flex: '100%' }}>
                                        <SkillEntry title="Unreal" logo={logoUnreal} percentage="15" />
                                    </div>

                                </div>
                            }
                            <br />
                            <h4>Programming Languages</h4>
                            <Carousel autoPlay={true} autoPlaySpeed={2000} responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <SkillEntry title="C" logo={logoC} percentage="60" />
                                <SkillEntry title="C++" logo={logoCpp} percentage="70" />
                                <SkillEntry title="C#" logo={logoCs} percentage="80" />
                                <SkillEntry title="Python" logo={logoPython} percentage="90" />
                            </Carousel>
                            <br />
                            <h4>Miscellaneous</h4>
                            <Carousel autoPlay={true} autoPlaySpeed={2000} responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <SkillEntry title="Fmod" logo={logoFmod} percentage="80" />
                                <SkillEntry title="Ableton" logo={logoAbleton} percentage="80" />
                                <SkillEntry title="Blender" logo={logoBlender} percentage="40" />
                                <SkillEntry title="Aseprite" logo={logoAseprite} percentage="30" />
                                {/* <SkillEntry title="Photoshop" logo={logoPhotoshop} percentage="30" /> */}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section>
    )
}
