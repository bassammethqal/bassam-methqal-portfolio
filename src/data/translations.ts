export type Language = "ar" | "en";

export interface TranslationDictionary {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    home: string;
    about: string;
    interests: string;
    skills: string;
    projects: string;
    journey: string;
    education: string;
    contact: string;
    cta: string;
    languageToggle: string;
    menuToggle: string;
  };
  hero: {
    badge: string;
    greeting: string;
    name: string;
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    quickStats: {
      focus: { label: string; value: string };
      approach: { label: string; value: string };
      availability: { label: string; value: string };
    };
  };
  about: {
    sectionNumber: string;
    title: string;
    subtitle: string;
    lead: string;
    paragraph1: string;
    paragraph2: string;
    pillarsTitle: string;
    pillars: Array<{
      title: string;
      description: string;
    }>;
  };
  interests: {
    sectionNumber: string;
    title: string;
    subtitle: string;
    lead: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      topics: string[];
    }>;
  };
  skills: {
    sectionNumber: string;
    title: string;
    subtitle: string;
    lead: string;
    categories: Array<{
      title: string;
      description: string;
      skills: Array<{ name: string; status?: string }>;
    }>;
  };
  projects: {
    sectionNumber: string;
    title: string;
    subtitle: string;
    lead: string;
    filterAll: string;
    filters: {
      all: string;
      web: string;
      ai: string;
      design: string;
    };
    sourceCode: string;
    liveDemo: string;
    inProgressBadge: string;
    notice: string;
  };
  journey: {
    sectionNumber: string;
    title: string;
    subtitle: string;
    lead: string;
    milestones: Array<{
      period: string;
      title: string;
      role: string;
      description: string;
      highlights: string[];
    }>;
    notice: string;
  };
  education: {
    sectionNumber: string;
    title: string;
    subtitle: string;
    lead: string;
    degreeTitle: string;
    universityTitle: string;
    levelTitle: string;
    qualificationTitle: string;
    description: string;
    focusAreasTitle: string;
    focusAreas: string[];
    certificationsTitle: string;
    certificationsLead: string;
    selfStudyPoints: string[];
    notice: string;
  };
  contact: {
    sectionNumber: string;
    title: string;
    subtitle: string;
    lead: string;
    directTitle: string;
    directDesc: string;
    socialTitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
      successMessage: string;
      errorMessage: string;
    };
    info: {
      locationLabel: string;
      locationValue: string;
      availabilityLabel: string;
      availabilityValue: string;
      emailLabel: string;
      whatsappLabel: string;
      whatsappNotice: string;
      copied: string;
      copy: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
    backToTop: string;
    craftedWith: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  ar: {
    meta: {
      title: "بسام مثقال | طالب نظم معلومات حاسوبية — Portfolio",
      description:
        "الموقع الشخصي لبسام مثقال - طالب نظم معلومات حاسوبية (CIS)، مهتم بتطوير الويب والذكاء الاصطناعي وبناء الحلول الرقمية.",
      keywords:
        "بسام مثقال, نظم معلومات حاسوبية, CIS, تطوير الويب, ستادي فلو, StudyFlow, ملاعبي, MALAEBI, مناسبات مأرب, Mareb Events, GitHub bassammethqal",
    },
    nav: {
      home: "الرئيسية",
      about: "من أنا",
      interests: "مجالات الاهتمام",
      skills: "المهارات",
      projects: "المشاريع",
      journey: "رحلتي التقنية",
      education: "التعليم",
      contact: "التواصل",
      cta: "تواصل معي",
      languageToggle: "EN",
      menuToggle: "القائمة",
    },
    hero: {
      badge: "طالب نظم معلومات حاسوبية (CIS)",
      greeting: "مرحباً، أنا",
      name: "بسام مثقال",
      title: "طالب نظم معلومات حاسوبية، مهتم بتطوير الويب والذكاء الاصطناعي وبناء الحلول الرقمية.",
      description:
        "أدرس في المستوى الثالث بتخصص نظم المعلومات الحاسوبية (CIS). يجمع مساري بين الفهم الأكاديمي لنظم المعلومات وقواعد البيانات، والتطبيق العملي من خلال برمجة وتطوير تطبيقات الويب واستكشاف إمكانات الذكاء الاصطناعي والتصميم الرقمي.",
      ctaPrimary: "استكشف المشاريع",
      ctaSecondary: "تواصل معي",
      quickStats: {
        focus: { label: "المسار الأكاديمي", value: "نظم المعلومات الحاسوبية (المستوى الثالث)" },
        approach: { label: "الشغف والاهتمام", value: "التعلم المستمر وبناء المشاريع التطبيقية" },
        availability: { label: "حالة التواصل الحالية", value: "متاح للتعاون التقني وتبادل الأفكار وبناء الحلول الرقمية" },
      },
    },
    about: {
      sectionNumber: "01",
      title: "من أنا",
      subtitle: "شغف بالتقنية والتعلم والتطبيق العملي",
      lead: "أنا بسام مثقال، طالب في المستوى الثالث في تخصص نظم المعلومات الحاسوبية (Computer Information Systems - CIS).",
      paragraph1:
        "ينصب اهتمامي على فهم كيفية توظيف التقنية لبناء حلول رقمية تخدم المستخدمين والطلاب. أحرص على الجمع بين التحصيل الأكاديمي المنظم في قواعد البيانات وتحليل النظم والبرمجة، وبين التعلم الذاتي المستمر لأحدث أدوات تطوير الويب والذكاء الاصطناعي.",
      paragraph2:
        "أهتم بتحويل الأفكار إلى مشاريع واقعية مفيدة، والاهتمام بتنظيم المحتوى البصري وتصميم العروض التقديمية وتجربة الاستخدام المريحة.",
      pillarsTitle: "المحاور التي تقود مساري التعليمي",
      pillars: [
        {
          title: "الأسس الأكاديمية والتحليلية",
          description: "فهم هياكل البيانات، قواعد البيانات، وتحليل النظم كقاعدة علمية صلبة لأي حل برمجي.",
        },
        {
          title: "التطبيق العملي والمشاريع",
          description: "نقل المعرفة النظرية إلى واقع تطبيقي من خلال بناء مواقع ومشاريع حقيقية تلبي احتياجات ملموسة.",
        },
        {
          title: "التعلم الذاتي ومواكبة التقنية",
          description: "استكشاف أحدث أطر تطوير الويب وأدوات الذكاء الاصطناعي التوليدي وتوظيفها لزيادة الكفاءة.",
        },
      ],
    },
    interests: {
      sectionNumber: "02",
      title: "مجالات اهتمامي",
      subtitle: "الميادين التقنية التي أكرس فيها وقتي وفضولي المعرفي",
      lead: "تتكامل هذه المسارات لتعزيز فهمي التقني ومساعدتي في بناء حلول رقمية متوازنة تجمع بين البرمجة والبيانات وتجربة المستخدم.",
      items: [
        {
          id: "web-dev",
          title: "تطوير الويب",
          description:
            "بناء وتطوير تطبيقات وواجهات الويب باستخدام التقنيات الأساسية والحديثة لبناء واجهات تفاعلية وسلسة.",
          topics: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Next.js"],
        },
        {
          id: "programming-cis",
          title: "البرمجة ونظم المعلومات",
          description:
            "دراسة الأساسيات البرمجية، قواعد البيانات، لغة SQL، وتحليل النظم لفهم تدفق البيانات وبناء برمجيات منظمة.",
          topics: ["أساسيات البرمجة", "قواعد البيانات", "SQL", "تحليل النظم", "العلاقات (ERD)"],
        },
        {
          id: "ai-applications",
          title: "الذكاء الاصطناعي",
          description:
            "استكشاف أدوات الذكاء الاصطناعي التوليدي، واجهات النماذج الذكية، وتوظيفها في تطوير المشاريع وتسريع الإنجاز.",
          topics: ["أدوات الذكاء الاصطناعي", "واجهات النماذج الذكية", "المساعدات التعليمية", "النماذج اللغوية (LLMs)"],
        },
        {
          id: "design-ux",
          title: "التصميم وتجربة المستخدم",
          description:
            "الاهتمام بتصميم الواجهات، والتصميم الرقمي، وتنظيم المحتوى البصري لتقديم عروض ومواقع مريحة وواضحة.",
          topics: ["تصميم الواجهات", "التصميم الرقمي", "العروض التقديمية", "التيبوغرافي", "النسبة الذهبية"],
        },
      ],
    },
    skills: {
      sectionNumber: "03",
      title: "المهارات والتقنيات",
      subtitle: "المهارات التي درستها وأعمل على تطبيقها وتطوير معرفتي بها",
      lead: "مجموعة من المهارات والأدوات التي اكتسبتها من خلال مساري الأكاديمي والتعلم الذاتي التطبيقي، مع توضيح مستوى الممارسة بكل شفافية.",
      categories: [
        {
          title: "البرمجة وتطوير الويب",
          description: "تقنيات أستخدمها وأعمل على تطبيقها وتطوير معرفتي بها في مشاريعي.",
          skills: [
            { name: "HTML5", status: "أستخدم" },
            { name: "CSS3", status: "أستخدم" },
            { name: "JavaScript", status: "أستخدم وأطبق" },
            { name: "Node.js", status: "أطبق وأتعلم" },
            { name: "React / Next.js", status: "أعمل على تطبيقها وتطوير معرفتي بها" },
            { name: "Tailwind CSS", status: "أستخدم في بناء الواجهات" },
            { name: "TypeScript", status: "أتعلم وأطبق" },
          ],
        },
        {
          title: "البرمجة الأكاديمية",
          description: "اللغات والمفاهيم التي درستها ضمن الخطة الأكاديمية الجامعية.",
          skills: [
            { name: "C++", status: "درست" },
            { name: "أساسيات C#", status: "درست الأساسيات" },
            { name: "Object-Oriented Programming (OOP)", status: "درست وأطبق" },
          ],
        },
        {
          title: "قواعد البيانات والشبكات",
          description: "المفاهيم والتقنيات التي درستها وأطبقها في تنظيم البيانات والاتصال.",
          skills: [
            { name: "SQL", status: "درست وأستخدم" },
            { name: "Oracle Database", status: "درست" },
            { name: "أساسيات Cisco Networking", status: "درست الأساسيات" },
            { name: "Supabase", status: "أستخدم في المشاريع" },
          ],
        },
        {
          title: "أدوات العمل والتطوير",
          description: "البيئات والأدوات التي أعتمد عليها في الإنجاز والتنظيم.",
          skills: [
            { name: "Git و GitHub", status: "أستخدم في إدارة الكود" },
            { name: "Visual Studio Code", status: "بيئة التطوير الأساسية" },
            { name: "أدوات الذكاء الاصطناعي المساعدة", status: "أستخدم في التطوير والتعلم" },
            { name: "أدوات التصميم والعروض التقديمية", status: "أستخدم في إعداد المواد البصرية" },
          ],
        },
      ],
    },
    projects: {
      sectionNumber: "04",
      title: "معرض المشاريع",
      subtitle: "مشاريع واقعية وأعمال تطبيقية أعمل على تطويرها",
      lead: "نماذج من المشاريع التي أعمل عليها لتوظيف مهاراتي في نظم المعلومات وتطوير الويب والذكاء الاصطناعي والتصميم.",
      filterAll: "الكل",
      filters: {
        all: "جميع المشاريع",
        web: "تطبيقات الويب",
        ai: "الذكاء الاصطناعي والتعليم",
        design: "التصميم الرقمي",
      },
      sourceCode: "الكود المصدري",
      liveDemo: "المعاينة المباشرة",
      inProgressBadge: "مشروع قيد التطوير",
      notice: "ملاحظة: جميع المشاريع المعروضة أعلاه حقيقية وتمثل أفكاراً وأعمالاً واقعية أعمل عليها، بدون روابط أو بيانات وهمية.",
    },
    journey: {
      sectionNumber: "05",
      title: "رحلتي التقنية",
      subtitle: "محطات التعلم والتطور وبناء المعرفة",
      lead: "مسار تصاعدي مكرس لتعلم الحوسبة، ترسيخ الأساس الأكاديمي، وبناء المشاريع العملية خطوة بخطوة.",
      milestones: [
        {
          period: "مرحلة التأسيس",
          title: "التعرف على أساسيات البرمجة ومفاهيم الحوسبة",
          role: "البدايات والشغف بالبرمجة",
          description:
            "انطلاق الرحلة من خلال التعرف على التفكير الخوارزمي، دراسة أساسيات لغة C++، وفهم المتغيرات والشروط والحلقات، وبناء المنطق البرمجي السليم لحل المشكلات البسيطة.",
          highlights: [
            "تعلم مفاهيم الحوسبة والمنطق البرمجي",
            "دراسة لغة C++ وحل التمارين البرمجية",
            "بناء التفكير المنطقي وهياكل البيانات الأولية",
          ],
        },
        {
          period: "مرحلة التوسع",
          title: "تعلم تطوير الويب وقواعد البيانات والشبكات",
          role: "توسيع المدارك والمهارات التقنية",
          description:
            "الانتقال لاستكشاف فضاء تطوير الويب من خلال تعلم HTML و CSS و JavaScript، والتعامل مع قواعد البيانات ولغة SQL، بالإضافة إلى دراسة أساسيات شبكات Cisco.",
          highlights: [
            "بناء صفحات ويب تفاعلية ومتجاوبة",
            "دراسة قواعد البيانات العلائقية والاستعلام بـ SQL",
            "الاطلاع على أساسيات الشبكات والربط التقني",
          ],
        },
        {
          period: "المرحلة الحالية",
          title: "الدراسة الجامعية في نظم المعلومات وتطبيق المعرفة في مشاريع عملية",
          role: "المستوى الثالث — تخصص CIS",
          description:
            "مواصلة الدراسة الجامعية في المستوى الثالث بتخصص نظم المعلومات الحاسوبية (CIS)، وتطبيق ما تعلمته في مشاريع حقيقية مثل ستادي فلو (StudyFlow) وملاعبي (MALAEBI) ومناسبات مأرب (Mareb Events)، مع التوسع في استكشاف تطوير الويب الحديث والأنظمة السحابية.",
          highlights: [
            "التعمق في تحليل وتصميم النظم وقواعد البيانات",
            "تطبيق تقنيات Next.js و Supabase في مشاريع حقيقية",
            "توظيف أدوات الذكاء الاصطناعي في إعداد المذكرات وحلول الويب",
          ],
        },
      ],
      notice: "هذه المحطات تمثل رحلتي التعليمية والتطبيقية الواقعية كطالب جامعي يسعى للتطور الدائم.",
    },
    education: {
      sectionNumber: "06",
      title: "التعليم والمسار الأكاديمي",
      subtitle: "التخصص الدراسي والتعلم المستمر",
      lead: "الجمع بين الانضباط الأكاديمي في نظم المعلومات والتعلم الذاتي المستمر لمواكبة متطلبات التقنية الحديثة.",
      degreeTitle: "نظم المعلومات الحاسوبية (Computer Information Systems - CIS)",
      universityTitle: "جامعة إقليم سبأ",
      levelTitle: "المستوى الثالث",
      qualificationTitle: "طالب جامعي (مرحلة البكالوريوس)",
      description:
        "دراسة أكاديمية متخصصة تركز على كيفية تسخير الحوسبة ونظم المعلومات وقواعد البيانات لخدمة الأهداف الرقمية وتحليل المشكلات وبناء الحلول المناسبة.",
      focusAreasTitle: "المحاور الأكاديمية الأساسية",
      focusAreas: [
        "تحليل وتصميم نظم المعلومات",
        "قواعد البيانات ولغة SQL",
        "البرمجة كائنية التوجه (OOP)",
        "أساسيات شبكات الحاسوب",
      ],
      certificationsTitle: "التعلم الذاتي والتطوير المستمر",
      certificationsLead:
        "الالتزام بمسار تدريبي دائم من خلال قراءة التوثيقات الرسمية، متابعة مجتمعات المطورين، وبناء المشاريع التطبيقية لتعميق الفهم العملي.",
      selfStudyPoints: [
        "تطبيق تقنيات تطوير الويب الحديثة (React, Next.js, Tailwind CSS)",
        "استكشاف نماذج وأدوات الذكاء الاصطناعي التوليدي وتوظيفها برمجياً",
        "صقل مهارات التصميم الرقمي وإعداد العروض التقديمية الأكاديمية",
      ],
      notice: "المسار الأكاديمي الفعلي بجامعة إقليم سبأ — المستوى الثالث بتخصص نظم المعلومات الحاسوبية.",
    },
    contact: {
      sectionNumber: "07",
      title: "التواصل",
      subtitle: "أرحب بالتواصل وتبادل الأفكار ومناقشة المشاريع التقنية",
      lead: "يسعدني دائماً استقبال رسائلكم للنقاش حول التقنية، تبادل الأفكار، أو الاستفسار عن المشاريع.",
      directTitle: "معلومات التواصل",
      directDesc: "يمكنك التواصل مباشرة عبر البريد الإلكتروني أو حساب واتساب أو إنستغرام أو النموذج المباشر.",
      socialTitle: "حسابات التواصل المؤكدة",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "نص الرسالة أو فكرة المشروع",
        send: "إرسال الرسالة",
        sending: "جارٍ الإرسال...",
        successMessage: "شكراً لتواصلك! تم استلام رسالتك وسأكون سعيداً بالرد عليك.",
        errorMessage: "حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقاً.",
      },
      info: {
        locationLabel: "الموقع الجغرافي",
        locationValue: "اليمن — مأرب (15°26'N 45°19'E)",
        availabilityLabel: "حالة التواصل الحالية",
        availabilityValue: "متاح للتعاون التقني وتبادل الأفكار وبناء الحلول الرقمية",
        emailLabel: "البريد الإلكتروني",
        whatsappLabel: "حساب WhatsApp",
        whatsappNotice: "معرّف واتساب للتواصل",
        copied: "تم النسخ بنجاح",
        copy: "نسخ",
      },
    },
    footer: {
      tagline: "طالب نظم معلومات حاسوبية، مهتم بالتقنية وتطوير الحلول الرقمية.",
      rights: "جميع الحقوق محفوظة",
      backToTop: "العودة للأعلى",
      craftedWith: "صُمم ونُفّذ بهوية Minimal Luxury وببيانات واقعية",
    },
  },
  en: {
    meta: {
      title: "Bassam Methqal | CIS Student Portfolio",
      description:
        "Personal portfolio of Bassam Methqal — Computer Information Systems (CIS) student passionate about web development, AI, and building digital solutions.",
      keywords:
        "Bassam Methqal, Computer Information Systems, CIS, Web Development, StudyFlow, MALAEBI, Mareb Events, GitHub bassammethqal",
    },
    nav: {
      home: "Home",
      about: "About",
      interests: "Interests",
      skills: "Skills",
      projects: "Projects",
      journey: "Journey",
      education: "Education",
      contact: "Contact",
      cta: "Contact Me",
      languageToggle: "عربي",
      menuToggle: "Menu",
    },
    hero: {
      badge: "CIS Student (Computer Information Systems)",
      greeting: "Hello, I am",
      name: "Bassam Methqal",
      title: "Computer Information Systems student, passionate about web development, AI, and building digital solutions.",
      description:
        "Third-year student majoring in Computer Information Systems (CIS). My focus combines academic foundations in information systems and databases with hands-on web development, exploring generative AI tools, and digital design.",
      ctaPrimary: "Explore Projects",
      ctaSecondary: "Get in Touch",
      quickStats: {
        focus: { label: "Academic Track", value: "Computer Information Systems (3rd Year)" },
        approach: { label: "Focus & Philosophy", value: "Continuous Learning & Practical Building" },
        availability: { label: "Current Availability", value: "Available for technical collaboration, exchanging ideas, and building digital solutions" },
      },
    },
    about: {
      sectionNumber: "01",
      title: "About Me",
      subtitle: "Curiosity, academic grounding, and continuous hands-on learning",
      lead: "I am Bassam Methqal, a third-year student majoring in Computer Information Systems (CIS).",
      paragraph1:
        "My enthusiasm centers on understanding how technology and information systems can be leveraged to build meaningful digital solutions for students and users. I value connecting academic coursework in database systems, systems analysis, and programming with self-driven exploration of modern web frameworks and AI tools.",
      paragraph2:
        "I enjoy turning ideas into tangible projects, organizing visual content effectively, and crafting neat academic presentations alongside pleasant user experiences.",
      pillarsTitle: "Core Pillars Guiding My Path",
      pillars: [
        {
          title: "Academic & Analytical Foundation",
          description: "Understanding data structures, database design, and systems analysis as a dependable basis for software solutions.",
        },
        {
          title: "Applied Project Building",
          description: "Translating theoretical concepts into functional web platforms and utilities that address real-world needs.",
        },
        {
          title: "Continuous Self-Learning",
          description: "Actively studying modern web ecosystems and generative AI tools to enhance learning productivity and build quality.",
        },
      ],
    },
    interests: {
      sectionNumber: "02",
      title: "Areas of Interest",
      subtitle: "Technical domains where I dedicate my time and curiosity",
      lead: "These interconnected fields guide my learning journey, enabling me to build balanced digital solutions combining code, data, and user experience.",
      items: [
        {
          id: "web-dev",
          title: "Web Development",
          description:
            "Building and developing web applications and interfaces using core and modern technologies for smooth and interactive experiences.",
          topics: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Next.js"],
        },
        {
          id: "programming-cis",
          title: "Programming & Information Systems",
          description:
            "Studying programming fundamentals, database architecture, SQL, and systems analysis to understand data flow and engineer structured software.",
          topics: ["Programming Basics", "Databases", "SQL", "Systems Analysis", "ERD Modeling"],
        },
        {
          id: "ai-applications",
          title: "Artificial Intelligence",
          description:
            "Exploring generative AI tools, modern model APIs, and integrating intelligent capabilities into projects to accelerate learning and delivery.",
          topics: ["AI Tools", "Model APIs", "Educational Assistants", "LLMs"],
        },
        {
          id: "design-ux",
          title: "Design & User Experience",
          description:
            "Focusing on UI design, digital craft, and visual content organization to deliver comfortable, polished presentations and websites.",
          topics: ["UI Design", "Digital Design", "Slide Presentations", "Typography", "Golden Ratio"],
        },
      ],
    },
    skills: {
      sectionNumber: "03",
      title: "Skills & Technologies",
      subtitle: "Technologies I have studied, actively use, and continue to develop",
      lead: "A realistic overview of tools and technologies acquired through academic studies and self-directed practice, presented with complete transparency.",
      categories: [
        {
          title: "Programming & Web Development",
          description: "Technologies I actively use, apply, and continue to learn in my projects.",
          skills: [
            { name: "HTML5", status: "I use" },
            { name: "CSS3", status: "I use" },
            { name: "JavaScript", status: "I use & apply" },
            { name: "Node.js", status: "I apply & learn" },
            { name: "React / Next.js", status: "Actively applying & learning" },
            { name: "Tailwind CSS", status: "I use for styling" },
            { name: "TypeScript", status: "Learning & applying" },
          ],
        },
        {
          title: "Academic Programming",
          description: "Languages and foundational concepts studied in my university curriculum.",
          skills: [
            { name: "C++", status: "Studied" },
            { name: "C# Basics", status: "Studied basics" },
            { name: "Object-Oriented Programming (OOP)", status: "Studied & apply" },
          ],
        },
        {
          title: "Databases & Networking",
          description: "Concepts and technologies studied and applied for data management and networking.",
          skills: [
            { name: "SQL", status: "Studied & use" },
            { name: "Oracle Database", status: "Studied" },
            { name: "Cisco Networking Basics", status: "Studied basics" },
            { name: "Supabase", status: "I use in projects" },
          ],
        },
        {
          title: "Tools & Workflow",
          description: "Environments and tools I rely on for daily development and organization.",
          skills: [
            { name: "Git & GitHub", status: "I use for versioning" },
            { name: "Visual Studio Code", status: "Primary code editor" },
            { name: "AI Developer Utilities", status: "I use for productivity" },
            { name: "Design & Presentation Tools", status: "I use for visual assets" },
          ],
        },
      ],
    },
    projects: {
      sectionNumber: "04",
      title: "Projects Showcase",
      subtitle: "Authentic works and practical projects currently in development",
      lead: "A showcase of projects where I put my CIS, web development, AI, and design skills into concrete action.",
      filterAll: "All",
      filters: {
        all: "All Projects",
        web: "Web Applications",
        ai: "AI & EdTech",
        design: "Digital Design",
      },
      sourceCode: "Source Code",
      liveDemo: "Live Demo",
      inProgressBadge: "Project in Development",
      notice: "Note: All projects listed above are authentic concepts and active works, with zero placeholder or fictitious links.",
    },
    journey: {
      sectionNumber: "05",
      title: "Technical Journey",
      subtitle: "Milestones of learning, practice, and continuous growth",
      lead: "A forward-moving path focused on computational foundations, academic depth, and practical project building.",
      milestones: [
        {
          period: "Foundations",
          title: "Introduction to Programming & Computing Concepts",
          role: "Early Curiosity & Foundations",
          description:
            "Started with algorithmic reasoning, studying C++ fundamentals, understanding control flows, loops, and data types, and developing logic to solve basic programming challenges.",
          highlights: [
            "Computing concepts and programming logic",
            "C++ fundamentals and algorithmic exercises",
            "Structured problem-solving mindset",
          ],
        },
        {
          period: "Expansion",
          title: "Web Development, Databases & Networking",
          role: "Broadening Skills & Knowledge",
          description:
            "Explored the web domain with HTML, CSS, and JavaScript, learned relational database principles and SQL querying, and studied introductory Cisco networking essentials.",
          highlights: [
            "Building responsive web pages and UI layouts",
            "Relational databases and SQL queries",
            "Networking fundamentals and connectivity concepts",
          ],
        },
        {
          period: "Current Phase",
          title: "CIS University Studies & Hands-on Project Building",
          role: "Third Year — CIS Major",
          description:
            "Pursuing third-year university studies in Computer Information Systems (CIS), applying academic concepts to real projects like 'StudyFlow', 'MALAEBI', and 'Mareb Events', while exploring modern web platforms and cloud systems.",
          highlights: [
            "Systems analysis and database modeling",
            "Building practical projects with Next.js and Supabase",
            "Applying AI utilities for educational and web solutions",
          ],
        },
      ],
      notice: "These milestones represent my genuine learning and building progression as a university student.",
    },
    education: {
      sectionNumber: "06",
      title: "Education & Academic Path",
      subtitle: "Academic specialization and continuous learning",
      lead: "Combining university discipline in Information Systems with continuous self-driven learning to stay aligned with modern tech standards.",
      degreeTitle: "Computer Information Systems (CIS)",
      universityTitle: "Saba Region University",
      levelTitle: "Third Year",
      qualificationTitle: "Undergraduate Student (Bachelor's Program)",
      description:
        "Specialized academic curriculum focusing on leveraging computing, information systems, and databases to analyze problems and engineer practical digital solutions.",
      focusAreasTitle: "Core Academic Pillars",
      focusAreas: [
        "Systems Analysis & Design",
        "Databases & SQL Management",
        "Object-Oriented Programming (OOP)",
        "Computer Networking Fundamentals",
      ],
      certificationsTitle: "Self-Directed Learning & Growth",
      certificationsLead:
        "A sustained habit of studying official documentation, developer communities, and building hands-on projects to deepen practical mastery.",
      selfStudyPoints: [
        "Applying modern web technologies (React, Next.js, Tailwind CSS)",
        "Exploring and integrating generative AI tools into development workflows",
        "Refining digital design and academic presentation craft",
      ],
      notice: "Authentic academic path at Saba Region University — Third Year in Computer Information Systems.",
    },
    contact: {
      sectionNumber: "07",
      title: "Contact",
      subtitle: "Open to connecting, exchanging ideas, and discussing technical projects",
      lead: "Always glad to receive messages, exchange technical ideas, or discuss project concepts.",
      directTitle: "Contact Details",
      directDesc: "Feel free to reach out directly via email, WhatsApp, Instagram, or through the message form.",
      socialTitle: "Confirmed Official Channels",
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message or Project Idea",
        send: "Send Message",
        sending: "Sending...",
        successMessage: "Thank you for reaching out! Your message has been received.",
        errorMessage: "An error occurred while sending. Please try again later.",
      },
      info: {
        locationLabel: "Location",
        locationValue: "Marib, Yemen (15°26'N 45°19'E)",
        availabilityLabel: "Current Status",
        availabilityValue: "Available for technical collaboration, exchanging ideas, and building digital solutions",
        emailLabel: "Email Address",
        whatsappLabel: "WhatsApp Account",
        whatsappNotice: "WhatsApp handle for direct inquiry",
        copied: "Copied!",
        copy: "Copy",
      },
    },
    footer: {
      tagline: "Computer Information Systems student, passionate about technology and developing digital solutions.",
      rights: "All rights reserved",
      backToTop: "Back to top",
      craftedWith: "Designed with Minimal Luxury aesthetics and authentic profile details",
    },
  },
};
