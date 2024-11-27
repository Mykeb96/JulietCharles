import IMAGES from "../assets/Images/Images";
import "../styles/about.css";
import { useEffect, useRef } from "react";

import Resume from "../../public/Documents/Resume.pdf";

function About() {

    const topRef = useRef(null);

    useEffect(() => {
        topRef.current.scrollIntoView({ behavior: 'instant' });
      }, [])

    return (
        <div id="about" ref={topRef}>

            <img src={IMAGES.headshot} alt="headshot" id="headshot"/>

            <p>
                Based out of Beaverton, Oregon, Juliet Charles is a Digital Marketing student 
                with a minor in Graphic Design at Oregon State University. Juliet has expertise 
                and a passion for Social Media Marketing. She is able to combine creativity 
                with strategic digital marketing techniques to optimize results for her clients. 
                With experience in social media strategy, copywriting, analytics, SEO optimization 
                and content creation, Juliet specializes in helping businesses and brands magnify 
                their online presence.
            </p>
            <br />
            <p>
                As the founder of Charles Social Studios, Juliet works closely with her clients to create 
                personalized campaigns that align with their business goals, utilizing tools like Canva, 
                SEMrush, and Adobe Express to provide impactful results. Juliet holds certifications from 
                Meta and UC Davis for social media marketing and strategic content marketing as she continuously 
                showcases her commitment to staying ahead in the industry and upcoming trends. 
            </p>
            <br />
            <p>
                With an expanding proficiency in Adobe Creative Suite, supported by her Graphic Design studies 
                and ongoing certification with 92 learns, Juliet brings a polished creative approach to every 
                content project. Outside of digital marketing, she finds inspiration through studying her 
                family’s native language, Tagalog, painting and drawing, immersing her work with cultural 
                depth and artistic perspectives.
            </p>
            <br />
            <p>
                Juliet is devoted to helping brands amplify their online presence through essential 
                marketing strategies and captivating content to deliver her clients quantifiable success.
            </p>

            <iframe 
                src={Resume} 
                style={{
                    margin: 'auto', 
                    width: '850px', 
                    height: '1000px', 
                    marginTop: '50px', 
                    marginBottom: '50px'
                }}
                id="resume"
            />
        </div>
    )
}

export default About;