import React from "react";

import { FEATURES_OBJ } from "../data";
import { FeatureSec1, FeatureSec2, FeatureSec3 } from "../components";

const { featureSec1, featureSec2, featureSec3, line } = FEATURES_OBJ;

const Features = () => {
  return (
    <section id="features">
      <FeatureSec1 {...featureSec1} {...line} />
      <FeatureSec2 {...featureSec2} line={line} />
      <FeatureSec3 {...featureSec3} line={line} />
    </section>
  );
};

export default Features;
