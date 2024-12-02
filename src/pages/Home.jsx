import IMAGES from "../../public/Images";
import "../styles/home.css";
import { Link } from "react-router-dom";

import success from "../../public/success.jpg";
import innovation from "../../public/Innovation.jpg";
import reviews from "../../public/Reviews.jpg";
import testimonials from "../../public/testimonials.jpg";

function Home() {
    return (
        <div id="home">
            <div id="home-content">
                <div id="home-text">
                    <h2>Your Brand, Our Game Plan:<br /> Creating success, one strategy at a time.</h2>
                    <Link to="/services" id="start-here-button">Start Here</Link>
                </div>

                <img src={success} alt="success" id="success-image" />
            </div>

            <div id="home-banner">
                <h3>Charles Social Studios is a small digital marketing<br />agency based in Beaverton, Oregon.</h3>
            </div>

            <div id="the-goods">
                <img src={innovation} alt="innovation" id="innovation-image"/>
                <div id="the-goods-text">
                    <p id="the-goods-title">THE GOODS</p>

                    <h2>Created with Innovation and <br />Imagination in Oregon.</h2>
                    <p>Personalized social media strategies that allow your <br />business to flourish & succeed.</p>
                    <ul id="the-goods-list">
                        <li>Social Media Content Strategy</li>
                        <li>Campaign Development & Management</li>
                        <li>Content Creation</li>
                        <li>Analytics & Performance Tracking</li>
                    </ul>
                </div>
            </div>

            <div id="about-us">
                <div id="about-us-text">
                    <p id="about-us-title">ABOUT US</p>

                    <h2>Charles Social Studios is a boutique <br />digital marketing agency specializing in <br />content strategy.</h2>

                    <p>We specialize in crafting personalized content strategies and designing effective content that achieves results. With a focus on social media marketing, we work closely with our clients to promote their online presence to bring them one step closer to their business goals. We’re dedicated to delivering solutions that attract audiences and enhances brand visibility.</p>

                    <Link to="/about" id="learn-more-button">Learn More</Link>
                </div>
                <img src={reviews} alt="reviews" id="reviews-image" />
            </div>

            <div id="testimonials">
                <img src={testimonials} alt="testimonials" id="testimonials-image" />

                <div id="testimonials-text">
                    <h2>Testimonials</h2>

                    <p>WHAT PEOPLE ARE SAYING</p>
                </div>

                <div id="testimonial-card">
                    <h2>Working with Juliet has been a game-changer for <br />my brand. Her working with us has significantly increased <br />engagement and has helped us reach our audience in a way <br />we haven’t been able to before.</h2>

                    <p>– Johnathon H.</p>

                </div>

            </div>
        </div>
    )
}

export default Home;
