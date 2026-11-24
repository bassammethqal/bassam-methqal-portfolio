export interface ProjectItem {
  id: string;
  slug: string;
  title: {
    ar: string;
    en: string;
  };
  summary: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  category: "web" | "ai" | "design";
  categoryLabel: {
    ar: string;
    en: string;
  };
  technologies: string[];
  status: "in-progress" | "academic" | "completed";
  statusLabel: {
    ar: string;
    en: string;
  };
  badge: {
    ar: string;
    en: string;
  };
  githubUrl?: string; // تترك فارغة إذا لم يوجد رابط حقيقي
  liveUrl?: string;   // تترك فارغة إذا لم يوجد رابط حقيقي
  liveLinks?: {
    label: {
      ar: string;
      en: string;
    };
    url: string;
    role?: "user" | "owner";
  }[];
  accentColor?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  handle?: string;
  label: {
    ar: string;
    en: string;
  };
  icon: string;
  active: boolean; // يتم عرض الرابط فقط إذا كان active = true
}

export interface PortfolioConfig {
  profile: {
    name: {
      ar: string;
      en: string;
    };
    role: {
      ar: string;
      en: string;
    };
    shortRole: {
      ar: string;
      en: string;
    };
    academic: {
      major: {
        ar: string;
        en: string;
      };
      level: {
        ar: string;
        en: string;
      };
      qualification: {
        ar: string;
        en: string;
      };
      university?: {
        ar: string;
        en: string;
      };
    };
    email?: string;
    whatsapp?: string;
    phone?: string;
    location: {
      ar: string;
      en: string;
    };
    avatarPlaceholder: string;
    image: string;
    social: SocialLink[];
  };
  projects: ProjectItem[];
}

/**
 * ملف بيانات الموقع الشخصي (Portfolio Configuration)
 * ----------------------------------------------------
 * يحتوي على البيانات الواقعية للمطور والطالب بسام مثقال.
 * لا يحتوي على أي ادعاءات لخبرات غير موجودة أو روابط وهمية.
 */
