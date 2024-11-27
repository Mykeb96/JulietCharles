import "../styles/services.css";

function Package({ name, idealFor, includes }) {

    return (
        <div id="package">
            <h3>{name}</h3>
            <span className="ideal-for"><span className="ideal-title">Ideal For:</span> {idealFor}</span>
            <div className="includes">
                <h2>Includes:</h2>
                <ul>
                    {includes.map((item, index) => (
                        <li className="include-item" key={index}>{item}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

function Services() {

    const packages = [
        {
            name: "The Essentials Package (For Small Businesses or Beginners)",
            idealFor: "Clients just starting on social media or looking to establish their online presence.",
            includes: [
                "4 Custom Graphics or Templates", 
                "Social Media Strategy Development (1 platform)", 
                "Profile Optimization (bios, images, hashtags)", 
                "Content Calendar Development (1-month plan)"
            ]
        },
        {
            name: "Engagement Package (For Brands Looking to Build Their Community)",
            idealFor: "Businesses seeking a polished presence and meaningful engagement.",
            includes: [
                "Social Media Audits (comprehensive analysis of 2 platforms)", 
                "Community Management (responding to messages/comments)", 
                "Content Creation (10 posts + captions)", 
                "Trend Spotting and Campaign Ideation"
            ]
        },
        {
            name: "The All-Inclusive Package (For Long-Term Partnerships)",
            idealFor: "Clients wanting full-service social media management.",
            includes: [
                "Social Media Strategy (up to 3 platforms)", 
                "Content Creation (12 posts + 2 edited videos with client-provided footage per month)", 
                "Analytics and Reporting (bi-weekly updates)", 
                "Community Management (daily monitoring)",
                "Monthly Consultation for Strategy Adjustments"
            ]
        },
        {
            name: "Growth Package (For Expanding Brands)",
            idealFor: "Clients with a basic presence who want to grow their audience and engagement.",
            includes: [
                "Social Media Strategy (up to 2 platforms)", 
                "Content Creation (8 graphics + captions)", 
                "Analytics and Reporting (monthly insights)", 
                "Hashtag and SEO Optimization"
            ]
        },
        {
            name: "Pro Campaign Package (For Focused Campaigns or Launches)",
            idealFor: "Clients needing a focused campaign for brand launches or seasonal promotions.",
            includes: [
                "Campaign Strategy and Planning", 
                "15 Custom Posts (graphics, captions, and hashtags)", 
                "Content Calendar for the Campaign Duration", 
                "Analytics and Post-Campaign Reporting",
                "Brainstorming and Video Editing Assistance (client provides footage, I provide ideas and edits)"
            ]
        },
        {
            name: "Creative Plus Package (For Brands Prioritizing Visual Content)",
            idealFor: "Brands focusing on aesthetics and creative storytelling.",
            includes: [
                "Video Concept Development and Editing Assistance (client provides footage, I provide ideas and edits)", 
                "Custom Content Creation (10 branded graphics or templates)", 
                "Trend Spotting and Campaign Ideation", 
                "Brand Voice and Visual Identity Development",
                "Platform-Specific Content Optimization"
            ]
        }
    ]

    return (
        <div id="services-page">
            <h2 id="services-title">Bringing Your Vision to Life, One Strategy at a Time</h2>

            <div id="services-header">
                <div id="get-started">
                    <h2>Content strategy, creation & more</h2>
                    <a href="https://calendly.com/julietcharles">Get Started</a>
                </div>

                <div id="services-description">
                    <p>
                        Our services are created around your brand’s personalized goals. 
                        Whether it’s a strategy for increasing engagement, creating content 
                        that will make an impression or boosting your social media presence, 
                        we’re here to help every step of the way.
                    </p>

                    <p>
                        Collaboration is the key to success. By working closely with you to 
                        understand your target audience, we can create strategies that work with 
                        your brand’s individuality while encouraging meaningful connections in 
                        your community and noticeable results. 
                    </p>

                </div>
            </div>

            <div id="packages">
                <h2>Our Services</h2>
                {packages.map((pkg, index) => (
                    <Package key={index} name={pkg.name} idealFor={pkg.idealFor} includes={pkg.includes} />
                ))}
            </div>

            <div id="portfolio-footer">
                <span>Beaverton, Oregon</span>
                <span>JulietCharles18@gmail.com</span>
                <span>503-348-5781</span>
            </div>
        </div>
    )
}

export default Services;
