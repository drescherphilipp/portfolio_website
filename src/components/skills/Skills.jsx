import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../assets/img/color-sharp.png"

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

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <h4>Game Engines</h4>
                            <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme skill-slider skill-slider-center">
                                <div className="item">
                                    <img src={logoUnity} />
                                </div>
                                <div className="item">
                                    <img src={logoUnreal} />
                                </div>
                            </Carousel>
                            <br />
                            <h4>Programming Languages</h4>
                            <Carousel autoPlay={true} autoPlaySpeed={2000} responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item" >
                                    <img src={logoC} />
                                </div>
                                <div className="item">
                                    <img src={logoCpp} />
                                </div>
                                <div className="item">
                                    <img src={logoCs} />
                                </div>
                                <div className="item">
                                    <img src={logoPython} />
                                </div>
                            </Carousel>
                            <br />
                            <h4>Miscellaneous</h4>
                            <Carousel autoPlay={true} autoPlaySpeed={2000} responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={logoFmod} />
                                </div>
                                <div className="item">
                                    <img src={logoAbleton} />
                                </div>
                                <div className="item">
                                    <img src={logoBlender} />
                                </div>
                                <div className="item">
                                    <img src={logoAseprite} />
                                </div>
                                <div className="item">
                                    <img src={logoPhotoshop} />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section>
    )
}
