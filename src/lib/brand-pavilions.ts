import type { DesignProjectMediaSlot } from "@/lib/design-project-media";

export type BrandPavilionImage = {
  slot: DesignProjectMediaSlot;
  eyebrow: string;
  title: string;
  copy: string;
  layout?: "wide" | "portrait" | "landscape";
};

export type BrandPavilionProfile = {
  code: "hm" | "zara" | "uniqlo" | "prada";
  hero: {
    kicker: string;
    statement: string;
    summary: string;
  };
  philosophy: {
    label: string;
    title: string;
    body: string;
    image: BrandPavilionImage;
    source: BrandPavilionSource;
  };
  values: Array<{
    number: string;
    title: string;
    body: string;
  }>;
  valuesSource: BrandPavilionSource;
  needs: {
    title: string;
    intro: string;
    items: Array<{
      title: string;
      body: string;
    }>;
    images: [BrandPavilionImage, BrandPavilionImage];
    source: BrandPavilionSource;
  };
  principles: {
    label: string;
    title: string;
    intro: string;
    items: Array<{
      key: string;
      title: string;
      body: string;
    }>;
    image: BrandPavilionImage;
    source: BrandPavilionSource;
  };
  design: {
    title: string;
    intro: string;
    keywords: string[];
    image: BrandPavilionImage;
  };
  world: {
    title: string;
    intro: string;
    scenes: BrandPavilionImage[];
  };
  sources: BrandPavilionSource[];
};

export type BrandPavilionSource = {
  label: string;
  href: string;
};

