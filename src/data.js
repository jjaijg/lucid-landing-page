const line = {
  lineImg: require("./images/line.png"),
  lineImg2: require("./images/line@2x.png"),
  lineImg3: require("./images/line@3x.png"),
};

export const SCROLL_OBJ = {
  smooth: true,
  spy: true,
  offset: -80,
  duration: 500,
};

export const NAV_LINKS = [
  {
    to: "home",
    name: "Home",
  },
  {
    to: "features",
    name: "Features",
  },
  {
    to: "testimonial",
    name: "Testimonial",
  },
  {
    to: "pricing",
    name: "Pricing",
  },
  {
    to: "contact",
    name: "Contact",
  },
];

export const HOME_OBJ = {
  quote: "introducing lucid theme",
  heading: "Carefully crafted and beautiful landing page.",
  description:
    "Etiam ullamcorper et turpis eget hendrerit. Praesent varius risus mi, at elementum magna ultricies accumsan. Cras venenatis lacus sed dolor placerat tempus. Morbi blandit at neque ut imperdiet.",
  btnLabel1: "Download Now",
  btnLabel2: "View Features",
  photo: require("./images/photo.png"),
  photo2: require("./images/photo@2x.png"),
  photo3: require("./images/photo@3x.png"),
  devices: require("./images/devices.png"),
  devices2: require("./images/devices@2x.png"),
  devices3: require("./images/devices@3x.png"),
};

export const FEATURES_OBJ = {
  line,
  featureSec1: {
    darkText: true,
    quote: "product overview",
    heading: "List of amazing features",
    features: [
      {
        icon: require("./images/monitor.png"),
        icon2: require("./images/monitor@2x.png"),
        icon3: require("./images/monitor@3x.png"),
        heading: "Responsive",
        description:
          "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.",
      },
      {
        icon: require("./images/settings.png"),
        icon2: require("./images/settings@2x.png"),
        icon3: require("./images/settings@3x.png"),
        heading: "Customizable",
        description:
          "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.",
      },
      {
        icon: require("./images/like.png"),
        icon2: require("./images/like@2x.png"),
        icon3: require("./images/like@3x.png"),
        heading: "Lovely Design",
        description:
          "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.",
      },
      {
        icon: require("./images/phone.png"),
        icon2: require("./images/phone@2x.png"),
        icon3: require("./images/phone@3x.png"),
        heading: "Mobile friendly",
        description:
          "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.",
      },
    ],
  },
  featureSec2: {
    darkText: true,
    quote: "dip into the details",
    heading: "Beauty on every device",
    description:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
    features: [
      {
        icon: require("./images/cup.png"),
        icon2: require("./images/cup@2x.png"),
        icon3: require("./images/cup@3x.png"),
        heading: "Awesome design",
      },
      {
        icon: require("./images/mouse.png"),
        icon2: require("./images/mouse@2x.png"),
        icon3: require("./images/mouse@3x.png"),
        heading: "Fully responsive",
      },
      {
        icon: require("./images/energy.png"),
        icon2: require("./images/energy@2x.png"),
        icon3: require("./images/energy@3x.png"),
        heading: "Retina ready",
      },
      {
        icon: require("./images/speedometer.png"),
        icon2: require("./images/speedometer@2x.png"),
        icon3: require("./images/speedometer@3x.png"),
        heading: "Tons of features and easy to use",
      },
    ],
    devices: require("./images/devices-1.png"),
    devices2: require("./images/devices-1@2x.png"),
    devices3: require("./images/devices-1@3x.png"),
  },
  featureSec3: {
    darkText: true,
    secondaryBg: true,
    quote: "dip into the details",
    heading: "Super easy to customize",
    description:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    iphone: require("./images/i-phone-5.png"),
    iphone2: require("./images/i-phone-5@2x.png"),
    iphone3: require("./images/i-phone-5@3x.png"),
  },
};

