import Button from "../button";
import "./home.css"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

function Home(props) {
    
    const socialLinks = (obj) =>  {
        return  (
            <a rel="noreferrer" target="_blank" className="socialLink" href={obj.link}>
                <img src= {obj.src} alt={obj.alt} />
                <p>{obj.text}</p>
            </a>
            
        )
    }
    
    const scrollToElement = (id) =>{
        var element = document.getElementById(id);
        const offset = 40;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        if (element) {
            window.scrollTo({
                behavior: 'smooth',
                top: offsetPosition
            });
        }
    }
    
    const splideShow = () =>  {
        let perPageLimit = 5
        if (window.innerWidth <= 1920){
            perPageLimit = 4
          }
        if (window.innerWidth < 1500){
            perPageLimit = 3
          }
        if (window.innerWidth < 1130){
            perPageLimit = 2
          }
        if (window.innerWidth < 800){
          perPageLimit = 1.5
        }
        if (window.innerWidth < 375){
            perPageLimit = 1
          }
        
        
        return  (
            <Splide id={"splide"} className="slideshow"  extensions={{AutoScroll}} aria-label="Projects" options={ {
                type: 'loop',
                perPage: perPageLimit,
                rewind: true,
                focus: 'center',
                arrows: false,
                drag: 'free',
                pauseOnHover: true,
                autoScroll: {
                    speed: 1,
                  },
              } }>
                    <SplideSlide>
                        <img onClick={()=>scrollToSplide(["splide-slide01","ink-ball"])} src="images/home/splide/ink-ball.png" alt="InkBall Programm" />
                    </SplideSlide>
                    <SplideSlide>
                        <img onClick={()=>scrollToSplide(["splide-slide02","ironman"])} src="images/home/splide/iron-man.png" alt="Iron Man" />
                    </SplideSlide>
                    <SplideSlide>
                        <img onClick={()=>scrollToSplide(["splide-slide03","dailyflow"])} src="images/home/splide/dailyflow.png" alt="DailyFlow" />
                    </SplideSlide>
                    <SplideSlide>
                        <img onClick={()=>scrollToSplide(["splide-slide04","data-structure-studies"])} src="images/home/splide/data-structure-studies.png" alt="Data Structure Studies" />
                    </SplideSlide>
                    <SplideSlide>
                        <img onClick={()=>scrollToSplide(["splide-slide05","virtuallife"])} src="images/home/splide/virtuallife.png" alt="VirtualLife" />
                    </SplideSlide>
                    <SplideSlide>
                        <img onClick={()=>scrollToSplide(["splide-slide06","glacial-shift"])} src="images/home/splide/glacial-shift.png" alt="Glacial Shift" />
                    </SplideSlide>
                    <SplideSlide>
                        <img onClick={()=>scrollToSplide(["splide-slide07","the-time-vessel"])} src="images/home/splide/the-time-vessel.png" alt="The Time Vessel" />
                    </SplideSlide>
                    <SplideSlide>
                        <img onClick={()=>scrollToSplide(["splide-slide08","sounds-media"])} src="images/home/splide/sounds-co.png" alt="Sounds.co" />
                    </SplideSlide>
            </Splide>
        )
    }
    
    const scrollToSplide = (ids) =>{
        var element = document.getElementById(ids[0])
        if (element.classList.contains("is-active")){
            props.setOpen(ids[1])
            var elem = document.getElementById(ids[1])
            var offset = 40
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = elem.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            if (element) {
                window.scrollTo({
                    behavior: 'smooth',
                    top: offsetPosition
            });
        }
        }
        else{
            return (null)
        }
    }
    return (
        <div id="page-start" className="home">
            <div className="homeSecOne">
                <img src= "images/about-me/profile.jpg" alt="me!!!!" />
                <div className="homeSecOneDivOne">
                    <h1>Hello there!!</h1>
                    <p>I’m Nima, a Master's of Computer Science student at the university of Sydney, with a background in UI/UX Design.<br/></p>
                    <div className="homeSecOneDivTwo">
                        <p >Welcome to my portfolio!!!</p>
                        <div className="homeSecOneDivTwoButtons">
                            <Button click={()=> window.open("https://drive.google.com/file/d/172a8g575XK_OQFbm63Bmw2vlnQgH_KzS/view?usp=sharing", "_blank")} backColor={"#FF6B19"} shadow={"0px 3.256px 3.256px 0px rgba(255, 255, 255, 0.50)"} text={"CV"} fSize={28} textColor={"#FFF"} width={225} height={60}/>
                            <Button click={() => {scrollToElement("about-me")}} backColor={"#FF6B19"} shadow={"0px 3.256px 3.256px 0px rgba(255, 255, 255, 0.50)"} text={"More About Me"} fSize={28} textColor={"#FFF"} width={270} height={60}/>
                        </div>
                    </div>
                </div>
            </div>

            <div id="home" className="homeSecTwo">
                <div className="homeSecTwoLinks">
                    {socialLinks({link:"mailto: sabzenima@gmail.com" ,src:"images/home/gmail-white.png", alt:"Gmail Logo", text:"Sabzenima@gmail.com"})} 
                    {socialLinks({link:"https://www.linkedin.com/in/nima-sabzeh?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWHY%2F7W0yRTW4G17HT0ghYw%3D%3D" ,src:"images/home/linkedin-white.png", alt:"linkedin Logo", text:"Nima Sabzeh"})}
                    {socialLinks({link:"tel:0403520859" ,src:"images/home/phone-white.png", alt:"Phone App Logo", text:"0403520859"})}
                </div>
 
            </div>
            <div className="homeSecThree">
                {splideShow()}
                <div className="homeSecThreeButtons">
                    <Button click={() => {scrollToElement("design-projects")}} backColor={"linear-gradient(270deg, #1400F7 0.76%, #0A8BD4 48.97%, #00F9AE 99.24%)"} shadow={"0px 4px 20px 10px rgba(0, 0, 0, 0.25)"} text={"Design Projects"} fSize={30} textColor={"#FFF"} width={325} height={100}/>
                    <Button click={() => {scrollToElement("programming-projects")}} backColor={"linear-gradient(270deg, #FFB800 0%, #FE4C00 100%)"} shadow={"0px 4px 20px 10px rgba(0, 0, 0, 0.25)"} text={"Programming Projects"} fSize={30} textColor={"#FFF"} width={325} height={100}/>
                </div>
            </div>
        </div>
    )
}



export default Home