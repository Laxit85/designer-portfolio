// Extracted Portfolio Data for Sachin (Graphic Designer)
import sachinAvatar from "../assets/creatives/sachin_avatar.jpg";
import sachinHeroFull from "../assets/creatives/sachin_hero_full.jpg";

// Ad Creatives
import adClatTeam from "../assets/creatives/ad_1_clat_team.jpg";
import adIpmatGem from "../assets/creatives/ad_2_ipmat_hidden_gem.jpg";
import adIpmatDemo from "../assets/creatives/ad_3_ipmat_demo_class.jpg";
import adClatGamePlan from "../assets/creatives/ad_4_clat_game_plan.jpg";

// Social Media Posts
import socialAdvocateDay from "../assets/creatives/social_1_advocate_day.jpg";
import socialParliamentUpdate from "../assets/creatives/social_2_parliament_update.jpg";
import socialBootcampRegister from "../assets/creatives/social_3_bootcamp_register.jpg";
import socialRakshaBandhan from "../assets/creatives/social_4_raksha_bandhan.jpg";
import socialConfusedCap from "../assets/creatives/social_5_confused_cap.jpg";

// Product Designs - Furniture
import productKogestFull from "../assets/creatives/product_1_kogest_side_table.jpg";
import kogest1 from "../assets/creatives/furniture_kogest_render1.jpg";
import kogest2 from "../assets/creatives/furniture_kogest_render2.jpg";
import kogest3 from "../assets/creatives/furniture_kogest_render3.jpg";

import productVistaraFull from "../assets/creatives/product_2_vistara_sideboard.jpg";
import vistaraRender from "../assets/creatives/furniture_vistara_render.jpg";
import vistaraDrawing from "../assets/creatives/furniture_vistara_drawing.jpg";

import productSandbastedFull from "../assets/creatives/product_3_sandbasted_furniture.jpg";
import sandbastedRender from "../assets/creatives/furniture_sandbasted_render.jpg";
import sandbastedDrawing from "../assets/creatives/furniture_sandbasted_drawing.jpg";

// Product Designs - Outfits
import outfitWhiteKurta from "../assets/creatives/outfit_1_white_kurta.jpg";
import outfitGoldSakshi from "../assets/creatives/outfit_2_sakshi_ethnic.jpg";

// Thumbnails
import thumbVoteChori from "../assets/creatives/thumb_1_vote_chori.jpg";
import thumbVerbalMastery from "../assets/creatives/thumb_2_verbal_mastery.jpg";
import thumbAir22 from "../assets/creatives/thumb_3_air_22.jpg";
import thumbLrdiMistakes from "../assets/creatives/thumb_4_lrdi_mistakes.jpg";

// Reels & Shorts
import reelUnknownBeautiful from "../assets/creatives/reel_1_unknown_beautiful.jpg";
import reelClat5Topics from "../assets/creatives/reel_2_clat_5_topics.jpg";
import reelRajShamani from "../assets/creatives/reel_3_raj_shamani.jpg";
import reelAnswerKeyOut from "../assets/creatives/reel_4_answer_key_out.jpg";

export const designerInfo = {
  name: "Sachin",
  hindiName: "सचिन",
  title: "Graphic Designer & Visual Artist",
  tagline: "Bold Visuals For Brands That Refuse To Blend In",
  bio: "I specialize in high-impact Ad Creatives, Social Media Campaigns, Product & Furniture Modeling, High-CTR YouTube Thumbnails, and Reel Cover Visuals.",
  avatar: sachinAvatar,
  heroFull: sachinHeroFull,
  stats: {
    projects: "120+",
    clients: "45+",
    experience: "5+ Years",
    ctrBoost: "3.5x"
  }
};