export const portfolioData: PortfolioConfig = {
  profile: {
    name: {
      ar: "بسام مثقال",
      en: "Bassam Methqal",
    },
    role: {
      ar: "طالب نظم معلومات حاسوبية بجامعة إقليم سبأ، مهتم بتطوير الويب والذكاء الاصطناعي وبناء الحلول الرقمية",
      en: "Computer Information Systems student at Saba Region University, passionate about web development, AI, and building digital solutions",
    },
    shortRole: {
      ar: "طالب نظم معلومات حاسوبية (CIS)",
      en: "CIS Student & Web Enthusiast",
    },
    academic: {
      major: {
        ar: "نظم المعلومات الحاسوبية (Computer Information Systems - CIS)",
        en: "Computer Information Systems (CIS)",
      },
      level: {
        ar: "المستوى الثالث",
        en: "Third Year",
      },
      qualification: {
        ar: "طالب جامعي (مرحلة البكالوريوس)",
        en: "Undergraduate Student",
      },
      university: {
        ar: "جامعة إقليم سبأ",
        en: "Saba Region University",
      },
    },
    email: "bassammethqal7734@gmail.com",
    whatsapp: "+967 773461637",
    phone: "+967 773461637",
    location: {
      ar: "اليمن — مأرب (15°26'N 45°19'E)",
      en: "Marib, Yemen (15°26'N 45°19'E)",
    },
    avatarPlaceholder: "BM",
    image: "/images/bassam-profile.jpg",
    social: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/bassam.methqal/",
        handle: "@bassam.methqal",
        label: { ar: "إنستغرام", en: "Instagram" },
        icon: "instagram",
        active: true,
      },
      {
        name: "Email",
        url: "mailto:bassammethqal7734@gmail.com",
        handle: "bassammethqal7734@gmail.com",
        label: { ar: "البريد الإلكتروني", en: "Email" },
        icon: "mail",
        active: true,
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/967773461637",
        handle: "+967 773461637",
        label: { ar: "واتساب", en: "WhatsApp" },
        icon: "whatsapp",
        active: true,
      },
      {
        name: "GitHub",
        url: "https://github.com/bassammethqal",
        handle: "@bassammethqal",
        label: { ar: "جيتهب", en: "GitHub" },
        icon: "github",
        active: true,
      },
      {
        name: "LinkedIn",
        url: "",
        label: { ar: "لينكد إن", en: "LinkedIn" },
        icon: "linkedin",
        active: false,
      },
      {
        name: "X",
        url: "",
        label: { ar: "منصة إكس", en: "X" },
        icon: "twitter",
        active: false,
      },
    ],
  },
  projects: [
    {
      id: "studyflow",
      slug: "studyflow",
      title: {
        ar: "ستادي فلو — مشروع الطالب (StudyFlow)",
        en: "StudyFlow — Student Academic Management",
      },
      summary: {
        ar: "منصة ويب متكاملة لتنظيم حياة الطالب الأكاديمية، إدارة المقررات والمهام، وجدولة المذاكرة وتتبع المعدل.",
        en: "Full-stack student platform to organize academic courses, manage tasks, track study schedules, and calculate GPA.",
      },
      description: {
        ar: "مشروع تطبيقي متكامل (Full-Stack) بُني خصيصاً لمساعدة طلاب الجامعات على تنظيم مسارهم الأكاديمي، وإدارة المهام والواجبات، وتتبع نسبة الإنجاز والتقدم الدراسي، مع جداول ذكية ولوحة تحكم تفاعلية.",
        en: "A comprehensive full-stack student management application designed to organize coursework, track task completion, plan revision schedules, and visualize academic performance with dedicated student dashboards.",
      },
      category: "web",
      categoryLabel: {
        ar: "تطبيقات الويب والتعليم",
        en: "Web & EdTech",
      },
      technologies: ["React", "Vite", "Node.js", "Express", "Neon PostgreSQL", "Tailwind CSS"],
      status: "completed",
      statusLabel: {
        ar: "مكتمل ومتاح",
        en: "Active & Deployed",
      },
      badge: {
        ar: "مشروع الطالب // StudyFlow v4.1",
        en: "STUDENT_PROJECT // ACTIVE",
      },
      githubUrl: "https://github.com/bassammethqal/StudyFlow",
      liveUrl: "https://study-flow-mu-pearl.vercel.app",
      liveLinks: [
        {
          label: { ar: "المعاينة المباشرة", en: "Live Demo" },
          url: "https://study-flow-mu-pearl.vercel.app",
          role: "user",
        },
      ],
      accentColor: "#2563EB",
    },
    {
      id: "malaebi",
      slug: "malaebi",
      title: {
        ar: "ملاعبي — مشروع حجز الملاعب (MALAEBI)",
        en: "MALAEBI — Stadium & Pitch Booking",
      },
      summary: {
        ar: "منظومة سحابية لحجز الملاعب الرياضية بالوقت الفعلي مع تطبيق لاعب PWA مكوّن من 17 شاشة.",
        en: "Real-time sports stadium booking system featuring a comprehensive 17-screen Player PWA.",
      },
      description: {
        ar: "حل رقمي شامل لحجز وإدارة الملاعب الرياضية، يشمل تطبيق لاعب PWA بـ 17 شاشة وتيبوغرافي عربي مخصص (خط ثمانية)، مع واجهة خلفية مبنية بـ NestJS، ومصادقة بالهاتف OTP، وقاعدة بيانات Supabase PostgreSQL لإدارة الحجوزات والتنافسية بدقة فائقة.",
        en: "End-to-end sports pitch reservation solution featuring a 17-screen responsive Player PWA, NestJS business logic layer, OTP authentication, and Supabase PostgreSQL backend managing real-time slot bookings and concurrency.",
      },
      category: "web",
      categoryLabel: {
        ar: "تطبيقات الويب و PWA",
        en: "Web & PWA Systems",
      },
      technologies: ["Player PWA", "NestJS", "Supabase", "PostgreSQL", "Docker", "Tailwind CSS"],
      status: "completed",
      statusLabel: {
        ar: "مكتمل ومتاح",
        en: "Active PWA",
      },
      badge: {
        ar: "مشروع حجز ملاعب // MALAEBI",
        en: "PITCH_BOOKING // ACTIVE",
      },
      githubUrl: "https://github.com/bassammethqal/MALAEBI-",
      liveUrl: "https://malaebi-player-psi.vercel.app",
      liveLinks: [
        {
          label: { ar: "تطبيق اللاعب", en: "Player App" },
          url: "https://malaebi-player-psi.vercel.app",
          role: "user",
        },
        {
          label: { ar: "لوحة المالك", en: "Owner Dashboard" },
          url: "https://malaebi-venue-dashboard.vercel.app/",
          role: "owner",
        },
      ],
      accentColor: "#2563EB",
    },
    {
      id: "mareb-events",
      slug: "mareb-events",
      title: {
        ar: "مناسبات مأرب — مشروع حجز الصالات (Mareb Events)",
        en: "Mareb Events — Venue & Hall Booking",
      },
      summary: {
        ar: "منصة سحابية متخصصة لحجز وتأجير صالات وقاعات الأفراح والمناسبات والمنتجعات في مأرب.",
        en: "Full-stack cloud platform for discovering and booking wedding halls, venues, and resorts in Marib.",
      },
      description: {
        ar: "منصة ويب سحابية تتيح للمستخدمين استكشاف قاعات المناسبات وصالات الاحتفالات والمنتجعات والاستراحات في مأرب، ومتابعة التوفر بالوقت الفعلي، مع تمكين أصحاب القاعات من إدارة حجوزاتهم عبر لوحة تحكم سحابية مبنية بـ Next.js و Supabase.",
        en: "A modern cloud booking platform enabling clients to discover, compare, and reserve wedding halls and event venues across Marib, while providing venue owners an admin dashboard to oversee reservations and schedules via Next.js and Supabase.",
      },
      category: "web",
      categoryLabel: {
        ar: "تطبيقات الويب السحابية",
        en: "Cloud Web Platforms",
      },
      technologies: ["Next.js 15", "TypeScript", "Supabase", "Drizzle ORM", "PostgreSQL", "Tailwind CSS"],
      status: "completed",
      statusLabel: {
        ar: "مكتمل ومتاح",
        en: "Active Platform",
      },
      badge: {
        ar: "مشروع حجز صالات // Mareb Events",
        en: "HALL_BOOKING // ACTIVE",
      },
      githubUrl: "https://github.com/bassammethqal/MarebEvents",
      liveUrl: "https://marebevents.vercel.app/",
      liveLinks: [
        {
          label: { ar: "واجهة الزبون", en: "Customer Portal" },
          url: "https://marebevents.vercel.app/",
          role: "user",
        },
        {
          label: { ar: "دخول المالك", en: "Owner Login" },
          url: "https://marebevents.vercel.app/owner/login",
          role: "owner",
        },
      ],
      accentColor: "#2563EB",
    },
  ],
};
