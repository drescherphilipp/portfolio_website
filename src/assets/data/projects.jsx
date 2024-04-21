export const projectData = [
  {
    title: "Rage From The Depths",
    description: <div>
      Rage From The Depths is a VR title currently in development. The first demo will be soon available.<br></br><br></br>

      Check it out on itch.io for more information<br></br>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <a href="https://oachkatzl.itch.io/rage-from-the-depths" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "inline-block" }}>
          <button style={{ background: "rgba(255, 255, 255, 0.1)", color: "#ffffff", borderRadius: "4px", padding: "8px 16px", border: "none", cursor: "pointer", fontSize: "16px", transition: "background 0.3s ease" }} onMouseOver={(e) => e.target.style.background = "rgba(255, 255, 255, 0.3)"} onMouseOut={(e) => e.target.style.background = "rgba(255, 255, 255, 0.1)"}>
            View on itch.io
          </button>
        </a>
      </div>


    </div>,
    imageUrl: [
      require("../../assets/img/projects/rageFromTheDepths/cardTitle.png"),
      require("../../assets/img/projects/rageFromTheDepths/cabin.png"),
      require("../../assets/img/projects/rageFromTheDepths/lighthouse.png"),
      require("../../assets/img/projects/rageFromTheDepths/monster.png"),
    ],
    videoUrl: [require("../../assets/img/projects/rageFromTheDepths/trailer.mp4")],
  },
  {
    title: "Feline Felony",
    description:
      <div>
        Feline Felony was my submission to the GBJam 11 game jam. The game was made within a week together with two friends. My main responsibilities were programming as well as some sprite designs. <br></br><br></br>

        Feel free to give it a try
        <div style={{ textAlign: "center", marginTop: "10px" }}>
        <a href="https://oachkatzl.itch.io/gbjam" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "inline-block" }}>
          <button style={{ background: "rgba(255, 255, 255, 0.1)", color: "#ffffff", borderRadius: "4px", padding: "8px 16px", border: "none", cursor: "pointer", fontSize: "16px", transition: "background 0.3s ease" }} onMouseOver={(e) => e.target.style.background = "rgba(255, 255, 255, 0.3)"} onMouseOut={(e) => e.target.style.background = "rgba(255, 255, 255, 0.1)"}>
            View on itch.io
          </button>
        </a>
      </div>

      </div>,
    imageUrl: [
      require("../../assets/img/projects/felineFelony/cardTitle.png"),
      require("../../assets/img/projects/felineFelony/MeowMeow.png"),
      require("../../assets/img/projects/felineFelony/gameplay_1.png"),
      require("../../assets/img/projects/felineFelony/gameplay_2.png"),
    ],
  },
  {
    title: "Immersive 3D Experience using an Alternative Controller",
    description: "This project demonstrated the technical capabilities of a lecture hall by integrating a Dolby Atmos sound system and utilizing the 3D rendering of a large LED wall. ",
    imageUrl: [
      require("../../assets/img/projects/altController/cardTitle.png"),
      require("../../assets/img/projects/altController/floater.png"),
      require("../../assets/img/projects/altController/gameplay_1.png"),
      // require("../../assets/img/projects/altController/gameplay_2.png"),
      require("../../assets/img/projects/altController/gameplay_3.png"),
    ],
    videoUrl: [require("../../assets/img/projects/altController/demo.mp4")],
  },
  {
    title: "Promotion game for the Awakening EP by Barocka",
    description:
      "Drawing inspiration from the acclaimed game FEZ, this promotional game blends 2D and 3D gameplay but combines it with rhytmic gameplay elements and effects. The player embarks on a journey to ascend the tower, experiencing the entire EP along the way.",
    imageUrl: [require("../../assets/img/projects/awakeningEP/cardTitle.png")],
    videoUrl: [require("../../assets/img/projects/awakeningEP/demo.mp4")],
  },
  // {
  //   title: "Semi-Automatic Scene Decorations",
  //   description: "By combining image generation using Stable Diffusion and object detection in the form of YOLOv8, it was possible to streamline the decoration process for 3D environments.",
  //   imageUrl: [require("../../assets/img/projects/sceneDecorator/cardTitle.png")],
  //   videoUrl: [require("../../assets/img/projects/sceneDecorator/demo.mp4")],
  // },
  {
    title: "VR Teardown Lab",
    description: "The virtual teardown lab is an immersive experience where the user can explore appliance disassembly. Key features include accurate dependencies for proper screw and component order, advanced inspection tools like cross-section and x-ray functionality, and an in-game tutorial for seamless guidance.",
    imageUrl: [require("../../assets/img/projects/teardownLab/cardTitle.png")],
    videoUrl: [require("../../assets/img/projects/teardownLab/demo.mp4")],
  },
  {
    title: "VR Object Viewer",
    description: "The VR object viewer offers the posdsibility to interact with 3D objects using hand-tracking. Key features include passthrough video, cross-section analysis, dimension visualization, object recoloring, and support for loading STL files for prototyping purposes from either local storage or Sketchfab.", imageUrl: [require("../../assets/img/projects/objectViewer/cardTitle.png")],
    videoUrl: [require("../../assets/img/projects/objectViewer/demo.mp4")],
  },
];