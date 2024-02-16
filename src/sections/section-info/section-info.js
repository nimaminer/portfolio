import "./section-info.css"
import { data } from "./data";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
function SectionInfo() {
    let [searchParams] = useSearchParams();
    let sectionName = searchParams.get("data")
    const navigate = useNavigate();

    setTimeout(() => {
        window.scrollTo({ behavior: 'smooth', top:0} );
    },300)

    let renderData = data[sectionName]
    const createh1 = () =>{
        return (
            <h1>{renderData.header}</h1>
        )
    }
    const goBack = () =>{
        navigate(-1)
    }
    const createSection = () =>{
            return(
                <article className={"mainArticle " + renderData.secNum || ""}>
                <section className={renderData.type}>
                    <h2>{renderData.firstSec[0]}</h2>
                    <p className={renderData.firstSec[4] || ""}>{renderData.firstSec[1]}</p>
                    <a className= {"infoLink " + renderData.link} rel="noreferrer" target="_blank" href={renderData.firstSec[2]}><img src= {renderData.firstSec[3]} alt= "online cloud drive" /></a>
                </section>

                {renderData.secondSec ?
                <section className={renderData.type}>
                    <h2>{renderData.secondSec[0]}</h2>
                    <p className={renderData.secondSec[4] || ""}>{renderData.secondSec[1]}</p>
                    <a className={"infoLink " + renderData.link} rel="noreferrer" target="_blank" href={renderData.secondSec[2]}><img src= {renderData.secondSec[3]} alt= "online cloud drive" /></a>
                </section> : null}

                {renderData.thirdSec ?
                <section className={renderData.type}>
                    <h2>{renderData.thirdSec[0]}</h2>
                    <p className={renderData.thirdSec[4] || ""}>{renderData.thirdSec[1]}</p>
                    <a className={"infoLink " + renderData.link} rel="noreferrer" target="_blank" href={renderData.thirdSec[2]}><img src= {renderData.thirdSec[3]} alt= "online cloud drive" /></a>
                </section>: null}

                {renderData.fourthSec ?
                <section className={renderData.type}>
                    <h2>{renderData.fourthSec[0]}</h2>
                    <p className={renderData.fourthSec[4] || ""}>{renderData.fourthSec[1]}</p>
                    <a className={"infoLink " + renderData.link} rel="noreferrer" target="_blank" href={renderData.fourthSec[2]}><img src= {renderData.fourthSec[3]} alt= "online cloud drive" /></a>
                </section> : null}
                </article>
            )
        
    }
    return (
        <main>
            <div className="mainHead" onClick={() => goBack()}>
                <div className="infoSecIcon">
                <span className="back-icon-1"></span>
                <span className="back-icon-2"></span>
                </div>
                {createh1()}
            </div>
            {createSection()}
        </main>
    )
}

export default SectionInfo;