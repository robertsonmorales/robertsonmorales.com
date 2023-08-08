import React from "react";

import Subheadline from "../atoms/Subheadline";
import Service from "../molecules/Service";
import MyServices from "../../data/services";

export default function Services () {
  const renderServices = MyServices.map(service => {
    return (
      <Service details={service} key={ service.id } />
    );
  });

  return (
    <section id="services" className="py-5">
      <div className="container">
        <Subheadline 
          section="SERVICES"
          label="What I Offer" />

        <div className="card-deck my-5">{ renderServices }</div>
      </div>
    </section>
  )
}