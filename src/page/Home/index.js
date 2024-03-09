import React from "react";
import Welcome from "../../components/Home/Welcome";
import BookTicket from "../../components/Home/BookTicket";
import Destination from "../../components/Home/Destination";
import News from "../News";

function Home() {
  return (
    <section>
      <Welcome />
      <BookTicket />
      <Destination />
      <News />
    </section>
  )
}

export default Home;