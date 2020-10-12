import React from "react";
import { TestimonialSection } from "../components";

import { TESTIMONIAL_OBJ } from "../data";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <TestimonialSection {...TESTIMONIAL_OBJ} />
    </section>
  );
};

export default Testimonial;
