import "./about-me.css"

function Aboutme() {
    const makeList = (props) => {
        return (
            <ul className="aboutPartTwoList">
                <li>{props[0]}</li>
                <li>{props[1]}</li>
                <li>{props[2]}</li>
                <li>{props[3]}</li>
                <li>{props[4]}</li>
                <li>{props[5]}</li>
                <li>{props[6]}</li>
            </ul>
        )
    }
    return (
        <div id="about-me">
            <div className="aboutPartOne">
                <img src="/images/about-me/profile.jpg" alt="A picture of me!!!!" />
                <p>I am a second-year design student at the University of Sydney with a strong interest in both computer science and design. My primary focus is on product design, graphic design, and front-end web development/design. While my programming knowledge primarily stems from elective courses, I possess a foundational understanding of various programming and problem-solving skills. In terms of my strengths as a designer/developer, my tutors and colleagues consistently praised my ability to present and explain design decisions and ideas, as well as my effective leadership skills within a team. My primary objective in my future career would be to innovatively combine my expertise in design and computer science, hoping to extract optimal outcomes from their intersection.</p>
            </div>
            <div className="aboutPartTwo">
                <div className="aboutPartTwoA">
                    <h2>Soft Skills</h2>
                    {makeList(["Time Management","Critical Thinking","Problem Solving","Communication","Collaboration","Presentation","Team Leadership"])}
                </div>
                <div className="aboutPartTwoB">
                    <h2>Tools</h2>
                    <div className="aboutPartTwoBLists">
                        {makeList(["Adobe Photoshop","Adobe InDesign","Adobe Premiere Pro","Figma","Visual Studio Code","Rhino7","Cura"])}
                        {makeList(["Adobe After Effects","Adobe Illustrator","Adobe XD","Blender","Unity","Fusion 360","Office 365"])}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;