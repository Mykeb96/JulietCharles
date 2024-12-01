import IMAGES from "../../public/Images";
import "../styles/portfolio.css";
import { useState } from 'react';

import fenty_1 from "../../public/fenty_1.png";
import fenty_2 from "../../public/fenty_2.png";
import fenty_3 from "../../public/fenty_3.png";
import analytics_1 from "../../public/calendar.png";
import analytics_2 from "../../public/fenty_report.png";
import funzone_1 from "../../public/funzone_1.png";
import funzone_2 from "../../public/funzone_2.jpg";
import funzone_3 from "../../public/funzone_3.png";
import funzone_4 from "../../public/funzone_4.png";

import hp_case from "../../public/hp_case.png";
import bold_case from "../../public/bold_case.png";

function Portfolio() {

    const [selectedFentyImage, setSelectedFentyImage] = useState(0);
    const [selectedAnalyImage, setSelectedAnalyImage] = useState(0);
    const [selectedFunzoneImage, setSelectedFunzoneImage] = useState(0);

    const fentyImages = [
        fenty_1,
        fenty_2,
        fenty_3
    ]

    const analyticsImages = [
        analytics_1,
        analytics_2
    ]

    const funzoneImages = [
        funzone_1,
        funzone_2,
        funzone_3,
        funzone_4
    ]

    function handleAnalyImageChange(direction) {
        if (direction === "next") {
            if (selectedAnalyImage === analyticsImages.length - 1)
            {
                setSelectedAnalyImage(0);
            } else {
                setSelectedAnalyImage(selectedAnalyImage + 1);
            }
        } else {
            if (selectedAnalyImage === 0) {
                setSelectedAnalyImage(analyticsImages.length - 1);
            } else {
                setSelectedAnalyImage(selectedAnalyImage - 1);
            }
        }
    }

    function handleFentyImageChange(direction) {
        if (direction === "next") {
            if (selectedFentyImage === fentyImages.length - 1)
            {
                setSelectedFentyImage(0);
            } else {
                setSelectedFentyImage(selectedFentyImage + 1);
            }
        } else {
            if (selectedFentyImage === 0) {
                setSelectedFentyImage(fentyImages.length - 1);
            } else {
                setSelectedFentyImage(selectedFentyImage - 1);
            }
        }
    }       

    function handleFunzoneImageChange(direction) {
        if (direction === "next") {
            if (selectedFunzoneImage === funzoneImages.length - 1)
            {
                setSelectedFunzoneImage(0);
            } else {
                setSelectedFunzoneImage(selectedFunzoneImage + 1);
            }
        } else {
            if (selectedFunzoneImage === 0) {
                setSelectedFunzoneImage(funzoneImages.length - 1);
            } else {
                setSelectedFunzoneImage(selectedFunzoneImage - 1);
            }
        }
    }
    
    return (
        <div id="portfolio">

            <div id="fenty-beauty-campaign">
                <h2>Fenty Beauty Campaign</h2>

                <div id="fenty-beauty-campaign-content">
                    <span>Content Strategy</span>
                    <a href="https://docs.google.com/document/d/1cFnSGNVh-7ihSTSj4H89CFvjXwP6B_Rg" target="_blank">View</a>
                </div>

                <div className="carousel-container">
                    <button className="carousel-button" onClick={() => handleFentyImageChange("previous")}>&#60;</button>
                    <div className="carousel-image-container1">
                        <img className={`fenty-${selectedFentyImage}`} src={fentyImages[selectedFentyImage]} alt="fenty" />
                    </div>
                    <button className="carousel-button" onClick={() => handleFentyImageChange("next")}>&#62;</button>
                </div>
                <div style={{visibility: 'hidden'}} className="carousel-bottom-buttons">
                    <button style={{marginRight: "40px"}} className="carousel-bottom-button" onClick={() => handleFentyImageChange("previous")}>&#60;</button>
                    <button style={{marginLeft: "40px"}} className="carousel-bottom-button" onClick={() => handleFentyImageChange("next")}>&#62;</button>
                </div>

                <h2 id="analytics-title">Analytics & Sample Content Calendar for Instagram</h2>

                <div className="carousel-container">
                    <button className="carousel-button" onClick={() => handleAnalyImageChange("previous")}>&#60;</button>
                    <div className="carousel-image-container2">
                        <img className={`analytics-${selectedAnalyImage}`} src={analyticsImages[selectedAnalyImage]} alt="analytics" />
                    </div>
                    <button className="carousel-button" onClick={() => handleAnalyImageChange("next")}>&#62;</button>
                </div>
                <div style={{visibility: 'hidden'}} className="carousel-bottom-buttons">
                    <button style={{marginRight: "40px"}} className="carousel-bottom-button" onClick={() => handleAnalyImageChange("previous")}>&#60;</button>
                    <button style={{marginLeft: "40px"}} className="carousel-bottom-button" onClick={() => handleAnalyImageChange("next")}>&#62;</button>
                </div>

            </div>

            <div id="case-studies">
                <h2>Case Studies</h2>
                <div id="case-studies-images">
                    <img src={hp_case} alt="hp_case" />
                    <img src={bold_case} alt="bold_case" />
                </div>
            </div>

            <div id="funzone-designs">
                <h2>FunzoneDesigns Pinterest Content</h2>

                <div className="carousel-container">
                    <button className="carousel-button" onClick={() => handleFunzoneImageChange("previous")}>&#60;</button>
                    <div className="carousel-image-container3">
                        <img className={`funzone-${selectedFunzoneImage}`} src={funzoneImages[selectedFunzoneImage]} alt="funzone" />
                    </div>
                    <button className="carousel-button" onClick={() => handleFunzoneImageChange("next")}>&#62;</button>
                </div>
                <div style={{visibility: 'hidden'}} className="carousel-bottom-buttons">
                    <button style={{marginRight: "40px"}} className="carousel-bottom-button" onClick={() => handleFunzoneImageChange("previous")}>&#60;</button>
                    <button style={{marginLeft: "40px"}} className="carousel-bottom-button" onClick={() => handleFunzoneImageChange("next")}>&#62;</button>
                </div>
            </div>

            <div id="portfolio-footer">
                <span>Beaverton, Oregon</span>
                <span>JulietCharles18@gmail.com</span>
                <span>503-348-5781</span>
            </div>
        </div>
    )
}

export default Portfolio;
