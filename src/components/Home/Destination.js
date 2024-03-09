import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DestinationCard from "./DestinationCard";
import HoangLienSon_Img from "../../Assets/img/Top_Hints/HoangLienSon.jpg";
import Hue_Img from "../../Assets/img/Top_Hints/Hue.jpg";
import HaLong_Img from "../../Assets/img/Top_Hints/HaLongBay.jpg";
import HaNoi_Img from "../../Assets/img/Top_Hints/HaNoi.jpg";
import DaNang_Img from "../../Assets/img/Top_Hints/Hinh-anh-cau-vang-Da-Nang-ve-dem.jpg";
import HoiAn_Img from "../../Assets/img/Top_Hints/HoiAn.jpg";

function Destination() {
  return (
    <Container>
      <h1 className="project-heading">
        <strong className="purple">Destination</strong>
      </h1>
      <p style={{ color: "white" }}>
        Happiness isn’t a destination, it’s a journey we are on
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <DestinationCard
            imgPath={HaNoi_Img}
            isBlog={false}
            title="Ho Chi Minh Mausoleum"
            description="Ho Chi Minh Mausoleum is an important historical attraction of Hanoi. 
            It was built to commemorate the merits of Ho Chi Minh Uncle – the most iconic and popular leader of Vietnam, known to his people as ‘Uncle Ho’. 
            The construction of the building was started in 1973 and first opened to the public in 1975"
            ghLink="https://en.wikipedia.org/wiki/Ho_Chi_Minh_Mausoleum"
          />
        </Col>

        <Col md={4} className="project-card">
          <DestinationCard
            imgPath={HoiAn_Img}
            isBlog={false}
            title="Chua Cau Hoi An"
            description="Chua Cau is considered the “heart” of the ancient town of Hoi An in the central province of Quang Nam. 
            It is a beautiful historical piece, featuring the cultural and architectural exchange between Vietnam and Japan. 
            It was built near the Hoai River in the 17th century with donations from Japanese merchants. 
            Therefore, Chua Cau is also called “The Japanese Bridge”."
            ghLink="https://en.wikipedia.org/wiki/Japanese_Bridge"
          />
        </Col>

        <Col md={4} className="project-card">
          <DestinationCard
            imgPath={HaLong_Img}
            isBlog={false}
            title="Ha Long Bay"
            description="Hạ Long Bay is a UNESCO World Heritage Site and popular travel destination in Quảng Ninh Province, Vietnam. 
            Halong Bay is a beautiful natural wonder in northern Vietnam near the Chinese border.
            In Vietnamese, Ha Long means “Descending Dragon.” 
            Dragons play a prominent role in Vietnamese culture, and the most popular legend has it that one such creature and her children descended from heaven to defend the Viet people from invaders, spraying fire and emeralds or jade."
            ghLink="https://en.wikipedia.org/wiki/H%E1%BA%A1_Long_Bay"
          />
        </Col>

        <Col md={4} className="project-card">
          <DestinationCard
            imgPath={HoangLienSon_Img}
            isBlog={false}
            title="Hoang Lien Son"
            description="With challenging trekking routes amidst high mountains, picturesque terraced fields, and valleys, as well as vibrant ethnic minorities like the Dao, Tay, and H'Mong, Hoang Lien Son stands as a natural wonder in the northwestern region. 
            Its pristine beauty is undisturbed by urban hustle, exuding the untouched beauty of nature that invites everyone to immerse themselves in its charm."
            ghLink="https://en.wikipedia.org/wiki/Ho%C3%A0ng_Li%C3%AAn_National_Park"
          />
        </Col>

        <Col md={4} className="project-card">
          <DestinationCard
            imgPath={DaNang_Img}
            isBlog={false}
            title="Golden Bridge"
            description="In the mountains of central Vietnam, two huge hands lift a golden walkway high above the mountaintops. 
            It is as if the ground below has taken a human form and grown arms."
            ghLink="https://en.wikipedia.org/wiki/Golden_Bridge_(Vietnam)"
          />
        </Col>

        <Col md={4} className="project-card">
          <DestinationCard
            imgPath={Hue_Img}
            isBlog={false}
            title="Imperial City of Hue"
            description="One of the main attractions in Hue is the Imperial City, a vast complex of palaces, temples, and gardens that was once the home of the emperor and his court. 
            The Imperial City is a UNESCO World Heritage Site and is a testament to the city's rich history and cultural significance. "
            ghLink="https://en.wikipedia.org/wiki/Imperial_City_of_Hu%E1%BA%BF"
          />
        </Col>
      </Row>
    </Container>
  );
}
export default Destination;