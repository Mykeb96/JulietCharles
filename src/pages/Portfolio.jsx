import IMAGES from "../assets/Images/Images";
import "../styles/portfolio.css";
import { useState } from 'react';

function Portfolio() {

    const [selectedFentyImage, setSelectedFentyImage] = useState(0);
    const [selectedAnalyImage, setSelectedAnalyImage] = useState(0);
    const [selectedFunzoneImage, setSelectedFunzoneImage] = useState(0);

    const fentyImages = [
        IMAGES.fenty_1,
        IMAGES.fenty_2,
        IMAGES.fenty_3
    ]

    const analyticsImages = [
        IMAGES.analytics_1,
        IMAGES.analytics_2
    ]

    const funzoneImages = [
        IMAGES.funzone_1,
        IMAGES.funzone_2,
        IMAGES.funzone_3,
        IMAGES.funzone_4
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
                    <img src={IMAGES.hp_case} alt="hp_case" />
                    <img src={IMAGES.bold_case} alt="bold_case" />
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
