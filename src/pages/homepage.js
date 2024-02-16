import Header from '../sections/header/header';
import Home from '../sections/home/home';
import Projects from '../sections/projects/projects';
import Aboutme from '../sections/about-me/about-me'
import Footer from '../sections/footer/footer';
import { useEffect, useState } from 'react';

function HomePage() {
        const [isOpen, setIsOpen] = useState(null)
    return (
        <>
            <Header />
            <Home setOpen={(id) => {setIsOpen(id)}}/>
            <Projects isOpen={isOpen}/>
            <Aboutme />
            <Footer />
        </>
    );
}

export default HomePage;
