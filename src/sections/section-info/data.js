import parse from 'html-react-parser'

export const data = {
    "dailyflow" : {
        header: "DailyFlow",
        firstSec: ["Research", parse(`Introduction to problem area<br></br>Research plan/objective<br></br>Research methods<br></br>Research findings/analysis<br></br>Research presentational video`),"https://drive.google.com/drive/folders/1rybctFPtAPqoS0hP14o4EIQJofWN9Hu_?usp=sharing", "images/section-info/cloudb.png"],
        secondSec: ["Prototyping v1", parse(`Ideation<br></br>Design concepts<br></br>Final concept (DailyFlow)<br></br>User testing v1<br></br>Lo-Fi & Hi-Fi mockups v1`),"https://drive.google.com/drive/folders/1HnjCgNf60H6jsd4OoezsGEhgsXsP3e3U?usp=sharing","images/section-info/cloudb.png"],
        thirdSec: ["Promotional Video", parse(`Introduction to problem area<br></br>Introducing DailyFlow<br></br>DailyFlow’s features<br></br>Users’ needs<br></br>“A Solution”`),"https://youtu.be/OGr8vnp-l6s?si=aJnPQiotdqNxhiAr", "images/section-info/cloudb.png"],
        fourthSec: ["Final Visual Report", parse(`Introduction<br></br>Concept development<br></br>Iteration & testing (v1 - v5)<br></br>Final product<br></br>Reflection`),"https://docs.google.com/presentation/d/e/2PACX-1vTy7K3SpeF1bJUQ7YvZyHNhA4m1--OeIZ4MJiJmi7omBqiai-YeBFE2IVxI73oktFxO2blbVY0m_9me/pub?start=false&loop=false&delayms=60000", "images/section-info/cloudb.png"],
        type: "designSec",
        link: "designLink"
    },
    "sounds-media": {
        header: "Sounds Media",
        firstSec: ["Web App Design ", parse(`Concept Introduction<br></br>Data Model<br></br>Wireframes<br></br>Mockups<br></br>Annotations`),"https://docs.google.com/presentation/d/e/2PACX-1vRvcLklG8FoW17p6OVqADY2qBkOi-5BGYacRtVj7vqcJ9zbw89VzbkunHGFALubWA/pub?start=false&loop=false&delayms=60000","images/section-info/cloudb.png" ],
        secondSec: ["Final Web App", parse(`Final web app folder including:<br></br>README.md (annotations)<br></br>Server & Package.json<br></br>Public folder containing:<br></br>Css, Html, and JS files`), "https://github.com/NimaSabzeh/Spotify-Tracker","images/section-info/cloudb.png"],
        secNum: "twoSec",
        type: "designSec",
        link: "designLink"
    },
    "ironman" : {
        header: '"Iron" Man',
        firstSec: ["Fusion 360", parse(`Ideation / Process<br></br>Creating 3D chocolate bar model<br></br>3D printing<br></br>Creating plastic mold<br></br>Making solid chocolate bar`),"https://docs.google.com/presentation/d/e/2PACX-1vQA4yeHAWh9CNydYv2-vpFF7jATTG-XHEfoBfpwlKo4C9GVQ6IAcj9_6gxs6Ona1LF9TZXHIADAjPSH/pub?start=false&loop=false&delayms=60000","images/section-info/cloudb.png" ],
        secondSec: ["Blender", parse(`Ideation / Process<br></br>Creating materials<br></br>Setting up scenes<br></br>Setting up camera angles<br></br>Annotations`),"https://docs.google.com/presentation/d/e/2PACX-1vRKznqEY1dYZAdc5nEuI-6zypMVLHmad1GPa0HTl_0nmOTtNCQifli2Zo2OAgspe1O8hLAyXszdOiKO/pub?start=false&loop=false&delayms=60000","images/section-info/cloudb.png"],
        thirdSec: ["Rhino7", parse(`Ideation / Process<br></br>Creating advanced 3D models<br></br>Applying materials<br></br>Rendering<br></br>Annotations`),"https://docs.google.com/presentation/d/e/2PACX-1vTw_sy9rP1bpLLERRbnWaJjpOVvgoxCcy9i_bQE0Tr59a0gGDjoNtET_WU7a4ffeyyXw5mct6b4k14Z/pub?start=false&loop=false&delayms=60000", "images/section-info/cloudb.png"],
        fourthSec: ["Final Visual Report", parse(`Promotional poster v1<br></br>Annotations<br></br>Promotional poster v2<br></br>3D modelling process<br></br>Reflection`),"https://docs.google.com/presentation/d/e/2PACX-1vTz2uQN2Uu7DldK8x6rUnGU1m06nJFFlIDiBTJKK7-as6gjLtChAa22HEhjPVYOIoqrz4_tiyBJzqDj/pub?start=false&loop=false&delayms=60000","images/section-info/cloudb.png"],
        type: "designSec",
        link: "designLink"
    },
    "virtuallife":{
        header: "VirtualLife",
        firstSec: ["Annotated Bibliography", parse(`Introduction<br></br>Area of interest (Data Mining)<br></br>4 Annotated bibliographies`), "https://drive.google.com/file/d/1nL5__DniPG6d57-OFhj6zFOIN69r_rLS/view?usp=sharing", "images/section-info/cloudb.png","smallP"],
        secondSec: ["Case Study", parse(`Search / Selection strategy<br></br>Key Points (3 sources on “Data<br></br>Mining in Digital Marketing)<br></br>Discussion<br></br>Final Reflection`),"https://drive.google.com/file/d/1oKiPD0VnkPHinf9Z-0lszas3sSqDjkRQ/view?usp=sharing","images/section-info/cloudb.png"],
        thirdSec: ["Speculative Fiction Narrative", parse(`Virtual Mines: Unmasking the<br></br>Exploitation of<br></br>Digital Identities`), "https://drive.google.com/file/d/1vSwShD2HUwL4sDNoUhpMhJG7jW9kFHsl/view?usp=sharing", "images/section-info/cloudb.png","smallP"],
        fourthSec: ["Podcast", parse(`Nima’s Lounge EP.368:<br></br>The Future of VR (podcast) +<br></br>Summery<br></br>Transcript<br></br>References`),"https://on.soundcloud.com/qerMs","images/section-info/cloudb.png"],
        type: "designSec",
        link: "designLink"
    },
    "glacial-shift":{
        header: "Glacial Shift",
        firstSec: ["ShellSavers", parse(`Introduction to Brief<br></br>Primary & Secondary Research<br></br>AR SnapChat Lens Description<br></br>Promotional Video`),"https://youtu.be/WRkI4lwh5XM?si=8NF8rpCQq4XRj5jB","images/section-info/cloudb.png"],
        secondSec: ["Glacial Shift", parse(`Introduction to Brief<br></br>Primary & Secondary Research<br></br>VR Game Description & Showcase<br></br>Promotional Video`),"https://youtu.be/iUippLHwck8?si=ldmYbnOfiIc4kqlt","images/section-info/cloudb.png"],
        secNum: "twoSec",
        type: "designSec",
        link: "designLink"
    },
    "ink-ball":{
        header: "InkBall",
        firstSec: ["InkBall", parse(`Video Demonstration`),"https://drive.google.com/file/d/1C5vNz0mJwyeQo9p4NiukQZAyoGcRpq9F/view?usp=sharing","images/section-info/cloudw.png","smallP"],
        secondSec: ["MineSweeper", parse(`Video Demonstration`),"https://drive.google.com/file/d/15_iqEUsR8D12NB4cNBQFfTujxlgBOvCF/view?usp=sharing","images/section-info/cloudw.png"],
        secNum: "twoSec",
        type: "programmingSec",
        link: "programmingLink"
    },
    "the-time-vessel":{
        header: "The Time Vessel",
        firstSec: ["Training", parse(`Training files 1 - 4<br></br>(interactive & non-interactive)`),"https://docs.google.com/document/d/1zQo4PlGW3PrMPibEAkcJMZVWEYgZZpK2DUPDTc4CVIY/edit?usp=sharing","images/section-info/cloudw.png"],
        secondSec: ["The Time Vessel", parse(`Code<br></br>Documentation`),"https://editor.p5js.org/Nima_Sabzeh/full/AfnFWkqan","images/section-info/cloudw.png"],
        secNum: "twoSec",
        type: "programmingSec",
        link: "programmingLink"
    },
    "data-structure-studies": {
        header: "Data Structure Studies",
        firstSec: ["Data Structure Studies", parse(`Training documents 1 - 3`),"https://drive.google.com/drive/folders/18yi7HHv7dfZIsebdm54TSILrDEfwG6vu?usp=sharing","images/section-info/cloudw.png","smallP"],
        secNum: "oneSec",
        type: "programmingSec",
        link: "programmingLink"
    },
    "portfolio-creation-process": {
        header: "React-Based Portfolio",
        firstSec: ["Coming Soon!!!", parse(``),"","images/section-info/cloudb.png","smallP"],
        secNum: "oneSec",
        type: "designSec",
        link: "designLink"
    }}