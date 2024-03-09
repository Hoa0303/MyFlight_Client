import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsCard from '../../components/News/NewsCard'
import Particle from "../../components/Particle";
import leaf from "../../Assets/img/News/News_1.jpg";
import emotion from "../../Assets/img/News/News_2.jpg";
import Airfare from "../../Assets/img/News/News_3.jpg";
import Eiffel from "../../Assets/img/News/News_4.jpg";
import suicide from "../../Assets/img/News/News_5.jpg";
import Austria from "../../Assets/img/News/News_6.jpg";

function News() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    <strong className="purple">News </strong>
                </h1>
                <p style={{ color: "white" }}>
                    He that travels much knows much
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <NewsCard
                            imgPath={Eiffel}
                            isBlog={false}
                            title="The Eiffel Tower Remains Closed Due to Strike — What to Know"
                            description="The Eiffel Tower closed to visitors on Tuesday amid a worker’s strike with officials warning the closure could be extended.
                            A warning, which was posted to the homepage for the famous Parisian attraction, advised potential visitors to check the website before coming. 
                            The closure marked the third time in two months — and the second consecutive day — the Eiffel Tower was shuttered, the Associated Press reported."
                            ghLink="https://www.travelandleisure.com/paris-eiffel-tower-closed-strike-8585114"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <NewsCard
                            imgPath={Austria}
                            isBlog={false}
                            title="How to Plan the Perfect Trip to Innsbruck, Austria"
                            description="Nestled in an alpine valley on the banks of the Inn River and backed by photogenic peaks, Innsbruck, the fifth-largest city in Austria and the capital of the state of Tyrol, is a longtime destination for winter sports that provides access to many notable ski areas. 
                            When the cold weather rolls in and the flakes fall, people come from all over Europe and beyond to take advantage of the snow-covered terrain. 
                            Visitors can check out some of the venues from the 1964 and 1976 Winter Olympic Games such as the Bergisel Ski Jump. 
                            There’s also an impressive system of scenic cable cars that brings riders up the craggy mountains for eye-popping panoramas. "
                            ghLink="https://www.travelandleisure.com/innsbruck-austria-travel-guide-7966775"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <NewsCard
                            imgPath={Airfare}
                            isBlog={false}
                            title="Kayak's Newest Flight Price-matching Feature Helps You Find the Cheapest Airfare — and We Tested It Out"
                            description="Kayak is making it much easier for travelers to ensure they get the best flight deal thanks to the rollout of its new PriceCheck tool.
                            Leveraging the power of AI, Kayak’s PriceCheck is “a new patent-pending price comparison tool” that’s free to use for mobile app users of the travel search engine. 
                            Travelers can upload a screenshot of their airfare — from any website — and Kayak will search across the competition to ensure they’re getting the best possible deal."
                            ghLink="https://www.travelandleisure.com/kayak-flight-price-matching-ai-tool-8605249"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <NewsCard
                            imgPath={leaf}
                            isBlog={false}
                            title="Norwegian Cruise Line Will Dock at a New Homeport in Florida This Year — and Will Add New Caribbean Sailings"
                            description="Norwegian Cruise Line passengers will have a new homeport to choose from when the company moves to Jacksonville, Florida, next year.
                            Starting in November 2025, Norwegian will dock its Norwegian Gem ship in the north Florida city for seasonal cruises to the Bahamas and the Eastern Caribbean, according to the company. 
                            The homeport was approved for a three year operation."
                            ghLink="https://www.travelandleisure.com/norwegian-cruise-line-jacksonville-florida-homeport-8572233"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <NewsCard
                            imgPath={suicide}
                            isBlog={false}
                            title="Disneyland vs. Walt Disney World — Everything You Need to Know About Both Theme Park Resorts"
                            description="Going to a Disney resort — any Disney resort — is always a good idea. 
                            In the U.S., you get the choice of visiting Disneyland in California or Walt Disney World in Florida. 
                            Both offer days' worth of fun for people of all ages — from thrilling rides to delectable food and an overall atmosphere of joy that could bring anyone back to their childhood. 
                            However, if you're trying to decide which to visit, there are a few key factors to consider."
                            ghLink="https://www.travelandleisure.com/trip-ideas/disney-vacations/disneyland-vs-disney-world"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <NewsCard
                            imgPath={emotion}
                            isBlog={false}
                            title="Japan's Mount Fuji to Implement Visitor Cap, Fees for Climbers"
                            description="The gorgeous mountain, a UNESCO World Heritage site that sits a couple hours from Tokyo, 
                            will now limit daily climbers to no more than 4,000 per day, CNN reported. 
                            The local Yamanashi prefectural government has also voted to charge climbers ¥2,000 ($13.50) per person."
                            ghLink="https://www.travelandleisure.com/japan-mount-fuji-visitor-cap-entry-fee-8605626"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default News;