export const TESTIMONIAL_OBJ = {
  line,
  darkText: true,
  showImg: {
    photo: require("./images/show.png"),
    photo2: require("./images/show@2x.png"),
    photo3: require("./images/show@3x.png"),
  },
  quote: "Quality at its price",
  heading: "Testimonials",
  testimonials: [
    {
      avatar: {
        icon: require("./images/user2.png"),
        icon2: require("./images/user2@2x.png"),
        icon3: require("./images/user2@3x.png"),
      },
      name: "Dean Winchester",
      role: "UX DESIGNER, GOOGLE INC.",
      description:
        "A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.",
    },
    {
      avatar: {
        icon: require("./images/user1.png"),
        icon2: require("./images/user1@2x.png"),
        icon3: require("./images/user1@3x.png"),
      },
      name: "John Doe",
      role: "CEO, THE RIVERS COMPANY",
      description:
        "Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.",
    },
    {
      avatar: {
        icon: require("./images/user2.png"),
        icon2: require("./images/user2@2x.png"),
        icon3: require("./images/user2@3x.png"),
      },
      name: "Dean Winchester",
      role: "UX DESIGNER, GOOGLE INC.",
      description:
        "A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.",
    },
    {
      avatar: {
        icon: require("./images/user1.png"),
        icon2: require("./images/user1@2x.png"),
        icon3: require("./images/user1@3x.png"),
      },
      name: "John Doe",
      role: "CEO, THE RIVERS COMPANY",
      description:
        "Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.",
    },
    {
      avatar: {
        icon: require("./images/user2.png"),
        icon2: require("./images/user2@2x.png"),
        icon3: require("./images/user2@3x.png"),
      },
      name: "Dean Winchester",
      role: "UX DESIGNER, GOOGLE INC.",
      description:
        "A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.",
    },
    {
      avatar: {
        icon: require("./images/user1.png"),
        icon2: require("./images/user1@2x.png"),
        icon3: require("./images/user1@3x.png"),
      },
      name: "John Doe",
      role: "CEO, THE RIVERS COMPANY",
      description:
        "Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.",
    },
    {
      avatar: {
        icon: require("./images/user2.png"),
        icon2: require("./images/user2@2x.png"),
        icon3: require("./images/user2@3x.png"),
      },
      name: "Dean Winchester",
      role: "UX DESIGNER, GOOGLE INC.",
      description:
        "A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.",
    },
    {
      avatar: {
        icon: require("./images/user1.png"),
        icon2: require("./images/user1@2x.png"),
        icon3: require("./images/user1@3x.png"),
      },
      name: "John Doe",
      role: "CEO, THE RIVERS COMPANY",
      description:
        "Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.",
    },
  ],
};

export const PRICING_OBJ = {
  line,
  darkText: true,
  quote: "quality has its price",
  heading: "Pricings & Plans",
  pricings: [
    {
      plan: "free",
      amount: "0",
      validity: "month",
      description:
        "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.",
      btnLabel: "order now",
    },
    {
      plan: "personal",
      amount: "25",
      validity: "month",
      description:
        "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.",
      btnLabel: "order now",
    },
    {
      plan: "business",
      amount: "50",
      validity: "month",
      description:
        "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.",
      btnLabel: "order now",
    },
    {
      plan: "ultimate",
      amount: "99",
      validity: "month",
      description:
        "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.",
      btnLabel: "order now",
    },
  ],
};

export const CONTACT_OBJ = {
  darkText: true,
  line,
  quote: "stay in touch",
  heading: "Contact us",
  details: [
    {
      icon: require("./images/phone.png"),
      icon2: require("./images/phone@2x.png"),
      icon3: require("./images/phone@3x.png"),
      description: `Phone: (415) 124-5678<br/>
      Fax: (412) 123-8290`,
    },
    {
      icon: require("./images/pointer.png"),
      icon2: require("./images/pointer@2x.png"),
      icon3: require("./images/pointer@3x.png"),
      description: `1001 Brickell Bay Dr.<br />
      Suite 1900 <br/>
      Miami, FL 33131`,
    },
    {
      icon: require("./images/envelope.png"),
      icon2: require("./images/envelope@2x.png"),
      icon3: require("./images/envelope@3x.png"),
      description: `support@yourname.com`,
    },
  ],
  map: {
    mapImg: require("./images/map.png"),
    mapImg2: require("./images/map@2x.png"),
    mapImg3: require("./images/map@3x.png"),
  },
};

export const FOOTER_OBJ = {
  icons: [
    {
      icon: require("./images/behance.png"),
      icon2: require("./images/behance@2x.png"),
      icon3: require("./images/behance@3x.png"),
    },
    {
      icon: require("./images/dribbble.png"),
      icon2: require("./images/dribbble@2x.png"),
      icon3: require("./images/dribbble@3x.png"),
    },
    {
      icon: require("./images/twitter.png"),
      icon2: require("./images/twitter@2x.png"),
      icon3: require("./images/twitter@3x.png"),
    },
    {
      icon: require("./images/facebook.png"),
      icon2: require("./images/facebook@2x.png"),
      icon3: require("./images/facebook@3x.png"),
    },
    {
      icon: require("./images/linkedin.png"),
      icon2: require("./images/linkedin@2x.png"),
      icon3: require("./images/linkedin@3x.png"),
    },
  ],
};
