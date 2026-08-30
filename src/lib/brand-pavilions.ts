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
        title: "Customer at the centre",
        body: "Customer needs and feedback guide the product offer and shopping experience.",
      },
      {
        number: "02",
        title: "Creative. Curious. Adaptive.",
        body: "Curiosity, creativity, and an entrepreneurial approach help the business adapt to changing customer needs.",
      },
      {
        number: "03",
        title: "Value through simplicity",
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
          title: "Discovery should feel immediate and open.",
          copy: "A bright public retail scene turns variety, colour, and choice into an invitation rather than a barrier.",
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
        title: "Quality becomes visible at close range.",
        copy: "Knit, fastening, layering, and the hand in use make garment-level decisions easy to see.",
      },
      source: {
        label: "H&M Group Annual and Sustainability Report 2025",
        href: "https://hmgroup.com/wp-content/uploads/2026/03/HM-Group-Annual-and-sustainability-report-2025.pdf",
      },
    },
    design: {
      title: "A public fashion language—fast to read, warm enough to join.",
      intro:
        "H&M red carries invitation and action. White space keeps choice legible, while direct labels connect style, value, care, and the next useful action without adding complexity.",
      keywords: ["Open", "Kinetic", "Direct", "Human", "Circular"],
      image: {
        slot: "spatial",
        eyebrow: "Campaign behaviour",
        title: "One clear message moves with many people.",
        copy: "Casting, colour, and pace carry the open invitation while the information system stays direct and repeatable.",
      },
    },
    world: {
      title: "One open system, from first choice to next life",
      intro:
        "The final scenes keep access and participation at the centre: first through shared style and then through a clear route to rewear, exchange, and return.",
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
          eyebrow: "Shared wardrobe",
          title: "Many combinations stay in motion.",
          copy: "The campaign closes on people rather than a process, keeping circular service connected to everyday self-expression.",
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
      summary:
        "A responsive brand world where silhouette, texture, and construction lead a continuous journey from inspiration to fitting room.",
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
        title: "Fashion",
        body: "The fashion proposition remains the foundation of every collection and customer connection.",
      },
      {
        number: "03",
        title: "Innovation",
        body: "Product, store, and digital innovation are developed to strengthen the fashion experience.",
      },
      {
        number: "04",
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
      label: "Official fashion direction",
      title: "Identity is shaped by silhouette and revealed through texture.",
      intro:
        "ZARA Studio describes contemporary individuality through precise silhouettes, expressive texture, and refined construction. The garment establishes attitude before the surrounding information enters.",
      items: [
        {
          key: "S",
          title: "Shape the silhouette",
          body: "Proportion and line establish the first reading of each look.",
        },
        {
          key: "T",
          title: "Let texture reveal attitude",
          body: "Surface and movement add character without competing with the form.",
        },
        {
          key: "C",
          title: "Refine construction",
          body: "Tailoring, fastening, and material transitions hold the edit together.",
        },
        {
          key: "I",
          title: "Leave room for individuality",
          body: "A controlled frame lets posture and personal combination complete the image.",
        },
      ],
      image: {
        slot: "tactile",
        eyebrow: "Material edit",
        title: "Texture replaces decoration.",
        copy: "Dry wool, translucent fabric, paper, and metal produce contrast through physical behaviour.",
      },
      source: {
        label: "ZARA Studio Collection 01: Spring/Summer 2025",
        href: "https://www.zara.com/integration/pressapi/multimedia/be/40/d8c51b4048aa8a99d6415f647ac8_original.pdf",
      },
    },
    design: {
      title: "Silhouette first; information stays at the edge.",
      intro:
        "The exact ZARA wordmark establishes identity; condensed neutral typography handles navigation and garment information. Black, white, pale stone, and measured gutters keep the frame quiet while each silhouette changes.",
      keywords: ["Current", "Edited", "Spatial", "Fluid", "Connected"],
      image: {
        slot: "spatial",
        eyebrow: "Spatial edit",
        title: "Architecture gives the silhouette room to change.",
        copy: "A long colonnade, directional light, and controlled distance extend the same negative-space rule beyond the studio.",
      },
    },
    world: {
      title: "One edit across window, screen, and page",
      intro:
        "The visual world changes format without changing its priorities: silhouette first, atmosphere second, information exactly where it is needed.",
      scenes: [
        {
          slot: "editorialC",
          eyebrow: "Portrait",
          title: "A measured pause holds the look.",
          copy: "The seated figure slows the sequence long enough for proportion, posture, and texture to register.",
          layout: "portrait",
        },
        {
          slot: "editorialD",
          eyebrow: "Close crop",
          title: "Product enters after atmosphere.",
          copy: "A tighter frame moves from attitude to garment detail without changing the collection's visual temperature.",
          layout: "wide",
        },
        {
          slot: "editorialE",
          eyebrow: "Material table",
          title: "Construction closes the sequence.",
          copy: "Fabric, colour, and handwork return the editorial image to the decisions that produced it.",
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
      {
        label: "ZARA Studio Collection 01 — Spring/Summer 2025",
        href: "https://www.zara.com/integration/pressapi/multimedia/be/40/d8c51b4048aa8a99d6415f647ac8_original.pdf",
      },
    ],
  },
  "uniqlo-comfort-measured": {
    code: "uniqlo",
    hero: {
      kicker: "Life / need / material / iteration",
      summary:
        "A LifeWear system where daily needs, useful materials, and continuous improvement become visible through ordinary moments.",
    },
    philosophy: {
      label: "Brand idea",
      title: "LifeWear is everyday clothing designed to make life better.",
      body: "UNIQLO defines LifeWear as simple, high-quality everyday clothing with a practical sense of beauty. Its details are considered around the needs of daily life, and the products are intended to keep evolving as those needs change.",
      image: {
        slot: "editorialB",
        eyebrow: "Made for daily life",
        title: "One useful layer, worn as oneself.",
        copy: "The image stays close to the person so simplicity supports individual character rather than replacing it.",
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
          key: "01",
          title: "Begin with feedback",
          body: "Customer opinions are collected, analysed, and shared with product teams.",
        },
        {
          key: "02",
          title: "Find emerging needs",
          body: "R&D responds to requests while identifying new lifestyle requirements.",
        },
        {
          key: "03",
          title: "Research materials",
          body: "Teams study new textiles alongside global fashion trends.",
        },
        {
          key: "04",
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
      title: "Useful information should feel effortless.",
      intro:
        "A strict red, white, black, and functional-grey system makes each benefit easy to scan. Modular typography separates conditions, features, and everyday outcomes without turning LifeWear into a technical dashboard.",
      keywords: ["Clear", "Modular", "Universal", "Precise", "Calm"],
      image: {
        slot: "spatial",
        eyebrow: "Life in use",
        title: "The system follows the person, not the other way around.",
        copy: "Movement and layering remain human and ordinary while product information stays clear enough to support the next choice.",
      },
    },
    world: {
      title: "A system for the whole day",
      intro:
        "The final scenes connect product detail to guidance: how a garment moves, when it layers, what it solves, and how it stays useful.",
      scenes: [
        {
          slot: "editorialC",
          eyebrow: "Commute",
          title: "Movement becomes useful information.",
          copy: "An everyday route connects comfort, movement, and a relevant garment choice without staged technical spectacle.",
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
      {
        label: "Prada — Spring/Summer 2027 Menswear",
        href: "https://www.prada.com/ww/en/pradasphere/fashion-shows/2027/ss-menswear.html",
      },
    ],
  },
} as const satisfies Record<string, BrandPavilionProfile>;

export function getBrandPavilion(slug: string): BrandPavilionProfile | undefined {
  return brandPavilions[slug as keyof typeof brandPavilions];
}