export const categories = [
  { id: "all", label: "All Creatives" },
  { id: "ad_creatives", label: "Ad Creatives" },
  { id: "social_posts", label: "Social Media Posts" },
  { id: "product_designs", label: "Product Designs" },
  { id: "thumbnails", label: "Thumbnail Designs" },
  { id: "reel_covers", label: "Reel Covers & Shorts" },
];

export const allCreatives = [
  // --- AD CREATIVES ---
  {
    id: "ad-1",
    category: "ad_creatives",
    categoryLabel: "Ad Creative",
    title: "Best CLAT Team In The Town",
    client: "Law Prep Tutorial",
    image: adClatTeam,
    aspectRatio: "1/1",
    tags: ["Paid Ads", "Ad Design", "EdTech", "Social Campaign"],
    desc: "High-converting promotional ad graphic designed for Law Prep Tutorial announcing new CLAT 2027 batch with expert faculty showcase and high-impact red branding.",
  },
  {
    id: "ad-2",
    category: "ad_creatives",
    categoryLabel: "Ad Creative",
    title: "IPMAT - Hidden Gem!",
    client: "Law Prep Tutorial / LPT",
    image: adIpmatGem,
    aspectRatio: "1/1",
    tags: ["Informational Ad", "IPMAT", "Visual Hierarchy"],
    desc: "Educational ad graphic highlighting IPMAT as an underexplored path after 12th grade with structured blueprint, key stats, and strong CTA.",
  },
  {
    id: "ad-3",
    category: "ad_creatives",
    categoryLabel: "Ad Creative",
    title: "Free IPMAT 2027 Demo Class",
    client: "Law Prep Tutorial",
    image: adIpmatDemo,
    aspectRatio: "1/1",
    tags: ["Demo Class Promo", "Lead Generation", "Banner Art"],
    desc: "Vibrant purple and gold promotional creative designed to drive registrations for free IPMAT 2027 demo classes with trophy graphics.",
  },
  {
    id: "ad-4",
    category: "ad_creatives",
    categoryLabel: "Ad Creative",
    title: "CLAT 2027 Game Plan",
    client: "Law Prep Tutorial",
    image: adClatGamePlan,
    aspectRatio: "1/1",
    tags: ["Webinar Ad", "Roadmap Graphic", "Convertive Design"],
    desc: "High-contrast webinar promotional creative detailing the 'School to NLU' roadmap with webinar timing, Q&A indicators, and join trigger.",
  },

  // --- SOCIAL MEDIA POSTS ---
  {
    id: "social-1",
    category: "social_posts",
    categoryLabel: "Social Media Post",
    title: "Happy Advocate Day",
    client: "Law Prep Tutorial",
    image: socialAdvocateDay,
    aspectRatio: "1/1",
    tags: ["Special Day Post", "Typography", "Editorial Layout"],
    desc: "Commemorative editorial post honoring legal legends on Advocate Day with warm monochrome tones, elegant serif typography, and gold quotes.",
  },
  {
    id: "social-2",
    category: "social_posts",
    categoryLabel: "Social Media Post",
    title: "Big Update From Parliament",
    client: "Law Prep Authority",
    image: socialParliamentUpdate,
    aspectRatio: "1/1",
    tags: ["News Graphic", "Current Affairs", "High Impact"],
    desc: "Breaking legal news graphic overlay on parliamentary updates featuring high-contrast typography, Modi portrait, and news broadcast aesthetics.",
  },
  {
    id: "social-3",
    category: "social_posts",
    categoryLabel: "Social Media Post",
    title: "BootCamp Registration - 04 Oct",
    client: "Law Prep Tutorial",
    image: socialBootcampRegister,
    aspectRatio: "1/1",
    tags: ["Urgency Post", "Event Promo", "3D Typography"],
    desc: "Urgency-driven registration deadline post featuring vibrant 3D calendar badge '04 OCT', student cutouts, and high energy red accents.",
  },
  {
    id: "social-4",
    category: "social_posts",
    categoryLabel: "Social Media Post",
    title: "Happy Raksha Bandhan",
    client: "LPT",
    image: socialRakshaBandhan,
    aspectRatio: "1/1",
    tags: ["Festival Greetings", "Custom Illustration", "Warm Colors"],
    desc: "Festive greeting creative celebrating Raksha Bandhan with warm brother-sister illustration and customized brand messaging.",
  },
  {
    id: "social-5",
    category: "social_posts",
    categoryLabel: "Social Media Post",
    title: "Confused About CAP?",
    client: "Law Prep Tutorial",
    image: socialConfusedCap,
    aspectRatio: "16/5",
    fullWidth: true,
    tags: ["Infographic Banner", "Process Breakdown", "Data Visualization"],
    desc: "Comprehensive 5-part process infographic breakdown explaining Common Admission Process (CAP 1, CAP 2, CAP 3) step-by-step.",
  },

  // --- PRODUCT DESIGNS ---
  {
    id: "product-1",
    category: "product_designs",
    categoryLabel: "Product Design",
    title: "Kogest Side Table",
    subCategory: "Furniture Design",
    client: "Bhavya Living / Kogest",
    image: productKogestFull,
    gallery: [kogest1, kogest2, kogest3],
    aspectRatio: "16/9",
    tags: ["Industrial Design", "Furniture Renders", "3D Modeling"],
    desc: "Modern minimalist side table featuring a warm wooden top disk resting on a conical fluted white base. Rendered across studio setting and living room interior context.",
  },
  {
    id: "product-2",
    category: "product_designs",
    categoryLabel: "Product Design",
    title: "Vistara Laser-Carved Sideboard",
    subCategory: "Furniture Design",
    client: "Bhavya Living",
    image: productVistaraFull,
    gallery: [vistaraRender, vistaraDrawing],
    aspectRatio: "16/9",
    tags: ["Cabinetry", "Laser Cut Patterns", "CAD Technical Blueprint"],
    desc: "Luxury wooden sideboard boasting intricate circular laser-carved mandala doors paired with full orthographic CAD elevation & plan drawings.",
  },
  {
    id: "product-3",
    category: "product_designs",
    categoryLabel: "Product Design",
    title: "Sandbasted Heritage Settee & Chair",
    subCategory: "Furniture Design",
    client: "Bhavya Living",
    image: productSandbastedFull,
    gallery: [sandbastedRender, sandbastedDrawing],
    aspectRatio: "16/9",
    tags: ["Traditional Craftsmanship", "Heritage Woodwork", "Technical Drawing"],
    desc: "Heritage Indian carved wood settee and matching accent chair set accompanied by full technical wireframe schematics and real wood material renders.",
  },
  {
    id: "product-4",
    category: "product_designs",
    categoryLabel: "Product Design",
    title: "Ethnic White Embroidered Kurta",
    subCategory: "Outfit Design",
    client: "Fashion Editorial",
    image: outfitWhiteKurta,
    aspectRatio: "1/2",
    tags: ["Apparel Styling", "Editorial Fashion", "Textile Details"],
    desc: "High-end women's ethnic embroidered attire showcase on mannequin with delicate chikankari embroidery details and warm background lighting.",
  },
  {
    id: "product-5",
    category: "product_designs",
    categoryLabel: "Product Design",
    title: "Sakshi - Taste of Ethnicity",
    subCategory: "Outfit Design",
    client: "Sakshi Ethnic",
    image: outfitGoldSakshi,
    aspectRatio: "1/2",
    tags: ["Luxury Ethnic Wear", "Brand Identity", "Studio Lighting"],
    desc: "Exquisite gold regal ethnic suit design presented with royal seal crest branding 'SAKSHI - Taste of Ethnicity'.",
  },

  // --- THUMBNAIL DESIGNS ---
  {
    id: "thumb-1",
    category: "thumbnails",
    categoryLabel: "Thumbnail Design",
    title: "Kya Hai Vote Chori?",
    client: "YouTube Creator / Media Channel",
    image: thumbVoteChori,
    aspectRatio: "16/9",
    tags: ["YouTube Thumbnail", "High CTR", "Political News"],
    desc: "High-CTR political viral thumbnail design featuring high contrast 'KYA HAI VOTE CHORI?' typography, Rahul Gandhi & Modi cutouts, and 40,009 highlighted stats.",
  },
  {
    id: "thumb-2",
    category: "thumbnails",
    categoryLabel: "Thumbnail Design",
    title: "IPMAT Verbal Mastery #22",
    client: "Law Prep Tutorial",
    image: thumbVerbalMastery,
    aspectRatio: "16/9",
    tags: ["EdTech Thumbnail", "Course Series", "Vector Art"],
    desc: "Clean educational thumbnail layout for course lecture series featuring Grammar, Synonyms, RC, and Idioms floating icons.",
  },
  {
    id: "thumb-3",
    category: "thumbnails",
    categoryLabel: "Thumbnail Design",
    title: "IPM Indore 2025 All India Rank 22",
    client: "Law Prep Tutorial",
    image: thumbAir22,
    aspectRatio: "16/9",
    tags: ["Topper Announcement", "Ranker Graphic", "Gold Badging"],
    desc: "Celebratory topper announcement thumbnail featuring student photo (Anshi Arora), bold gold rank number 22, and LPT branding.",
  },
  {
    id: "thumb-4",
    category: "thumbnails",
    categoryLabel: "Thumbnail Design",
    title: "Most Common LRDI Mistakes",
    client: "Law Prep Tutorial",
    image: thumbLrdiMistakes,
    aspectRatio: "16/9",
    tags: ["Mistake Analysis", "Comparison Layout", "High CTR"],
    desc: "High-curiosity YouTube thumbnail with split Red Cross vs Green Checkmark comparison boxes and expressive educator photos.",
  },

  // --- REEL COVERS & SHORTS ---
  {
    id: "reel-1",
    category: "reel_covers",
    categoryLabel: "Reel Cover",
    title: "Unknown Yet Beautiful",
    client: "Law Prep Tutorial / Shorts",
    image: reelUnknownBeautiful,
    aspectRatio: "9/16",
    tags: ["Instagram Reel", "Vertical Cover", "Cinematic Mood"],
    desc: "Dramatic 9:16 vertical reel thumbnail with vintage monochrome portrait lighting and bold stacked typography.",
  },
  {
    id: "reel-2",
    category: "reel_covers",
    categoryLabel: "Reel Cover",
    title: "CLAT 2026 - 5 Important Topics",
    client: "Law Prep Tutorial",
    image: reelClat5Topics,
    aspectRatio: "9/16",
    tags: ["Shorts Thumbnail", "Exam Tips", "3D Callouts"],
    desc: "High-impact educational reel cover with oversized 3D number '5' and crisp educator cutout.",
  },
  {
    id: "reel-3",
    category: "reel_covers",
    categoryLabel: "Reel Cover",
    title: "Rajshamani vs Deepfakes",
    client: "Podcast Shorts",
    image: reelRajShamani,
    aspectRatio: "9/16",
    tags: ["Podcast Cover", "Dark Theme", "Microphone Portrait"],
    desc: "Dramatic podcast reel cover featuring Raj Shamani vs Deepfakes discussion with studio microphone and high contrast red text.",
  },
  {
    id: "reel-4",
    category: "reel_covers",
    categoryLabel: "Reel Cover",
    title: "CLAT 2026 Provisional Answer Key Out!",
    client: "Law Prep Tutorial",
    image: reelAnswerKeyOut,
    aspectRatio: "9/16",
    tags: ["Urgent Alert", "Reel Cover", "High CTR"],
    desc: "Urgent news announcement vertical reel cover featuring high-visibility yellow & red headline badges and exam paper graphic.",
  },
];
