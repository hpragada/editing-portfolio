export interface Project {
  id: string;
  title: string;
  category: 'Reels & Shorts' | 'Montages' | 'Creative Edits';
  description: string;
  driveUrl: string;
  driveFileId: string;
  embedUrl: string;
  thumbnail: string;
  duration?: string;
  aspectRatio: '9:16' | '16:9' | '4:5';
  tools: string[];
  techniques: string[];
  featured?: boolean;
  notes?: string;
  isReel?: boolean;
  audioTrack?: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  idealFor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  type: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  whatsappNumber: string; // for direct WhatsApp chat
  availability: string;
  aboutBio: string;
  languages: string[];
  strengths: string[];
  tools: {
    name: string;
    level: string;
    category: 'Video Editing' | 'Creative & Finishing';
  }[];
  specialties: string[];
  education: EducationItem[];
  socialLinks: {
    platform: string;
    url: string;
    isConfigured: boolean;
  }[];
}

export const PROFILE_DATA: ProfileData = {
  name: "Pragada Harika Sravani",
  title: "Video Editor & Visual Storyteller",
  tagline: "Every frame tells a story.",
  location: "Jeedimetla, Hyderabad, Telangana – 500055",
  email: "harikasravanip@gmail.com",
  phone: "8340850805",
  whatsappNumber: "918340850805",
  availability: "Available for Freelance Projects & Internships",
  aboutBio: "Aspiring and passionate video editor skilled in creating engaging visual stories through reels, shorts, and montage edits. With a foundation in CapCut, VN, DaVinci Resolve, Adobe Premiere Pro, and basic After Effects, I bring creativity and technical precision to the post-production process. I am currently pursuing B.Tech in CSE at Bhoj Reddy Engineering College for Women and actively seeking opportunities to grow in the visual content industry.",
  languages: ["English", "Telugu"],
  strengths: [
    "Strong attention to detail in rhythm, pacing & cuts",
    "Fast learner, quick to adapt to feedback & revisions",
    "Deep interest in filmmaking and short-form content trends",
    "Available for remote or in-office freelance & internship roles"
  ],
  tools: [
    { name: "Adobe Premiere Pro", level: "Multi-track & Sequencing", category: "Video Editing" },
    { name: "DaVinci Resolve", level: "Color Grading & Editorial", category: "Video Editing" },
    { name: "CapCut", level: "Speed Ramping & Viral Edits", category: "Video Editing" },
    { name: "VN Video Editor", level: "Mobile & Quick Turnaround", category: "Video Editing" },
    { name: "Adobe After Effects", level: "Basics & Motion Graphics", category: "Creative & Finishing" },
    { name: "Adobe Photoshop", level: "Thumbnails & Asset Design", category: "Creative & Finishing" },
    { name: "Adobe Lightroom", level: "Color Balance & Stills Polish", category: "Creative & Finishing" }
  ],
  specialties: [
    "Instagram Reels and YouTube Shorts",
    "Music Synchronization & Beat Snapping",
    "Subtitles, Dynamic Captions & Lower Thirds",
    "Smooth Cinematic Transitions & Pacing",
    "Short-Form Visual Storytelling",
    "Basic Motion Graphics & Visual Polish"
  ],
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Bhoj Reddy Engineering College for Women",
      period: "2024 – 2026",
      score: "CGPA: 7.8",
      type: "Undergraduate Degree"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College",
      period: "2020 – 2022",
      score: "Percentage: 94%",
      type: "Senior Secondary"
    },
    {
      degree: "Secondary Education (SSC)",
      institution: "TVR Model High School",
      period: "2020",
      score: "GPA: 10 / 10",
      type: "High School"
    }
  ],
  socialLinks: [
    { platform: "Email", url: "mailto:harikasravanip@gmail.com", isConfigured: true },
    { platform: "WhatsApp", url: "https://wa.me/918340850805?text=Hi%20Harika,%20I%20saw%20your%20video%20editing%20portfolio!", isConfigured: true },
    { platform: "Phone", url: "tel:8340850805", isConfigured: true }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "reel-jijnasa",
    title: "Mahadev",
    category: "Reels & Shorts",
    description: "High-voltage kinetic typography promo edit for Bhoj Reddy Engineering College for Women's national event. Synchronizes motion text to Indian acoustic transients, bass drops, and rapid cut pacing.",
    driveUrl: "https://drive.google.com/file/d/1wlBR5kIY49YhjvhHQA_6Xyc23reMlaBt/view?usp=sharing",
    driveFileId: "1wlBR5kIY49YhjvhHQA_6Xyc23reMlaBt",
    embedUrl: "https://drive.google.com/file/d/1wlBR5kIY49YhjvhHQA_6Xyc23reMlaBt/preview",
    thumbnail: "/src/assets/images/reels/reel_jijnasa_desk.jpg",
    duration: "0:16",
    aspectRatio: "9:16",
    tools: ["CapCut", "VN"],
    techniques: ["Kinetic Typography", "Bass Drop Beat Sync", "Chalkboard Wipe", "Motion Text"],
    featured: true,
    isReel: true,
    audioTrack: "Rangeelo Maro Remix (Beat Sync)",
    notes: "From original portfolio PDF (Item 3). Frame extracted from actual video file via FFmpeg."
  },
  {
    id: "reel-coastal",
    title: "Coastal Horizon — Cinematic Beach Melody Reel",
    category: "Reels & Shorts",
    description: "Atmospheric slow-motion beach sequence set to Telugu melody song. Features smooth match cuts, waves crashing on coastal rocks, wind-blown motion, and color grading tuned for dreamy shoreline lighting.",
    driveUrl: "https://drive.google.com/file/d/1wXY4n1m_v9ivsRqDKC3OVwsQdFK87zEN/view?usp=drivesdk",
    driveFileId: "1wXY4n1m_v9ivsRqDKC3OVwsQdFK87zEN",
    embedUrl: "https://drive.google.com/file/d/1wXY4n1m_v9ivsRqDKC3OVwsQdFK87zEN/preview",
    thumbnail: "/src/assets/images/reels/reel_beach_rocks.jpg",
    duration: "0:35",
    aspectRatio: "9:16",
    tools: ["CapCut", "VN"],
    techniques: ["Slow-Motion Ramping", "Match Cuts", "Coastal Color Grade", "Atmospheric Rhythm"],
    featured: true,
    isReel: true,
    audioTrack: "Telugu Coastal Melody",
    notes: "From original portfolio PDF (Item 4). Frame extracted from actual video file via FFmpeg."
  },
  {
    id: "reel-csea-girls",
    title: "Introducing Our Girls — BRECW CSEA Association Reel",
    category: "Reels & Shorts",
    description: "High-energy comic book style introduction reel for the Bhoj Reddy Engineering College for Women Computer Science Association (CSEA). Features 3D text animations, fire VFX, and synchronized beat drops.",
    
driveUrl: "https://drive.google.com/file/d/1xWTaMGJhADiYAVC3s1_nzCL4VOqAMFqp/view?usp=drive_link",
driveFileId: "1xWTaMGJhADiYAVC3s1_nzCL4VOqAMFqp",
embedUrl: "https://drive.google.com/file/d/1xWTaMGJhADiYAVC3s1_nzCL4VOqAMFqp/preview",

    thumbnail: "/src/assets/images/reels/banner1.png",
    duration: "0:41",
    aspectRatio: "9:16",
    tools: ["CapCut", "VN"],
    techniques: ["Comic Pop Text", "Fire Effects Animation", "Clap & Pull Wipes", "Photo Cutouts"],
    featured: true,
    isReel: true,
    audioTrack: "Surprise of the Century (Comic Beat Sync)",
    notes: "Uploaded reel edit. Frame extracted from actual video file via FFmpeg."
  },
  {
    id: "reel-sports-athletics",
    title: "Sivangive — Bhoj Reddy Sports Day & Athletics Reel",
    category: "Reels & Shorts",
    description: "Fast-paced, adrenaline-filled college sports montage capturing Kho-Kho matches, basketball free throws, track sprints, and victory moments with speed-ramped action cuts set to Telugu motivational anthem 'Sivangive'.",
 
driveUrl: "https://drive.google.com/file/d/1N5XzL6A9a1vk8AUbLwOFb5e7lTWuSUOA/view?usp=drive_link",
driveFileId: "1N5XzL6A9a1vk8AUbLwOFb5e7lTWuSUOA",
embedUrl: "https://drive.google.com/file/d/1N5XzL6A9a1vk8AUbLwOFb5e7lTWuSUOA/preview",

   thumbnail:  "/src/assets/images/reels/singam.png",
    duration: "0:45",
    aspectRatio: "9:16",
    tools: ["CapCut", "Premiere Pro"],
    techniques: ["Speed Ramping", "Match Action Cuts", "Dynamic Zoom", "Audio Snapping"],
    featured: true,
    isReel: true,
    audioTrack: "Sivangive Sivangive (Athletics Anthem)",
    notes: "Uploaded reel edit. Frame extracted from actual video file via FFmpeg."
  },
  {
    id: "reel-cover-song",
    title: "Acoustic Melody — Cover Song Cinematic Reel",
    category: "Reels & Shorts",
    description: "Moody music video cover edit balancing singer performance shots with visual cutaways, velocity curves, and sound-driven pacing aligned to acoustic guitar and vocals.",
    driveUrl: "https://drive.google.com/file/d/1JyFdnbCzAyXI1mYHLYoMvnB7rQMWKZ3J/view?usp=drivesdk",
    driveFileId: "1JyFdnbCzAyXI1mYHLYoMvnB7rQMWKZ3J",
    embedUrl: "https://drive.google.com/file/d/1JyFdnbCzAyXI1mYHLYoMvnB7rQMWKZ3J/preview",
    thumbnail: "/src/assets/images/reels/project_coversong_frame.jpg",
    duration: "1:10",
    aspectRatio: "9:16",
    tools: ["Premiere Pro", "CapCut"],
    techniques: ["Velocity Speed Ramping", "Vocal Lip Sync", "Depth Blur", "Fade In/Out"],
    featured: true,
    isReel: true,
    audioTrack: "Acoustic Cover Song",
    notes: "From original portfolio PDF (Item 2). Frame extracted from actual video file via FFmpeg."
  },
  {
    id: "reel-golden-hour",
    title: "Golden Hour Glow — Rooftop Melody Reel",
    category: "Reels & Shorts",
    description: "Warm portrait reel set to Tamil romantic hit 'Thangamana Payyan'. Features radiant smile timing, red rose prop framing, natural sun flare highlights, and beat-matched cuts on a Hyderabad rooftop terrace.",
 
driveUrl: "https://drive.google.com/file/d/1RhLb9rRf4YORYnjfEFJV0ou_ggVh83Cm/view?usp=sharing",
driveFileId: "1RhLb9rRf4YORYnjfEFJV0ou_ggVh83Cm",
embedUrl: "https://drive.google.com/file/d/1RhLb9rRf4YORYnjfEFJV0ou_ggVh83Cm/preview",

    thumbnail:  "/images/reels/roof.png",
    duration: "0:29",
    aspectRatio: "9:16",
    tools: ["CapCut", "Premiere Pro"],
    techniques: ["Sun Flare Accents", "Slow-Motion Hair Flips", "Beat Snapping", "Warm Grading"],
    featured: true,
    isReel: true,
    audioTrack: "Thangamana Payyan (Tamil Romantic Beat)",
    notes: "Uploaded reel edit. Authentic scene representing rooftop golden hour portrait."
  },
  {
    id: "project-college-film",
    title: "Campus Chronicle — Bhoj Reddy College Event Film",
    category: "Montages",
    description: "Comprehensive 3-minute multi-cam college documentary and event highlight montage capturing campus speeches, stage performances, student crowds, and auditorium ceremonies.",
    driveUrl: "https://drive.google.com/file/d/1N7VSfZWU4ACacaPxuPr5Q1_Pcj2YUFu5/view?usp=drivesdk",
    driveFileId: "1N7VSfZWU4ACacaPxuPr5Q1_Pcj2YUFu5",
    embedUrl: "https://drive.google.com/file/d/1N7VSfZWU4ACacaPxuPr5Q1_Pcj2YUFu5/preview",
    thumbnail: "/src/assets/images/reels/project_college_event.jpg",
    duration: "3:44",
    aspectRatio: "16:9",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    techniques: ["Multi-Camera Editing", "Speech & Ambient Audio Mixing", "Event Flow", "Color Consistency"],
    featured: true,
    isReel: false,
    notes: "From original portfolio PDF (Item 1). Frame extracted from actual video file via FFmpeg."
  },
  {
    id: "project-motion-velocity",
    title: "Rhythm & Kinetic Cut — CapCut Velocity Edit",
    category: "Creative Edits",
    description: "Creative visual treatment experimenting with keyframes, mask transitions, clap-and-pull cuts, and high-energy optical flow pacing.",
    driveUrl: "https://drive.google.com/file/d/16YdiyoqtrdYujvqO_B21JNcJ7OJkKRIT/view?usp=drivesdk",
    driveFileId: "16YdiyoqtrdYujvqO_B21JNcJ7OJkKRIT",
    embedUrl: "https://drive.google.com/file/d/16YdiyoqtrdYujvqO_B21JNcJ7OJkKRIT/preview",
    thumbnail: "/src/assets/images/reels/project_motion_rhythm.jpg",
    duration: "0:40",
    aspectRatio: "16:9",
    tools: ["CapCut", "After Effects Basics"],
    techniques: ["Vignette Switch", "Clap & Pull", "Keyframe Animation", "Optical Flow"],
    featured: false,
    isReel: false,
    notes: "From original portfolio PDF (Item 5). Frame extracted from actual video file via FFmpeg."
  }
];

