import type { BrandPavilionProfile } from "@/lib/brand-pavilions";

export const newBrandPavilions = {
  "muji-household-weather": {
    code: "muji",
    hero: {
      kicker: "Need / material / process / enough",
      summary:
        "HOUSEHOLD WEATHER follows MUJI's product logic through translucent polypropylene storage, material economy, unbleached paper, and familiar actions reduced to what is useful.",
    },
    philosophy: {
      label: "No-brand quality goods",
      title: "An empty vessel, ready for many lives.",
      body: "MUJI describes its products as no-brand quality goods and its forms as empty vessels. Official product evidence anchors the translucent PP box and reduced package; the wall-mounted CD player remains in the sourced archive as an example of legible operation. This independent study extends that logic across storage, laundry, making, repair, arrival, and a shared meal; the recurring material vocabulary matters more than a staged hero product.",
      image: {
        slot: "spatial",
        eyebrow: "Household atmosphere",
        title: "The room changes without becoming a showroom.",
        copy: "Light, storage, fabric, and daily movement create the identity before a product label enters.",
        layout: "wide",
      },
      source: { label: "MUJI Singapore: About MUJI", href: "https://www.muji.com/sg/about" },
    },
    values: [
      {
        number: "01",
        title: "Selection of materials",
        body: "Useful, appropriate materials are chosen for what they can do rather than for status.",
      },
      {
        number: "02",
        title: "Streamlining of processes",
        body: "Unnecessary finishing and production steps are removed while quality remains intact.",
      },
      {
        number: "03",
        title: "Simplification of packaging",
        body: "Packaging protects and informs without disguising the product or becoming the attraction.",
      },
    ],
    valuesSource: { label: "MUJI Singapore: About MUJI", href: "https://www.muji.com/sg/about" },
    needs: {
      title: "People need objects that adapt to life instead of prescribing it.",
      intro:
        "MUJI's empty-vessel idea makes room for different households, cultures, and routines. Translucent storage, unbleached paper, pale textiles, plain tools, and legible actions recur across different rooms without pretending that every photograph contains the same physical object.",
      items: [
        {
          title: "Ordinary usefulness",
          body: "The object begins with a recurring household task.",
        },
        {
          title: "Material honesty",
          body: "Surface and construction disclose what the object is made from.",
        },
        {
          title: "Adaptable calm",
          body: "Neutral form supports many rooms without erasing their character.",
        },
        {
          title: "Less waste",
          body: "Process and packaging are reduced where they add no useful value.",
        },
      ],
      images: [
        {
          slot: "context",
          eyebrow: "Life in use",
          title: "The household supplies the composition.",
          copy: "Breakfast, storage, cleaning, and rest give each object its scale and reason to exist.",
          layout: "portrait",
        },
        {
          slot: "hero",
          eyebrow: "Enoughness",
          title: "Nothing is added to imply value.",
          copy: "A small material family communicates through proportion, touch, and repeat use.",
          layout: "portrait",
        },
      ],
      source: { label: "MUJI Message 2025", href: "https://www.muji.com/jp/message/2025/en/" },
    },
    principles: {
      label: "Product-development approach",
      title: "Every object must show its reason.",
      intro:
        "MUJI's three published viewpoints become an object test: select the material, remove an unnecessary process, simplify the package, then photograph the ordinary action that gives the object its reason.",
      items: [
        {
          key: "M",
          title: "Choose the material",
          body: "Let use, availability, and feel guide the choice.",
        },
        {
          key: "P",
          title: "Question the process",
          body: "Remove a step only when function remains whole.",
        },
        {
          key: "K",
          title: "Clarify the package",
          body: "Protect and identify without theatrical presentation.",
        },
        {
          key: "L",
          title: "Leave room for life",
          body: "Keep the final form open to different people and homes.",
        },
      ],
      image: {
        slot: "tactile",
        eyebrow: "Material evidence",
        title: "Every surface must disclose its role.",
        copy: "Plain paper packets, a translucent box, tape, and a metal ruler make material, process, and package legible before any display language is added.",
      },
      source: { label: "MUJI Singapore: About MUJI", href: "https://www.muji.com/sg/about" },
    },
    design: {
      title: "Household information, edited to the point of calm.",
      intro:
        "Warm paper, utility black, quiet red, measured Japanese-influenced typography, and unembellished photography form a catalogue that behaves more like a field journal than an advertisement. Recycled paper belongs to the independent display system, not to an invented product-history claim.",
      keywords: ["Useful", "Open", "Honest", "Quiet", "Enough"],
      image: {
        slot: "editorialB",
        eyebrow: "Process index",
        title: "Material, process, package, use.",
        copy: "The production sequence stays visible without turning the page into a technical dashboard.",
      },
    },
    world: {
      title: "Objects recede. Routines remain.",
      intro:
        "The closing sequence moves from laundry and quiet work to a small workshop, an umbrella at the door, and a shared table. Storage, paper, cloth, wood, and simple tools form one household language while the people and tasks keep changing.",
      scenes: [
        {
          slot: "editorialA",
          eyebrow: "Laundry / weather",
          title: "A shirt, a rail, and moving air set the task.",
          copy: "The photograph begins with use: one garment is clipped to a narrow balcony rail while material and weather remain unembellished.",
          layout: "portrait",
        },
        {
          slot: "editorialC",
          eyebrow: "Shared room / quiet work",
          title: "Calm comes from compatible routines.",
          copy: "Reading and writing occupy one compact room; proportion, light, and a paper lamp organise the scene without showroom theatre.",
          layout: "portrait",
        },
        {
          slot: "editorialD",
          eyebrow: "Workshop / process",
          title: "Making remains visible in the finished world.",
          copy: "A small drawer unit is assembled at a pale worktable, keeping hand, tool, joint, and material in the same frame.",
          layout: "wide",
        },
        {
          slot: "editorialE",
          eyebrow: "Repair / exchange",
          title: "Use continues through maintenance and conversation.",
          copy: "Folded material is handled behind a working counter while visitors arrive with the day's weather still attached.",
          layout: "portrait",
        },
        {
          slot: "editorialF",
          eyebrow: "Return / shared",
          title: "The objects leave room for company.",
          copy: "Three people pass a bowl around a small table; the household system resolves as support for an ordinary shared act.",
          layout: "wide",
        },
      ],
    },
    sources: [
      { label: "MUJI Singapore — About MUJI", href: "https://www.muji.com/sg/about" },
      { label: "MUJI Message 2025", href: "https://www.muji.com/jp/message/2025/en/" },
      {
        label: "MUJI — Polypropylene storage archive",
        href: "https://www.muji.com/jp/feature/polypropylene-storage/",
      },
      {
        label: "MUJI — Wall-mounted CD player catalogue",
        href: "https://www.muji.com/public/media/jp/doc/7677181/catalog_10ss_fab01.pdf",
      },
      {
        label: "Ryohin Keikaku — Advertising archive",
        href: "https://www.ryohin-keikaku.jp/en/corporate/ad-archive",
      },
    ],
  },
  "levis-wear-is-the-record": {
    code: "levis",
    hero: {
      kicker: "Utility / originality / record",
      summary:
        "WEAR IS THE RECORD begins with the 501: straight silhouette, button fly, copper rivets, Arcuate, Two Horse trademark, and Red Tab—then follows it through wear, fade, repair, and another owner.",
    },
    philosophy: {
      label: "Official construction history / independent premise",
      title: "The 501 is a construction before it is an image.",
      body: "Official history starts with the 1873 patent for riveted pocket openings. The 501's straight fit and button fly hold the silhouette while copper rivets, Arcuate stitching, the Two Horse back patch, and the Red Tab make its construction and identity readable. This project follows those signatures across different people, worn examples, and acts of repair.",
      image: {
        slot: "hero",
        eyebrow: "Original / 01",
        title: "One pair makes the signatures readable.",
        copy: "Two people hold up a straight-leg jean so its straight form, back-pocket Arcuate, patch placement, and Red Tab can be read before styling begins; the official Two Horse history is documented separately in the object ledger.",
        layout: "portrait",
      },
      source: {
        label: "Levi Strauss & Co.: Levi's brand",
        href: "https://www.levistrauss.com/who-we-are/brands/levis/",
      },
    },
    values: [
      {
        number: "01",
        title: "Utility",
        body: "Construction begins with work, movement, strength, and repeat use.",
      },
      {
        number: "02",
        title: "Originality",
        body: "A recognisable garment becomes individual through the person who wears it.",
      },
      {
        number: "03",
        title: "Self-expression",
        body: "Fit, styling, fading, alteration, and repair make identity visible.",
      },
    ],
    valuesSource: {
      label: "Levi Strauss & Co.: Levi's brand",
      href: "https://www.levistrauss.com/who-we-are/brands/levis/",
    },
    needs: {
      title: "A 501 should accumulate a life instead of ending at purchase.",
      intro:
        "This independent storyline treats the 501 as a repeatable construction carried by many lives. Street movement, skating, washing, button-fly handling, workshop inspection, and sewing show how indigo, hardware, and repair become a record. Levi's published construction, care, and reuse guidance supplies the official anchors.",
      items: [
        {
          title: "Dependable construction",
          body: "Rivets, pockets, seams, and fit must continue to work under real wear.",
        },
        {
          title: "Personal fit",
          body: "The same denim vocabulary supports different bodies and ways of dressing.",
        },
        {
          title: "Visible history",
          body: "Fades and repairs can record movement instead of being treated as flaws.",
        },
        {
          title: "A route forward",
          body: "Care and repair extend the garment's usefulness without erasing its past.",
        },
      ],
      images: [
        {
          slot: "context",
          eyebrow: "Street record",
          title: "The standard changes with every stride.",
          copy: "Two wearers cross a downtown street in differently fitted denim, showing how one construction language supports distinct bodies and movement.",
          layout: "portrait",
        },
        {
          slot: "editorialA",
          eyebrow: "Portrait record",
          title: "A uniform becomes personal in transit.",
          copy: "A musician sits beside a guitar case on a rain-marked night bus; denim is read through posture, travel, and ordinary wear rather than a studio pose.",
          layout: "portrait",
        },
      ],
      source: {
        label: "Levi Strauss & Co.: Levi's history",
        href: "https://www.levistrauss.com/levis-history/",
      },
    },
    principles: {
      label: "Archive method",
      title: "Read the 501 from rivet to owner.",
      intro:
        "The visual method first identifies the five-pocket straight silhouette, button fly, copper hardware, pocket stitching, patch, and tab; only then does it follow fade, repair, and the wearer's account.",
      items: [
        {
          key: "01",
          title: "Build for movement",
          body: "Document the working details before styling enters.",
        },
        {
          key: "02",
          title: "Follow the fade",
          body: "Let friction, light, and habit reveal repeated use.",
        },
        {
          key: "03",
          title: "Keep the repair",
          body: "A visible intervention becomes a dated chapter, not a hidden defect.",
        },
        {
          key: "04",
          title: "Name the wearer",
          body: "Every garment record stays connected to a person and story.",
        },
      ],
      image: {
        slot: "tactile",
        eyebrow: "Construction",
        title: "Five official signatures organise many wear records.",
        copy: "Denim panels, patch material, scissors, and tape sit on one worktable while the five official signatures provide the inspection order.",
      },
      source: {
        label: "Levi Strauss & Co.: Levi's history",
        href: "https://www.levistrauss.com/levis-history/",
      },
    },
    design: {
      title: "An archive with dirt under its fingernails.",
      intro:
        "Deep indigo, archive cream, Red Tab red, copper, condensed industrial type, stitch rules, and contact-sheet pacing build a system that feels handled rather than staged.",
      keywords: ["Original", "Useful", "Worn", "Personal", "Repairable"],
      image: {
        slot: "editorialB",
        eyebrow: "Repair ledger",
        title: "Every intervention receives a date.",
        copy: "Cards, offcuts, thread, and hardware turn service into an archive of continued use.",
      },
    },
    world: {
      title: "The archive stays in motion.",
      intro:
        "The final sequence resolves make, wear, wash, inspect, repair, and return through a family of lived examples. Copper hardware, back-patch placement, Red Tab, Arcuate, button fly, and straight form remain the photographed grammar; the object ledger separately records the official Two Horse history. Each wearer and repair writes a different sentence.",
      scenes: [
        {
          slot: "editorialC",
          eyebrow: "Movement / skate",
          title: "Wear begins where the body repeats a move.",
          copy: "A skateboarder's loose jeans crease, scrape, and open around motion; use becomes the first author of the surface.",
          layout: "portrait",
        },
        {
          slot: "editorialD",
          eyebrow: "Wash / inspection",
          title: "A clothesline turns wear into a full-length record.",
          copy: "Ripped jeans hang above a basin and tools so fade, tear, back patch, and Red Tab can be assessed before the next repair.",
          layout: "wide",
        },
        {
          slot: "editorialE",
          eyebrow: "Button fly / hand record",
          title: "The 501 announces itself through use.",
          copy: "Two hands open the button fly beside thread and scissors, bringing an official signature into an ordinary repair context.",
          layout: "portrait",
        },
        {
          slot: "spatial",
          eyebrow: "Transfer / travel",
          title: "Denim moves with the people who carry it.",
          copy: "Two people in jeans lift a worn trunk from a van, turning reuse and handoff into a physical action rather than an archival claim.",
          layout: "wide",
        },
        {
          slot: "editorialF",
          eyebrow: "Repair / project conclusion",
          title: "The record continues under the needle.",
          copy: "Older hands guide worn denim beneath a black sewing machine; the ending is an intervention that makes another period of wear possible.",
          layout: "wide",
        },
      ],
    },
    sources: [
      {
        label: "Levi Strauss & Co. — Levi's brand",
        href: "https://www.levistrauss.com/who-we-are/brands/levis/",
      },
      {
        label: "Levi Strauss & Co. — Levi's history",
        href: "https://www.levistrauss.com/levis-history/",
      },
      {
        label: "Levi Strauss & Co. — 501 straight leg and button fly",
        href: "https://www.levistrauss.com/2022/05/20/celebrating-501-day-around-the-world/",
      },
      {
        label: "Levi Strauss & Co. — Arcuate history",
        href: "https://www.levistrauss.com/2018/11/15/happy-75th-anniversary-arcuate-5-facts-pocket-design/",
      },
      {
        label: "Levi Strauss & Co. — Red Tab history",
        href: "https://www.levistrauss.com/2017/03/01/levis-tabs/",
      },
      {
        label: "Levi Strauss & Co. — Wear Longer Project",
        href: "https://www.levistrauss.com/wearlongerproject/",
      },
      {
        label: "Levi Strauss & Co. — Use and reuse",
        href: "https://www.levistrauss.com/how-we-do-business/use-and-reuse/",
      },
      {
        label: "Levi Strauss & Co. — Behind Every Original",
        href: "https://www.levistrauss.com/2026/02/08/levis-behind-every-original/",
      },
    ],
  },
  "polo-ralph-lauren-the-long-match": {
    code: "polo",
    hero: {
      kicker: "Preparation / play / travel / after-hours",
      summary:
        "THE LONG MATCH takes the 1971 Pony mark and the Polo shirt introduced in 1972 as official historical anchors, then follows an independent family of cotton piqué, oxford, cable knit, wooden racquets, and saddle leather from stable to court, city, clubhouse, and blue hour.",
    },
    philosophy: {
      label: "Official brand evidence",
      title: "A sporting life becomes a complete American world.",
      body: "Polo's official brand description combines collegiate classics, English haberdashery, downtown style, and all-American sporting looks. Ralph Lauren's own history connects that mix to New York beginnings and to clothes designed to move naturally between sport and everyday life.",
      image: {
        slot: "spatial",
        eyebrow: "Opening field",
        title: "Three generations enter one sporting landscape.",
        copy: "People carrying wooden racquets cross a seaside grass court, establishing place, company, and an object vocabulary before any product close-up.",
        layout: "wide",
      },
      source: {
        label: "Ralph Lauren Corporation: Polo Ralph Lauren",
        href: "https://corporate.ralphlauren.com/polo-ralph-lauren",
      },
    },
    values: [
      {
        number: "01",
        title: "Sport as a way of living",
        body: "From Bronx pickup games to tennis, rugby, rowing, varsity, and equestrian life, sport belongs both on the field and beyond it; movement and ritual give the clothes their reason.",
      },
      {
        number: "02",
        title: "Timeless continuity",
        body: "Enduring pieces are made to gather wear, remain relevant, and pass between generations instead of being treated as disposable seasonal props.",
      },
      {
        number: "03",
        title: "An American story of place",
        body: "Bronx beginnings, Manhattan energy, East Coast sport, country landscapes, and social interiors are edited as one lifestyle rather than reduced to a single country-club shorthand.",
      },
    ],
    valuesSource: {
      label: "Ralph Lauren: Citizenship and sustainability",
      href: "https://corporate.ralphlauren.com/citizenship-and-sustainability",
    },
    needs: {
      title: "This unofficial study enters the world through continuity, not costume.",
      intro:
        "An intergenerational ensemble carries a consistent family of navy cotton piqué, blue oxford, cream cable knit, wooden racquets, and saddle leather through preparation, play, care, travel, and time together. The continuity comes from repeated object families and rituals, not a false claim that every frame contains the identical garment or person.",
      items: [
        {
          title: "A recognisable character",
          body: "Clothes support personality and role without turning a person into a mannequin.",
        },
        {
          title: "A sense of occasion",
          body: "Sport and hospitality create rhythm, anticipation, and shared ritual.",
        },
        {
          title: "Wardrobe continuity",
          body: "Pieces change function through layering rather than being replaced by a new costume.",
        },
        {
          title: "A world beyond product",
          body: "Place, company, weather, travel, and memory make the style meaningful.",
        },
      ],
      images: [
        {
          slot: "editorialA",
          eyebrow: "Preparation / handwork",
          title: "The wardrobe begins with maintenance.",
          copy: "Hands stitch a navy garment beside cable knit and a wooden racquet, making care—not display—the first action of the story.",
          layout: "portrait",
        },
        {
          slot: "context",
          eyebrow: "Preparation / generations",
          title: "Readiness is learned in company.",
          copy: "An older person waits by the window while a younger player ties a shoe; sporting life begins as a shared domestic ritual.",
          layout: "portrait",
        },
      ],
      source: {
        label: "Ralph Lauren: Official biography",
        href: "https://corporate.ralphlauren.com/leadership-ralph-lauren-full-bio.html?redirect=true&searchTerms=RALPH+LAUREN+BIO",
      },
    },
    principles: {
      label: "Editorial method",
      title: "Let the wardrobe travel through a complete day.",
      intro:
        "Official history anchors the Pony mark introduced in 1971 and the Polo shirt introduced in 1972. This project follows five recurring object families—cotton piqué, oxford, cable knit, wooden racquets, and saddle leather—through an ensemble whose roles and generations change.",
      items: [
        {
          key: "I",
          title: "Begin intimately",
          body: "Preparation establishes character before spectacle.",
        },
        {
          key: "II",
          title: "Open the landscape",
          body: "The match gives the story public scale and movement.",
        },
        {
          key: "III",
          title: "Follow the transition",
          body: "Travel and changing layers connect sport to social life.",
        },
        {
          key: "IV",
          title: "End in company",
          body: "Hospitality completes the world through shared ritual.",
        },
      ],
      image: {
        slot: "tactile",
        eyebrow: "Wardrobe evidence",
        title: "Maintenance turns equipment into inheritance.",
        copy: "An older and younger pair work on a wooden tennis racquet at the same bench; skill and care connect the material vocabulary across generations.",
      },
      source: {
        label: "Ralph Lauren: Team USA 2024",
        href: "https://corporate.ralphlauren.com/pr_240618_PoloRalphLaurenTeamUSA2024.html",
      },
    },
    design: {
      title: "A cinematic day edited like a bound journal.",
      intro:
        "The system translates documented Polo codes—sport, equestrian craft, New York life, country landscape, and generational continuity—into a bound journal. Full-bleed action alternates with quiet portraits and object studies so one restrained palette and five material families hold the world together.",
      keywords: ["Authentic", "Timeless", "Sporting", "Cinematic", "Social"],
      image: {
        slot: "editorialB",
        eyebrow: "Match",
        title: "The court turns the wardrobe into motion.",
        copy: "A player lunges for a low ball while an older observer holds the edge of the frame; performance remains social, imperfect, and lived.",
      },
    },
    world: {
      title: "One sporting world. Five object families. Twenty frames.",
      intro:
        "Cotton piqué, blue oxford, cream cable knit, wooden racquets, and saddle leather move through stable, court, brownstone, clubhouse, workshop, and evening departure. Different people handle the same categories of objects, so continuity becomes cultural and generational rather than merely stylistic.",
      scenes: [
        {
          slot: "hero",
          eyebrow: "City portrait",
          title: "The sporting world already belongs to everyday life.",
          copy: "Two people sit on a brownstone stoop in brown, cream, and navy layers; bicycles at the edges connect the wardrobe to the city.",
          layout: "portrait",
        },
        {
          slot: "editorialC",
          eyebrow: "Brownstone",
          title: "The field vocabulary enters the city without disguise.",
          copy: "A pair stands between bicycles, a broad leather tote, and a brownstone entrance; practical movement gives the layers their shape.",
          layout: "portrait",
        },
        {
          slot: "editorialD",
          eyebrow: "Clubhouse",
          title: "Company completes the sporting landscape.",
          copy: "Four people gather in a wood-panelled seaside room with racquets, bags, and folded clothing; hospitality extends the match beyond play.",
          layout: "wide",
        },
        {
          slot: "editorialE",
          eyebrow: "Colour archive",
          title: "The Polo shirt becomes a modular wardrobe signal.",
          copy: "Hands arrange folded shirts in cream, navy, green, yellow, red, and blue, turning a familiar form into an expandable family.",
          layout: "portrait",
        },
        {
          slot: "editorialF",
          eyebrow: "Saddle care",
          title: "Leather earns character through maintenance.",
          copy: "An older man and a younger woman clean a brown saddle together; patina is treated as evidence of work, not a decorative effect.",
          layout: "wide",
        },
        {
          slot: "editorialG",
          eyebrow: "Stable / introduction",
          title: "Equestrian care opens the day at human scale.",
          copy: "A man and woman rest their hands on a chestnut horse inside a wooden stable, beginning with trust and touch rather than spectacle.",
          layout: "portrait",
        },
        {
          slot: "editorialH",
          eyebrow: "Court preparation",
          title: "The match begins before a player arrives.",
          copy: "A groundskeeper draws a line across worn grass while players wait behind him; ritual and labour give the court its authority.",
          layout: "wide",
        },
        {
          slot: "editorialI",
          eyebrow: "Stable portrait",
          title: "The horse remains a relationship, not a backdrop.",
          copy: "Two people stand at an open stall and touch a chestnut horse, keeping the equestrian code grounded in direct care.",
          layout: "portrait",
        },
        {
          slot: "editorialJ",
          eyebrow: "Stable yard",
          title: "Sporting life includes weather, mud, and work.",
          copy: "A woman in layered tan clothing walks a chestnut horse across a wet yard; the environment supplies texture without staged nostalgia.",
          layout: "wide",
        },
        {
          slot: "editorialK",
          eyebrow: "City passage",
          title: "A racquet crosses the city between generations.",
          copy: "A woman in a navy raincoat and a child carrying a wooden racquet walk beside a yellow car on a wet street.",
          layout: "portrait",
        },
        {
          slot: "editorialL",
          eyebrow: "City life",
          title: "The wardrobe gains energy from mixed company.",
          copy: "An older man and two women cross a rooftop in navy, cream, red, and blue layers while a racquet bag keeps sport present.",
          layout: "wide",
        },
        {
          slot: "editorialM",
          eyebrow: "Generations",
          title: "Preparation is quietly passed on.",
          copy: "An older person sits by the window while a younger person ties a white shoe; attention and readiness bridge the age difference.",
          layout: "portrait",
        },
        {
          slot: "editorialN",
          eyebrow: "Evening departure",
          title: "The day leaves the clubhouse together.",
          copy: "An older man and younger woman walk toward the dark carrying racquet cases while warm light and the rest of the company remain behind.",
          layout: "wide",
        },
        {
          slot: "editorialO",
          eyebrow: "Object study",
          title: "A shirt, racquet, and small case hold the world in miniature.",
          copy: "A folded navy polo, wooden racquet, and green case are arranged as used equipment, linking garment form to sporting ritual.",
          layout: "portrait",
        },
        {
          slot: "editorialP",
          eyebrow: "Blue hour",
          title: "Objects wait for the next match.",
          copy: "A folded navy sweater, wooden racquet, balls, and towel rest on a bench beside a grass court as two figures recede at dusk.",
          layout: "wide",
        },
      ],
    },
    sources: [
      {
        label: "Ralph Lauren Corporation - Polo Ralph Lauren",
        href: "https://corporate.ralphlauren.com/polo-ralph-lauren",
      },
      {
        label: "RL Magazine - Love of the Game",
        href: "https://www.ralphlauren.com/rlmag/ralph-lauren-love-of-the-game.html",
      },
      {
        label: "RL Magazine - Made to Move: the story of Polo Sport",
        href: "https://www.ralphlauren.com/rlmag/the-story-of-polo-sport.html",
      },
      {
        label: "Ralph Lauren - Official timeline",
        href: "https://www.ralphlauren.com/rl-50th-anniversary-the-timeline",
      },
      {
        label: "Ralph Lauren - Official biography",
        href: "https://corporate.ralphlauren.com/leadership-ralph-lauren-full-bio.html?redirect=true&searchTerms=RALPH+LAUREN+BIO",
      },
      {
        label: "Ralph Lauren - Team USA 2024",
        href: "https://corporate.ralphlauren.com/pr_240618_PoloRalphLaurenTeamUSA2024.html",
      },
      {
        label: "Ralph Lauren - Citizenship and sustainability",
        href: "https://corporate.ralphlauren.com/citizenship-and-sustainability",
      },
      {
        label: "RL Magazine - Grit and Glamour",
        href: "https://www.ralphlauren.com/rlmag/grit-and-glamour.html",
      },
    ],
  },
  "nike-no-second-take": {
    code: "nike",
    hero: {
      kicker: "Instinct / attempt / impact / continue",
      summary:
        "NO SECOND TAKE separates official object history from an independent photographic study of attempt, contact, recovery, and revision across running, wheelchair racing, boxing, and basketball.",
    },
    philosophy: {
      label: "Official mission",
      title: "Bring inspiration and innovation to every athlete in the world.",
      body: "Nike states that its mission is to bring inspiration and innovation to every athlete, defining an athlete inclusively: if you have a body, you are an athlete. Its work also focuses on removing barriers so more people can access sport.",
      image: {
        slot: "hero",
        eyebrow: "Attempt 01",
        title: "A decision becomes visible before the result.",
        copy: "A basketball player commits to the next move in a live court environment; the photograph holds action rather than inventing a product claim.",
        layout: "portrait",
      },
      source: { label: "Nike: Mission", href: "https://about.nike.com/en/mission/" },
    },
    values: [
      {
        number: "01",
        title: "Inspiration",
        body: "Sport begins by making possibility visible and participation feel open.",
      },
      {
        number: "02",
        title: "Innovation",
        body: "Experimentation removes limits and creates new ways to move.",
      },
      {
        number: "03",
        title: "Every athlete",
        body: "Performance language must make room for different bodies, levels, and forms of sport.",
      },
    ],
    valuesSource: { label: "Nike: Mission", href: "https://about.nike.com/en/mission/" },
    needs: {
      title: "One design loop returns to many kinds of athlete.",
      intro:
        "Official histories for the Swoosh, waffle outsole, Air, and Flyknit remain in the research ledger. The photographs form a separate contemporary sequence: athletes attempt, make contact, recover, are observed, and begin again across different sports and bodies.",
      items: [
        {
          title: "Observe contact",
          body: "A waffle-like outsole is measured as physical evidence; court and track images then show contact without presenting a laboratory result.",
        },
        {
          title: "Read the recovery",
          body: "Breath, posture, and rest are photographed with the same attention as acceleration so performance is not reduced to a victory frame.",
        },
        {
          title: "Compare across sports",
          body: "Running, wheelchair racing, boxing, and basketball reveal distinct movement and recovery conditions rather than becoming interchangeable campaign poses.",
        },
        {
          title: "Keep the mark in its lane",
          body: "The Swoosh remains a motion identifier in this project; it is never described as the source of traction, cushioning, or fit.",
        },
      ],
      images: [
        {
          slot: "editorialA",
          eyebrow: "Instinct",
          title: "The body chooses the line.",
          copy: "A turn begins before the composition can settle around it.",
          layout: "portrait",
        },
        {
          slot: "context",
          eyebrow: "Recovery",
          title: "Performance includes the moment after impact.",
          copy: "Breath and fatigue return the campaign to a real body and place.",
          layout: "portrait",
        },
      ],
      source: {
        label: "Nike: Athlete Imagined Revolution",
        href: "https://about.nike.com/en/magazine/nike-design-athlete-imagined-revolution",
      },
    },
    principles: {
      label: "Creative method",
      title: "Experiment, listen, prototype, test, iterate.",
      intro:
        "For the proposed contemporary test scenes, the visual system adapts Nike's published A.I.R. process: athlete voice challenges a material experiment, a prototype is tested in context, and feedback prompts revision. It is not presented as the historical origin of all four objects.",
      items: [
        {
          key: "01",
          title: "Name the problem",
          body: "Begin with the athlete, surface, movement, or fit condition that the object must answer.",
        },
        {
          key: "02",
          title: "Hear the athlete",
          body: "Treat athlete voice as input to the brief, not as a testimonial added after design.",
        },
        {
          key: "03",
          title: "Make the prototype",
          body: "Give the traction, cushioning, or upper idea a physical form that can be evaluated.",
        },
        {
          key: "04",
          title: "Test, revise, return",
          body: "Observe the object in context, revise it, and return it to another round of feedback.",
        },
      ],
      image: {
        slot: "tactile",
        eyebrow: "Waffle / material evidence",
        title: "A sole pattern is handled before it is celebrated.",
        copy: "The close-up isolates rubber geometry, wear, and the hand holding the prototype; other official lineages remain in the sourced research ledger.",
      },
      source: {
        label: "Nike: Athlete Imagined Revolution",
        href: "https://about.nike.com/en/magazine/nike-design-athlete-imagined-revolution",
      },
    },
    design: {
      title: "A graphic frame that moves out of the athlete's way.",
      intro:
        "Black, chalk, volt, track red, compressed type, directional cuts, contact-sheet timecodes, and hard-edged image crops create pressure without inventing data. Lineage labels always separate official history from this project's direction, surface, landing, and fit observations.",
      keywords: ["Instinctive", "Open", "Committed", "Experimental", "In motion"],
      image: {
        slot: "spatial",
        eyebrow: "Every athlete / field condition",
        title: "The field expands with the athlete.",
        copy: "A wheelchair racer accelerates across open track, making inclusion visible through real movement rather than an appended statement.",
      },
    },
    world: {
      title: "Every finish creates the next question.",
      intro:
        "The final sequence moves between outsole measurement, running, wheelchair racing, boxing recovery, track recovery, and basketball. It is an ensemble study of attempt and revision; it does not claim that one athlete, shoe, or technology appears in every frame.",
      scenes: [
        {
          slot: "editorialB",
          eyebrow: "Waffle / measurement",
          title: "Surface geometry becomes an object of inspection.",
          copy: "A caliper measures a waffle-like rubber sole so scale, depth, and wear can be discussed without inventing performance data.",
          layout: "wide",
        },
        {
          slot: "editorialC",
          eyebrow: "Basketball / loaded stance",
          title: "The body stores the next move.",
          copy: "A basketball player holds a low, loaded stance; direction and pressure are visible in posture rather than an unsupported technology claim.",
          layout: "portrait",
        },
        {
          slot: "editorialD",
          eyebrow: "Boxing / recovery",
          title: "The interval belongs to performance too.",
          copy: "A boxer sits in the ring between efforts, allowing fatigue, breath, and concentration to carry as much weight as impact.",
          layout: "wide",
        },
        {
          slot: "editorialE",
          eyebrow: "Track / recovery record",
          title: "Recovery makes the next question visible.",
          copy: "A track athlete is photographed at rest after exertion; posture and breath become observable evidence without pretending to visualise a specific material technology or recorded interview.",
          layout: "portrait",
        },
        {
          slot: "editorialF",
          eyebrow: "Continue / basketball",
          title: "The next attempt begins before certainty returns.",
          copy: "A second basketball action closes the sequence on movement, keeping the campaign's promise in the act of trying again rather than in a staged finish.",
          layout: "wide",
        },
      ],
    },
    sources: [
      { label: "Nike — Mission", href: "https://about.nike.com/en/mission/" },
      {
        label: "Nike — Rip the Script",
        href: "https://about.nike.com/en/newsroom/releases/nike-debuts-rip-the-script-a-step-inside-the-universe-of-nike-football",
      },
      {
        label: "Nike — Swoosh logo history",
        href: "https://about.nike.com/en/magazine/nike-swoosh-logo-history",
      },
      {
        label: "Nike — Moon Shoe and waffle history",
        href: "https://about.nike.com/en/magazine/nike-moon-shoe-waffle-iron-true-history",
      },
      {
        label: "Nike — Air history and Pegasus development",
        href: "https://about.nike.com/en/magazine/how-nike-created-the-pegasus-running-shoe",
      },
      {
        label: "Nike — Flyknit official history",
        href: "https://about.nike.com/en/newsroom/releases/next-generation-flyknit-footwear-official-images",
      },
      {
        label: "Nike — Athlete Imagined Revolution",
        href: "https://about.nike.com/en/magazine/nike-design-athlete-imagined-revolution",
      },
    ],
  },
} as const satisfies Record<string, BrandPavilionProfile>;
