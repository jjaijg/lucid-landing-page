import React from "react";
import { PricingSection } from "../components";

import { PRICING_OBJ } from "../data";

const Pricing = () => {
  return <PricingSection {...PRICING_OBJ} />;
};

export default Pricing;