export const SERVICES: Service[] = [
  {
    id: "reels-shorts",
    title: "Instagram Reels & YouTube Shorts",
    tagline: "Short-form edits engineered for retention and replay value.",
    description: "Transform raw mobile or camera footage into hook-driven 15–60 second vertical videos. Focused on holding attention through calculated pacing, punchy typography, and beat-matched cuts.",
    deliverables: [
      "Fast 3-second hook construction",
      "Dynamic auto-captions and styled subtitles",
      "Music synchronization & sound design punch-ins",
      "9:16 vertical delivery optimized for Instagram & YouTube"
    ],
    idealFor: "Content creators, personal brands, educators, and indie founders."
  },
  {
    id: "montages",
    title: "Video Montages & Narrative Flow",
    tagline: "Emotional and cinematic sequences with rhythm and visual tone.",
    description: "Crafting cohesive video montages from events, travel, lifestyle, or brand footage. Every clip is deliberately curated to tell a compelling story rather than just a random slideshow.",
    deliverables: [
      "Clip curation, trimming, and rhythm selection",
      "Color grading and unified visual mood",
      "Atmospheric music matching and sound layering",
      "16:9 or 9:16 high-definition export"
    ],
    idealFor: "Brands, event recaps, lifestyle creators, and documentary shorts."
  },
  {
    id: "captions-polish",
    title: "Captions & Social Video Polish",
    tagline: "High-legibility typography, noise cleanup, and finishing.",
    description: "Taking your existing recorded videos and elevating them to professional publishing standards through subtitle typography, clean jump cuts, audio leveling, and visual cleanup.",
    deliverables: [
      "Word-by-word synced subtitles with emphasis colors",
      "Removal of filler words, long pauses, and dead air",
      "B-roll insertion and visual callouts",
      "Multi-platform aspect ratio reformatting"
    ],
    idealFor: "Podcasters, coaches, business accounts, and speaking videos."
  },
  {
    id: "motion-graphics",
    title: "Basic Motion Graphics & Accents",
    tagline: "Subtle motion accents and kinetic text in After Effects.",
    description: "Adding tasteful motion design elements that accentuate your message without distracting the viewer, using After Effects and Premiere Pro tools.",
    deliverables: [
      "Kinetic headline and lower-third typography",
      "Simple logo reveals and animated graphic overlays",
      "Clean UI callouts, arrows, and highlight wipes",
      "Alpha channel / transparent overlay assets"
    ],
    idealFor: "Explainer videos, social ads, and video introductions."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Understand the Story",
    description: "Reviewing raw footage, identifying target audience goals, understanding reference edits, and locking in the intended emotional tone.",
    details: [
      "Review raw files and audio quality",
      "Discuss references, style guides & target platforms",
      "Agree on pacing, key highlights & call-to-action"
    ]
  },
  {
    number: "02",
    title: "Shape the Edit",
    description: "Curating the strongest takes, establishing the structural storyline, assembling the rough cut, and locking in timeline rhythm.",
    details: [
      "Selecting the most compelling clips and expressions",
      "Building the narrative spine and sequence flow",
      "Trimming dead space and tightening visual pacing"
    ]
  },
  {
    number: "03",
    title: "Add the Details",
    description: "Infusing energy through audio synchronization, subtitle design, sound effects, smooth transitions, and motion accents.",
    details: [
      "Synchronizing cuts to musical beats and accents",
      "Designing high-contrast, readable subtitles",
      "Applying tasteful transitions and motion touches"
    ]
  },
  {
    number: "04",
    title: "Refine and Deliver",
    description: "Reviewing feedback, adjusting cut precision, balancing audio levels, and exporting pristine high-bitrate video assets.",
    details: [
      "Collaborative feedback review & timely revisions",
      "Color check and audio mastering for mobile speakers",
      "Exporting master files in optimal platform codecs"
    ]
  }
];
