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
                <img src="images/about-me/icon.png" alt="me!!!!" />
                <p>Hello there! I'm Nima👋, a Master's of Computer Science student at the University of Sydney, with a background in design and a passion for combining technology and creativity. I graduated with a Bachelor's of design computing, where I explored product design, graphic design, and front-end web development/design. Building on my foundational programming knowledge from undergrad, I decided to dive deeper into computer science and algorithmic problem-solving in my Master's. I can't wait to bring my ideas to life by blending design and technology in innovative ways! One thing I’ve always been proud of is my ability to share and explain my design ideas clearly, which my peers and mentors often highlight. I also love taking on leadership roles and collaborating with teams to make big ideas happen. My dream is to create impactful solutions that live at the intersection of design and computer science, and make the world a better place. 🖥️🎨</p>
            </div>
            <div className="aboutPartTwo">
                <div className="aboutPartTwoB">
                    <h2>Programming Languages</h2>
                    {makeList(["HTML & CSS","PostgreSQL","JavaScript","Python","P5.js", "Java","C",])}
                </div>
                <div className="aboutPartTwoA">
                    <h2>Tools</h2>
                    {makeList(["Adobe Creative Cloud","Office 235","Fusion360","Blender","Figma","Rhino7","Unity"])}
                </div>
                <div className="aboutPartTwoA">
                    <h2>Soft Skills</h2>
                    {makeList(["Time Management","Team Leadership","Critical Thinking","Problem Solving","Communication","Collaboration","Presentation"])}
                </div>
                
            </div>
        </div>
    )
}

export default Aboutme;