export const brandPavilions = {
  "hm-second-sun": {
    code: "hm",
    hero: {
      kicker: "Access / expression / next life",
      statement: "Style belongs to everyone.",
      summary:
        "A public-facing fashion system where creative choice, everyday value, and a longer relationship with clothes live in the same experience.",
    },
    philosophy: {
      label: "Brand idea",
      title: "Fashion and quality at the best price, in a sustainable way.",
      body: "H&M Group defines its purpose as liberating fashion for the many. The H&M brand offers a broad range for different personalities, preferences, body types, ages, identities, occasions, and cultures, spanning designer collaborations, functional sportswear, and affordable wardrobe essentials.",
      image: {
        slot: "editorialB",
        eyebrow: "The public wardrobe",
        title: "Many people. Many combinations. One open invitation.",
        copy: "Casting, styling, and movement make participation—not exclusivity—the centre of the image.",
      },
      source: {
        label: "H&M Group Annual and Sustainability Report 2025",
        href: "https://hmgroup.com/wp-content/uploads/2026/03/HM-Group-Annual-and-sustainability-report-2025.pdf",
      },
    },
    values: [
      {
        number: "01",
        title: "Customer-focused",
        body: "Customer needs and feedback guide the product offer and shopping experience.",
      },
      {
        number: "02",
        title: "Creative and entrepreneurial",
        body: "Curiosity, creativity, and an entrepreneurial approach help the business adapt to changing customer needs.",
      },
      {
        number: "03",
        title: "Cost-conscious and simple",
        body: "Careful use of resources and straightforward decisions support value for money and broad accessibility.",
      },
    ],
    valuesSource: {
      label: "H&M Group values",
      href: "https://hmgroup.com/about-us/our-values/",
    },
    needs: {
      title: "Customers expect relevance, value, and flexible access.",
      intro:
        "H&M Group identifies quality, price, availability, sustainability, and presence in the right channels as decisive factors, alongside an inspiring and seamless shopping experience.",
      items: [
        {
          title: "Personal expression",
          body: "A broad assortment serves different personalities, preferences, body types, ages, identities, occasions, and cultures.",
        },
        {
          title: "Balanced value",
          body: "The customer offer is built around the combination of fashion, quality, price, and sustainability.",
        },
        {
          title: "Relevant assortment",
          body: "Customer insight, global trends, and local-market knowledge inform products intended to feel current and useful.",
        },
        {
          title: "Connected access",
          body: "Physical stores and digital channels are designed to provide flexible, continuous access to products and inspiration.",
        },
      ],
      images: [
        {
          slot: "editorialA",
          eyebrow: "Self",
          title: "The person remains the point of focus.",
          copy: "Colour and light amplify character without turning the model into a styling prop.",
          layout: "portrait",
        },
        {
          slot: "context",
          eyebrow: "Access",
          title: "Fashion meets the rhythm of an ordinary day.",
          copy: "The campaign belongs in movement, transit, streets, and repeat wear—not only inside a studio.",
          layout: "portrait",
        },
      ],
      source: {
        label: "H&M Group Annual and Sustainability Report 2025",
        href: "https://hmgroup.com/wp-content/uploads/2026/03/HM-Group-Annual-and-sustainability-report-2025.pdf",
      },
    },
    principles: {
      label: "Official design approach",
      title: "Customer insight and creativity shape each collection.",
      intro:
        "H&M says its designers work with product teams to translate global trends into locally relevant collections, balancing creative ambition with commercial considerations and garment-level quality.",
      items: [
        {
          key: "C",
          title: "Know the customer",
          body: "Design and product teams work from customer insight and experience.",
        },
        {
          key: "B",
          title: "Balance the offer",
          body: "Creativity and commercial relevance are given equal influence.",
        },
        {
          key: "L",
          title: "Translate locally",
          body: "Global trends are adapted into collections suited to local markets.",
        },
        {
          key: "Q",
          title: "Design the whole garment",
          body: "Cut, sewing, interior construction, style, and quality all matter.",
        },
      ],
      image: {
        slot: "tactile",
        eyebrow: "Construction",
        title: "A garment is more than its front view.",
        copy: "Material, fastening, seam, and repair evidence turn quality into something the eye can verify.",
      },
      source: {
        label: "H&M Group Annual and Sustainability Report 2025",
        href: "https://hmgroup.com/wp-content/uploads/2026/03/HM-Group-Annual-and-sustainability-report-2025.pdf",
      },
    },
    design: {
      title: "A public fashion language—fast to read, warm enough to join.",
      intro:
        "Large editorial type carries energy. Utility labels carry price, care, state, and next action. Red signals the brand; solar yellow marks the moments where a garment can continue.",
      keywords: ["Open", "Kinetic", "Direct", "Human", "Circular"],
      image: {
        slot: "spatial",
        eyebrow: "Retail behaviour",
        title: "The store becomes a place to discover, care, and return.",
        copy: "Campaign theatre and practical service share the same visual grammar instead of competing for attention.",
      },
    },
    world: {
      title: "From campaign image to next-life service",
      intro:
        "The final scenes show how the brand idea survives after the first impression—on the garment, in the store, and at the moment of return.",
      scenes: [
        {
          slot: "editorialC",
          eyebrow: "Evidence",
          title: "The proof stays attached.",
          copy: "Repair, care, date, and ownership history are treated as useful information rather than decorative sustainability cues.",
          layout: "portrait",
        },
        {
          slot: "editorialD",
          eyebrow: "Next life",
          title: "Return is designed as a beginning.",
          copy: "A legible service path separates repair, rewear, exchange, and material recovery.",
          layout: "wide",
        },
      ],
    },
    sources: [
      { label: "H&M Group — Business idea", href: "https://hmgroup.com/about-us/business-idea/" },
      { label: "H&M Group — Our values", href: "https://hmgroup.com/about-us/our-values/" },
      {
        label: "H&M Group — Material use and product lifecycle",
        href: "https://hmgroup.com/sustainability/circularity-and-climate/circularity/",
      },
      {
        label: "H&M Group — Annual and Sustainability Report 2025",
        href: "https://hmgroup.com/wp-content/uploads/2026/03/HM-Group-Annual-and-sustainability-report-2025.pdf",
      },
    ],
  },
  "zara-the-air-between": {
    code: "zara",
    hero: {
      kicker: "Listen / edit / style / connect",
      statement: "Fashion moves at the speed of attention.",
      summary:
        "A responsive brand world built around creative relevance, confident editing, and a continuous journey from inspiration to fitting room.",
    },
    philosophy: {
      label: "Brand idea",
      title: "Inspiring, quality fashion shaped by creativity and customer experience.",
      body: "Inditex says its brands aim to offer inspiring, quality fashion produced responsibly. In Zara's 50th year, the group identified creativity, fashion, innovation, and customer experience as continuing commitments while expanding the offer across stores and online platforms.",
      image: {
        slot: "editorialA",
        eyebrow: "Attention",
        title: "The silhouette starts with the space around it.",
        copy: "Negative space is not emptiness; it is the editing tool that lets proportion and material arrive first.",
      },
      source: {
        label: "Inditex Annual Report 2025: Our drivers",
        href: "https://annualreport.inditex.com/anrpxxvui/en/our-drivers",
      },
    },
    values: [
      {
        number: "01",
        title: "Creativity",
        body: "Zara's official 50th-anniversary review names creativity as a continuing commitment.",
      },
      {
        number: "02",
        title: "Innovation",
        body: "Product, store, and digital innovation are developed to strengthen the fashion experience.",
      },
      {
        number: "03",
        title: "Customer experience",
        body: "The customer experience across stores and online platforms is identified as a core priority.",
      },
    ],
    valuesSource: {
      label: "Inditex Annual Report 2025: Our drivers",
      href: "https://annualreport.inditex.com/anrpxxvui/en/our-drivers",
    },
    needs: {
      title: "Customers need an inspiring offer and an engaging, connected experience.",
      intro:
        "Inditex presents fashion and customer experience as one priority: quality product, useful technology, and coordinated physical and online touchpoints should make discovery and purchase more engaging.",
      items: [
        {
          title: "Inspiring quality",
          body: "The group describes its brand offer as inspiring, high-quality, and produced responsibly.",
        },
        {
          title: "Outfit exploration",
          body: "Zara's digital Try-On feature helps customers combine garments, study silhouettes, and visualise outfits.",
        },
        {
          title: "Integrated shopping",
          body: "Store technology, pickup, checkout, fitting-room, and online services are developed as a connected system.",
        },
        {
          title: "Responsible progress",
          body: "Customer experience is advanced alongside the group's environmental and social impact plans.",
        },
      ],
      images: [
        {
          slot: "editorialB",
          eyebrow: "Movement",
          title: "Fabric carries the transition.",
          copy: "Airflow, translucency, and precise tailoring create change without visual noise.",
          layout: "landscape",
        },
        {
          slot: "context",
          eyebrow: "Context",
          title: "The edit holds when the environment changes.",
          copy: "A restrained palette lets posture, material, and motion stay readable outside the studio.",
          layout: "portrait",
        },
      ],
      source: {
        label: "Inditex Annual Report 2025: Our drivers",
        href: "https://annualreport.inditex.com/anrpxxvui/en/our-drivers",
      },
    },
    principles: {
      label: "Official product and experience approach",
      title: "Product, channels, and technology improve together.",
      intro:
        "Inditex links a well-received fashion proposition with continued investment in stores, e-commerce, and technology intended to improve the shopping experience online and offline.",
      items: [
        {
          key: "P",
          title: "Lead with product",
          body: "The fashion proposition remains the basis of customer connection.",
        },
        {
          key: "E",
          title: "Design the experience",
          body: "Stores and e-commerce are developed around a distinctive customer journey.",
        },
        {
          key: "T",
          title: "Use enabling technology",
          body: "Technology supports staff and improves shopping both online and offline.",
        },
        {
          key: "I",
          title: "Invest in improvement",
          body: "Store upgrades, digital platforms, and operations are refined continuously.",
        },
      ],
      image: {
        slot: "tactile",
        eyebrow: "Material edit",
        title: "Texture replaces decoration.",
        copy: "Dry wool, translucent fabric, paper, and metal produce contrast through physical behaviour.",
      },
      source: {
        label: "Inditex Annual Report 2025: CEO statement",
        href: "https://annualreport.inditex.com/anrpxxvui/en/ceo-statement",
      },
    },
    design: {
      title: "A quiet frame for a fast-moving proposition.",
      intro:
        "High-contrast typography establishes editorial authority. Pale stone, glass, black ink, and measured gutters keep the environment calm while photography changes quickly inside it.",
      keywords: ["Current", "Edited", "Spatial", "Fluid", "Connected"],
      image: {
        slot: "spatial",
        eyebrow: "Experience",
        title: "The flagship behaves like a live editorial.",
        copy: "Architecture gives each image and garment enough room to register, then guides the next decision without friction.",
      },
    },
    world: {
      title: "One edit across window, screen, and page",
      intro:
        "The visual world changes format without changing its priorities: silhouette first, atmosphere second, information exactly where it is needed.",
      scenes: [
        {
          slot: "editorialC",
          eyebrow: "Window",
          title: "A measured pause on the street.",
          copy: "One look occupies the space with the confidence of an image rather than the density of a stock display.",
          layout: "portrait",
        },
        {
          slot: "editorialD",
          eyebrow: "Interface",
          title: "Product enters after atmosphere.",
          copy: "Fitting-room and mobile surfaces inherit the same crops, gutters, and pace as the campaign.",
          layout: "wide",
        },
        {
          slot: "editorialE",
          eyebrow: "Publication",
          title: "Layers held in sequence.",
          copy: "The lookbook slows the collection down long enough to study construction and combination.",
          layout: "portrait",
        },
      ],
    },
    sources: [
      {
        label: "Inditex Annual Report 2025 — Our drivers",
        href: "https://annualreport.inditex.com/anrpxxvui/en/our-drivers",
      },
      {
        label: "Inditex Annual Report 2025 — CEO statement",
        href: "https://annualreport.inditex.com/anrpxxvui/en/ceo-statement",
      },
      {
        label: "Inditex Annual Report 2025 — Statement from the Chairperson",
        href: "https://annualreport.inditex.com/anrpxxvui/en/president-statement",
      },
    ],
  },
  "uniqlo-comfort-measured": {
    code: "uniqlo",
    hero: {
      kicker: "Life / need / material / iteration",
      statement: "Clothing should make the day work better.",
      summary:
        "A LifeWear laboratory where customer insight, material intelligence, and continuous refinement become visible through ordinary moments.",
    },
    philosophy: {
      label: "Brand idea",
      title: "LifeWear is everyday clothing designed to make life better.",
      body: "UNIQLO defines LifeWear as simple, high-quality everyday clothing with a practical sense of beauty. Its details are considered around the needs of daily life, and the products are intended to keep evolving as those needs change.",
      image: {
        slot: "editorialB",
        eyebrow: "Made for daily life",
        title: "Different bodies, shared clarity.",
        copy: "A multi-generational wardrobe is organised by usefulness without flattening individual character.",
      },
      source: {
        label: "UNIQLO: About LifeWear",
        href: "https://www.uniqlo.com/us/en/contents/lifewear/",
      },
    },
    values: [
      {
        number: "01",
        title: "Simple",
        body: "Everyday clothing is designed with clarity and a practical sense of beauty.",
      },
      {
        number: "02",
        title: "High-quality",
        body: "Materials, fit, and detail are developed to support dependable daily use.",
      },
      {
        number: "03",
        title: "Always evolving",
        body: "Essential products are improved as lifestyles, feedback, and needs change.",
      },
    ],
    valuesSource: {
      label: "UNIQLO: About LifeWear",
      href: "https://www.uniqlo.com/us/en/contents/lifewear/",
    },
    needs: {
      title: "Everyday comfort improves when products respond to real feedback.",
      intro:
        "UNIQLO says product development and improvement begin with customer feedback. Its research teams also study emerging needs, global trends, and new materials to make daily life more comfortable and enjoyable.",
      items: [
        {
          title: "Daily comfort",
          body: "LifeWear responds to demand for clothing that makes ordinary days comfortable and enjoyable.",
        },
        {
          title: "Useful performance",
          body: "Core products such as HEATTECH, AIRism, DRY-EX, and PUFFTECH communicate specific functional benefits.",
        },
        {
          title: "Better fit and detail",
          body: "Customer comments are analysed and shared with product teams to guide improvements.",
        },
        {
          title: "Convenient access",
          body: "Stores, online services, apps, purchasing options, and delivery choices are developed together.",
        },
      ],
      images: [
        {
          slot: "context",
          eyebrow: "A day in motion",
          title: "One wardrobe, changing conditions.",
          copy: "Layering follows transit, work, weather, and home rather than a staged fashion narrative.",
          layout: "portrait",
        },
        {
          slot: "editorialA",
          eyebrow: "Close observation",
          title: "Construction before claim.",
          copy: "The material and seam are shown directly so comfort has visible evidence.",
          layout: "portrait",
        },
      ],
      source: {
        label: "Fast Retailing: UNIQLO Business Model",
        href: "https://www.fastretailing.com/eng/group/strategy/uniqlobusiness.html",
      },
    },
    principles: {
      label: "Official product development approach",
      title: "Customer feedback begins the development cycle.",
      intro:
        "UNIQLO's research and development process combines customer requests with the search for emerging needs, new materials, and global fashion trends before cross-functional teams define each season's concepts and products.",
      items: [
        {
          key: "F",
          title: "Begin with feedback",
          body: "Customer opinions are collected, analysed, and shared with product teams.",
        },
        {
          key: "N",
          title: "Find emerging needs",
          body: "R&D responds to requests while identifying new lifestyle requirements.",
        },
        {
          key: "M",
          title: "Research materials",
          body: "Teams study new textiles alongside global fashion trends.",
        },
        {
          key: "C",
          title: "Work across functions",
          body: "R&D, merchandising, marketing, and materials teams define seasonal concepts together.",
        },
      ],
      image: {
        slot: "tactile",
        eyebrow: "Material intelligence",
        title: "Function becomes tangible at the seam.",
        copy: "Jersey, insulation, stretch, and finishing are explained through what the wearer feels and does.",
      },
      source: {
        label: "Fast Retailing: UNIQLO Business Model",
        href: "https://www.fastretailing.com/eng/group/strategy/uniqlobusiness.html",
      },
    },
    design: {
      title: "Information should feel as comfortable as the clothing.",
      intro:
        "A strict red, white, blue, and grey system makes function easy to scan. Modular typography and measured spacing separate conditions, features, and benefits without turning daily life into a technical dashboard.",
      keywords: ["Clear", "Modular", "Universal", "Precise", "Calm"],
      image: {
        slot: "spatial",
        eyebrow: "LifeWear laboratory",
        title: "The store explains through use.",
        copy: "Movement, temperature, and layering are demonstrated at human scale rather than reduced to unsupported numbers.",
      },
    },
    world: {
      title: "A system for the whole day",
      intro:
        "The final scenes connect product detail to guidance: how a garment moves, when it layers, what it solves, and how it stays useful.",
      scenes: [
        {
          slot: "editorialC",
          eyebrow: "In-store guidance",
          title: "Movement becomes useful information.",
          copy: "The retail wall connects an everyday action to a relevant garment choice.",
          layout: "portrait",
        },
        {
          slot: "editorialD",
          eyebrow: "Field guide",
          title: "Plain language closes the gap.",
          copy: "Product information explains the condition, construction, benefit, and care in that order.",
          layout: "wide",
        },
      ],
    },
    sources: [
      { label: "UNIQLO — About LifeWear", href: "https://www.uniqlo.com/us/en/contents/lifewear/" },
      {
        label: "Fast Retailing — UNIQLO Business Model",
        href: "https://www.fastretailing.com/eng/group/strategy/uniqlobusiness.html",
      },
      {
        label: "Fast Retailing — Waste and resource efficiency",
        href: "https://www.fastretailing.com/eng/sustainability/environment/waste.html",
      },
    ],
  },
  "prada-the-quiet-error": {
    code: "prada",
    hero: {
      kicker: "Concept / structure / image",
      statement: "What is familiar is never fixed.",
      summary:
        "A self-initiated exhibition study built from Prada’s public language of reconsideration: quiet images, exact structure, and deliberate shifts of context.",
    },
    philosophy: {
      label: "Brand idea",
      title: "Ideas take physical form.",
      body: "Prada describes an intellectual universe where concept, structure, and image extend beyond product and trend. Clothes and accessories give ideas and ideals a physical form, while society, art, film, and photography offer new ways to read familiar aesthetic codes.",
      image: {
        slot: "editorialA",
        eyebrow: "Viewpoint",
        title: "One coat. Two readings.",
        copy: "A mirrored partition turns an ordinary fitting-room pause into a study of presence, absence, and point of view.",
      },
      source: {
        label: "Prada Group: Prada brand identity",
        href: "https://www.pradagroup.com/en/brands/prada.html",
      },
    },
    values: [
      {
        number: "01",
        title: "Ideas before category",
        body: "Fashion carries ideas and ideals beyond the limits of an individual product.",
      },
      {
        number: "02",
        title: "Experiment as method",
        body: "Technology, know-how, and material processes are used to question established conventions.",
      },
      {
        number: "03",
        title: "Culture as material",
        body: "Society, art, film, and photography inform new readings of reality and style.",
      },
    ],
    valuesSource: {
      label: "Prada Group: Prada brand identity",
      href: "https://www.pradagroup.com/en/brands/prada.html",
    },
    needs: {
      title: "Tools of confident self-expression.",
      intro:
        "Prada presents clothes and accessories as ways to make personal ideas visible. Expression is not treated as decoration, but as a relationship between product, cultural perspective, and the reinterpretation of familiar codes.",
      items: [
        {
          title: "Confident self-expression",
          body: "Products are positioned as ways to bring personal ideas and ideals into view.",
        },
        {
          title: "Unusual perspectives",
          body: "Familiar forms are reconsidered so they are not read through convention alone.",
        },
        {
          title: "Cultural dialogue",
          body: "Fashion is connected with observations drawn from society, art, film, and photography.",
        },
        {
          title: "Material experimentation",
          body: "New products test material processes through technology and established know-how.",
        },
      ],
      images: [
        {
          slot: "editorialF",
          eyebrow: "Collective expression",
          title: "Individuality becomes visible in relation.",
          copy: "Three distinct silhouettes share one unpolished room; movement, posture, and distance do the editorial work.",
          layout: "landscape",
        },
        {
          slot: "editorialB",
          eyebrow: "Object language",
          title: "Function and ambiguity occupy the same table.",
          copy: "A circular leather object, blank papers, steel, and one green edge create tension without a decorative effect.",
          layout: "landscape",
        },
      ],
      source: {
        label: "Prada Group: Prada brand identity",
        href: "https://www.pradagroup.com/en/brands/prada.html",
      },
    },
    principles: {
      label: "Official design approach",
      title: "Reconsider the familiar.",
      intro:
        "Prada says its design approach begins with unconventional analysis, challenges preconceived aesthetic patterns, and returns shared codes in altered forms supported by technology and know-how.",
      items: [
        {
          key: "O",
          title: "Observe society",
          body: "Cultural change and disciplines beyond fashion inform the creative process.",
        },
        {
          key: "C",
          title: "Challenge assumptions",
          body: "Preconceived aesthetic patterns are questioned rather than accepted as fixed.",
        },
        {
          key: "R",
          title: "Reinterpret codes",
          body: "Shared visual and social references are approached from unusual perspectives.",
        },
        {
          key: "M",
          title: "Test materials",
          body: "Technology and production know-how extend what product processes can express.",
        },
      ],
      image: {
        slot: "tactile",
        eyebrow: "Construction",
        title: "The decision is held in the hand.",
        copy: "Fastening a coat beside leather and coloured glass brings use, material, and precision into one quiet frame.",
      },
      source: {
        label: "Prada Group: Prada brand identity",
        href: "https://www.pradagroup.com/en/brands/prada.html",
      },
    },
    design: {
      title: "One code. A change of context.",
      intro:
        "The independent response uses a neutral grotesk, black and paper white, stainless surfaces, and a single muted green plane. Reframing happens through crop, scale, and juxtaposition rather than glitch effects.",
      keywords: ["Exact", "Quiet", "Reframed", "Tactile", "Unresolved"],
      image: {
        slot: "spatial",
        eyebrow: "Exhibition system",
        title: "The room remains adjustable.",
        copy: "Steel plinths, mirrored panels, paper, and translucent green glass make the installation feel provisional and precise.",
      },
    },
    world: {
      title: "Image, object, space.",
      intro:
        "A sequence of installation, garment, street, and publication shows how one point of view can move between scales without turning into a repeated logo treatment.",
      scenes: [
        {
          slot: "editorialD",
          eyebrow: "Installation",
          title: "Space is edited in public.",
          copy: "Movable mesh and green-glass planes reveal the labour and decisions behind a finished cultural environment.",
          layout: "wide",
        },
        {
          slot: "editorialE",
          eyebrow: "Garment",
          title: "Construction carries the argument.",
          copy: "A frontal coat study makes proportion, fastening, and the tension between severity and softness visible.",
          layout: "portrait",
        },
        {
          slot: "context",
          eyebrow: "Ordinary time",
          title: "Clothes return to the city.",
          copy: "Two people descend wet stone steps in distinct states of dress, turning contrast into a lived scene rather than a studio effect.",
          layout: "portrait",
        },
        {
          slot: "editorialC",
          eyebrow: "Publication",
          title: "Silence is part of the edit.",
          copy: "A blank folio, metal divider, brass tab, and green marker leave space for a viewer to complete the reading.",
          layout: "portrait",
        },
      ],
    },
    sources: [
      {
        label: "Prada Group — Prada brand identity",
        href: "https://www.pradagroup.com/en/brands/prada.html",
      },
      {
        label: "Prada Group — Group profile",
        href: "https://www.pradagroup.com/en/group/group-profile.html",
      },
      {
        label: "Prada — Days of Summer 2026",
        href: "https://www.prada.com/ww/en/pradasphere/campaigns/2026/days-of-summer.html",
      },
      {
        label: "Prada Group — Fall/Winter 2026 Simple Stories",
        href: "https://www.pradagroup.com/en/news-media/news-section/26-07-21-prada-fw-26-campaign.html",
      },
    ],
  },
} as const satisfies Record<string, BrandPavilionProfile>;

export function getBrandPavilion(slug: string): BrandPavilionProfile | undefined {
  return brandPavilions[slug as keyof typeof brandPavilions];
}
