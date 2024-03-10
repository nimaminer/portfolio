import { useEffect, useState } from "react"
import "./projects.css"
import { useNavigate } from "react-router-dom";
import Button from "../button";
import { data } from "./data";
function Projects(props) {
    const navigate = useNavigate()
    const [dateToUse, setDataToUse] = useState(data)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting){
          entry.target.classList.add("appear")
        } else{
          entry.target.classList.remove("appear")
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".projectSection")
    hiddenElements.forEach((el) => observer.observe(el));


    useEffect(() => {
        let obj = {}
        dateToUse.map((item) => {
            if(item.id === props.isOpen){
                obj = item
            }
        })
        sectionOpen(obj)
    }, [props.isOpen])

    const renderSection = (array) => {
        return (
            <>
                <h4>{array[0]}</h4>
                <p style={{ marginTop: 5 }}>{array[1]}</p>
            </>
        )
    }
    const handleClick = (id) => {
        navigate("/info?data=" + id);
    }
    const downArrow = (obj) => {
        if (window.innerWidth < 550){
            return(
                <div className={`downIcons ${obj.isOpen ? "iconChange" : ""}`} onClick={(e) => {if(obj.isOpen) {e.preventDefault(); e.stopPropagation(); sectionClose(obj);} }}>
                    <span className="down-icon-1"></span>
                    <span className="down-icon-2"></span>
                </div>
            )
          } else {
            return(
                null
            )
          }
    }
    const sectionClose = (obj) => {
        let tempdata = [...dateToUse]
        tempdata.map((item) => {
            if(obj.id === item.id){
                item.isOpen = false
            }
        })
        setDataToUse(tempdata)
    }
    const sectionOpen = (obj) => {
        let tempdata = [...dateToUse]
        if(!obj.isOpen){
            tempdata.map((item) => {
                if(obj.id === item.id){
                    item.isOpen = true
                }
    
            })
        }
       
        setDataToUse(tempdata)
    }

    const project = (obj) => {

        return (
            <section id={obj.id} style={{ border: obj.border }} className={`projectSection ${obj.isOpen ? "sectionChange" : ""}`} onClick={(e) => {e.preventDefault(); e.stopPropagation(); sectionOpen(obj)}}>
                <div className="projectSectionMain" style={{ marginBottom: obj.mBottom }}>
                    <div className="projectSectionText">
                        <h3>{obj.title}</h3>
                        {downArrow(obj)}
                        <h5>{obj.projectType}</h5>
                        <p>{obj.mainText}</p>
                        {obj.firstText ? renderSection(obj.firstText) : null}
                        {obj.secondText ? renderSection(obj.secondText) : null}
                        {obj.thirdText ? renderSection(obj.thirdText) : null}
                    </div>
                    <div className="projectSectionImg">
                        {obj.imageOneSrc ? <img style={{ maxWidth: obj.imageOneWidth }} src={obj.imageOneSrc} alt={obj.imageOneAlt} /> : null}
                        {obj.imageTwoSrc ? <img style={{ maxWidth: obj.imageTwoWidth, marginTop: 20 }} src={obj.imageTwoSrc} alt={obj.imageTwoAlt} /> : null}
                    </div>
                </div>

                <div className="projectSectionInfo">
                    <Button click={() => { handleClick(obj.id) }} backColor={obj.buttonProps[0]} shadow={obj.buttonProps[1]} text={obj.buttonProps[2]} fSize={obj.buttonProps[3]} textColor={obj.buttonProps[4]} width={obj.buttonProps[5]} height={obj.buttonProps[6]} />
                    <p style={{ marginLeft: 10 }}>{obj.secInfoText}</p>
                </div>
            </section>
        )
    }
    return (
        <article className="projects">
            <h2 id="design-projects">Design Projects</h2>
            {project(dateToUse[0])}
            {project(dateToUse[1])}
            {project(dateToUse[2])}
            {project(dateToUse[3])}
            {project(dateToUse[4])}
            <h2 id="programming-projects">Programming Projects</h2>
            {project(dateToUse[5])}
            {project(dateToUse[6])}
            {project(dateToUse[7])}
            <h2 id="portfolio-project">Portfolio Creation Process</h2>
            {project(dateToUse[8])}

        </article>
    );
}

export default Projects;

