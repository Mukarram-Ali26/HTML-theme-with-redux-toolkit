import React from 'react'
import NavBar from "./navBar";
import { Header } from "./header";
import { About } from "./about";
import { Services } from "./services";
import { Gallery } from './gallery';
import { Testimonial } from './testimonial';
import { Contact } from './contact';
import { Footer } from './footer';
export const Home = () => {
    return (
        <div className="row ">
            <div className="medium-12 columns">
                <NavBar />
                <Header />
                <About />
                <Services />          
                <Gallery />
                <Testimonial />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}



export default Home;