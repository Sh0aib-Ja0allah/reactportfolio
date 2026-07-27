/* Generated from the AR translation pass, then reviewed for terminology
 * consistency. Structure mirrors the component tree; every key exists in
 * both languages, and useLanguage() falls back to English if one is ever
 * missing.
 *
 * Technology, brand and company names deliberately stay in Latin script
 * inside the Arabic copy.
 */
export const translations = {
  "en": {
    "nav": {
      "about": "About",
      "experience": "Experience",
      "skills": "Skills",
      "projects": "Projects",
      "contact": "Contact",
      "cv": "CV",
      "downloadCv": "Download CV",
      "home": "Home",
      "toggleMenu": "Toggle menu"
    },
    "hero": {
      "greeting": "Hello world, I'm",
      "title": "Full Stack Developer · Mobile & Web",
      "description": "I build production apps that ship to the App Store and Google Play — React Native, ReactJS, and TypeScript on the front, ASP.NET Core and Laravel behind them.",
      "getInTouch": "Get In Touch",
      "viewWork": "View My Work",
      "statYears": "Years Experience",
      "statApps": "Production Apps",
      "statCompanies": "Companies",
      "scroll": "Scroll down"
    },
    "about": {
      "label": "About Me",
      "titleLead": "Turning ideas into",
      "titleAccent": "digital reality",
      "p1": "Full Stack Developer with a Computer Systems Engineering background, building cross-platform mobile and web applications end to end. I hold a B.Sc. in Computer Systems Engineering from the Arab American University.",
      "p2": "At MENA Talents and aba agency I've shipped production apps to the App Store and Google Play — a golf social platform, a creative agency's internal operations app, and a mentor–mentee marketplace — along with the React admin portals behind them. I work mainly in React Native, ReactJS, and TypeScript, and contribute across the stack in ASP.NET Core and Laravel.",
      "p3": "Alongside client work I'm building Custvice, my own two-sided marketplace product. I thrive in Agile teams and care most about shipping software people actually use.",
      "labelName": "Name",
      "labelRole": "Role",
      "labelExperience": "Experience",
      "labelLocation": "Location",
      "labelEmail": "Email",
      "labelDegree": "Degree",
      "valueName": "Shoaib Jadallah",
      "valueRole": "Full Stack Developer",
      "valueExperienceYears": "years,",
      "valueExperienceApps": "apps shipped",
      "valueLocation": "Nablus, Palestine",
      "valueDegree": "B.Sc. Computer Systems Engineering",
      "ctaContact": "Let's Work Together",
      "ctaWork": "See my work"
    },
    "footer": {
      "rights": "© {year} Shoaib Jadallah. All rights reserved.",
      "upwork": "Hire me on Upwork",
      "downloadCv": "Download my CV"
    },
    "experience": {
      "label": "Experience",
      "titleLead": "Where I've",
      "titleAccent": "worked",
      "subtitle": "My professional journey building web and mobile applications.",
      "readMore": "Read more",
      "showLess": "Show less",
      "roles": {
        "MENA Talents": {
          "role": "Full Stack Developer | React Native & ASP.NET",
          "period": "Feb 2025 - Present",
          "highlights": [
            "GolfSnap — developed a cross-platform golf social app (iOS/Android) with React Native (Expo SDK 54) and React 19 for GPS course discovery, organising games, and live scoring.",
            "GolfSnap Portal — participated in building the companion role-based admin portal (React 18, TypeScript, Vite) with protected routes, per-role dashboards, and full CRUD.",
            "Designed a reusable API architecture using custom hooks and HOC patterns, unifying authentication, error handling, and token refresh across mobile and web."
          ],
          "fullHighlights": [
            "GolfSnap — developed a cross-platform golf social app (iOS/Android) with React Native (Expo SDK 54) and React 19 for GPS course discovery, organising games, and live scoring.",
            "GolfSnap Portal — participated in building the companion role-based admin portal (React 18, TypeScript, Vite) with protected routes, per-role dashboards, and full CRUD with pagination, filtering, and bulk Excel/CSV/JSON import.",
            "JUMP — contributed as a core developer to a cross-platform Flutter mentor–mentee marketplace with swipe matching, meeting booking, and real-time messaging.",
            "Designed a reusable API architecture using custom hooks and HOC patterns, unifying authentication, error handling, and token refresh across mobile and web.",
            "Implemented real-time functionality with SignalR — live game scoring updates and chat with message editing and read receipts.",
            "Developed the full game lifecycle: invitations and deep linking, live scoring, dispute handling, ratings, and signed PDF scorecard generation.",
            "Contributed to ASP.NET Core backend features (authentication, email verification, password reset, issue reporting) and integrated Firebase Analytics, push notifications, and GPS-based features."
          ]
        },
        "aba agency": {
          "role": "Full Stack Developer | React Native & Laravel",
          "period": "Mar 2024 - Dec 2024",
          "highlights": [
            "Developed the internal operations app for a creative and marketing agency in Ramallah — one cross-platform React Native application serving HR, Management, Finance, Design, Events, Printing, and Digital Production.",
            "Built core business features including attendance tracking, task & meeting management, and role-based workflows across multiple departments.",
            "Designed and implemented multi-language (Arabic/English) support with RTL handling and a multi-theme system with persistent user preferences.",
            "Contributed to backend development in Laravel, including real-time chat APIs, notification services, and Sanctum-based authentication improvements."
          ],
          "fullHighlights": [
            "Developed the internal operations app for a creative and marketing agency in Ramallah — one cross-platform React Native (Expo) application serving HR, Management, Finance, Design, Events, Printing, and Digital Production.",
            "Implemented dynamic department-based business logic and conditional UI rendering, so each department sees only its own workflows inside one shared application.",
            "Built an employee attendance tracking system enabling users to start/end work sessions, store daily attendance records, and review their work history.",
            "Contributed to a shared Calendar module covering Meetings and Tasks management with date-based filtering and detailed views.",
            "Designed and implemented multi-language (Arabic/English) support with full RTL handling and a multi-theme system (Light, Dark, Dreamy, and custom themes) with persistent user preferences.",
            "Implemented drawer-based navigation to improve user flow and accessibility across app features.",
            "Applied clean architecture principles using reusable components, custom hooks, and Context API state management.",
            "Contributed to backend development in Laravel, including real-time chat APIs, notification services, and Sanctum-based authentication improvements.",
            "Served an active user base of 70–100 employees, keeping the app performant, scalable, and reliable in daily operational use.",
            "Collaborated with cross-functional teams in an Agile environment, shaping the app into a reusable template for future clients."
          ]
        },
        "Staffready Mablewood": {
          "role": "Front-End ReactJS Developer (Freelancer)",
          "period": "Jun 2023 - Jan 2024",
          "highlights": [
            "Rewrote an existing project using React and Material UI, delivering a modern interface with improved usability.",
            "Collaborated with team members using Jira and GitHub, participating in code reviews and version control workflows."
          ],
          "fullHighlights": [
            "Rewrote an existing project using React and the Material UI library, delivering a modern, user-friendly interface with improved usability and more visually appealing features.",
            "Collaborated with team members using Jira and Slack, managing project tasks in a professional development environment.",
            "Participated in code reviews and version control workflows on GitHub, contributing to a shared collaborative codebase.",
            "Adapted and optimized the web application into a React Native mobile app for cross-platform deployment."
          ]
        },
        "IConnect Technologies": {
          "role": "Full-Stack (ASP.NET Web API & Angular) Intern",
          "period": "Mar 2023 - Jun 2023",
          "highlights": [
            "Built a full-stack web application using Angular and ASP.NET Web API with Entity Framework Core.",
            "Designed and implemented RESTful APIs with DTOs, session management, and microservices architecture."
          ],
          "fullHighlights": [
            "Built a full-stack web application using Angular and ASP.NET Web API with Entity Framework Core.",
            "Designed and implemented RESTful APIs with DTOs, session management, and microservices architecture.",
            "Worked with SQL Server databases for data modeling and querying.",
            "Combined the front-end and back-end into a single full-stack project, prepared and ready to be deployed."
          ]
        }
      }
    },
    "projects": {
      "label": "Portfolio",
      "titleLead": "Featured",
      "titleAccent": "projects",
      "subtitle": "Five production applications — four built for clients and one my own product — plus the university and self-study work that came before them.",
      "filterAll": "All",
      "filterMobile": "Mobile",
      "filterWeb": "Web",
      "filterProduction": "Production",
      "filterPractice": "Practice",
      "emptyTitle": "No projects yet",
      "emptyText": "No projects match this category and platform combination. Try a different one.",
      "viewDetails": "View details for {title}",
      "whatIBuilt": "What I built",
      "builtWith": "Built with",
      "close": "Close",
      "filterPlatform": "Filter by platform",
      "filterCategory": "Filter by category",
      "ownership": {
        "solo": "Built solo",
        "core": "Core developer",
        "team": "Team contribution",
        "study": "University project"
      },
      "notes": {
        "privateDefault": "Private client codebase",
        "privateDefaultLong": "Private client codebase — source cannot be shared.",
        "openSource": "Source on GitHub",
        "docsOnly": "Documentation only",
        "custvicePrivate": "My own product — source not public"
      },
      "items": {
        "1": {
          "subtitle": "Social golf platform · iOS + Android",
          "description": "A cross-platform mobile app for discovering courses by GPS, organising games, and scoring them live — with real-time scoring and chat, multiple scoring formats, and PDF scorecards.",
          "highlights": [
            "Real-time scoring and chat over SignalR, reconciled against a TanStack Query cache",
            "JWT silent refresh, Google/Facebook sign-in, biometric unlock, SSL certificate pinning",
            "Push notifications, device calendar, contact-based invites, golfsnap:// deep links",
            "92 Jest / React Native Testing Library test files; Firebase Analytics and Crashlytics"
          ],
          "websiteLabel": "View on Google Play"
        },
        "2": {
          "subtitle": "Multi-role admin & player web portal",
          "description": "The companion web portal for GolfSnap — Super Admin, Club Owner, and Player portals behind one React + Vite SPA, each gated by role-based routing.",
          "highlights": [
            "Protected routes with session rehydration and 401 auto-logout",
            "Server-paginated tables with debounced search, multi-field filters, sorting, bulk delete",
            "Club, course, tee, and hole administration with owner assignment and credential dialogs",
            "Bulk Excel and JSON import with template download and pre-import validation",
            "~23 Vitest suites plus Playwright end-to-end coverage"
          ],
          "websiteLabel": "Visit the portal"
        },
        "3": {
          "subtitle": "My own product · customer ⇄ company marketplace",
          "description": "My own product, built and published independently — a two-sided marketplace connecting customers with service companies. Companies publish jobs, tenders, events, ads, posts, and 24-hour stories; customers browse by category and open direct conversations.",
          "highlights": [
            "Dual account types with separate signup flows, profiles, and permission-gated actions",
            "Six content types sharing one CRUD and cache-invalidation pattern across ~58 query hooks",
            "20 typed service modules and ~30 hand-built design-system components",
            "Bilingual Arabic/English, biometric app lock, offline banner, push notifications",
            "74 test files; Firebase Analytics and Crashlytics; EAS Build with OTA updates"
          ],
          "websiteLabel": ""
        },
        "4": {
          "subtitle": "Creative agency · internal operations app",
          "description": "The internal operations app for aba agency, a creative and marketing agency in Ramallah. One role-based application runs every department — HR, Management, Finance, Design, Events, Printing, and Digital Production — on iOS, Android, and web.",
          "highlights": [
            "Geofenced attendance check-in/out, meetings, tasks, absence requests, evaluations",
            "Department workflows: design approvals, warehouse inventory, purchase orders, sales pipeline",
            "Real-time notifications and chat over Laravel Echo and Reverb",
            "Bilingual Arabic/English with full RTL, plus four selectable themes",
            "Sentry error tracking and session replay, SSL public-key pinning, Expo OTA delivery"
          ],
          "websiteLabel": "Visit aba.ps"
        },
        "5": {
          "subtitle": "Mentor–mentee marketplace · Flutter",
          "description": "A cross-platform Flutter app where mentees discover and book sessions with mentors, with swipe-based matching, real-time messaging, and two-way reviews.",
          "highlights": [
            "Swipe matching with filters by industry, skills, and interests",
            "Real-time messaging over SignalR with paginated timelines",
            "Meeting booking against mentor availability with a full status lifecycle",
            "Google, Apple, and LinkedIn sign-in, JWT refresh, biometric fallback",
            "Clean architecture with runtime-switchable Go and .NET backends"
          ],
          "websiteLabel": "Visit thejumpapp.com"
        },
        "6": {
          "subtitle": "Medical device · software + hardware",
          "description": "A medical project split across software and hardware — a Flutter app driving an Arduino machine that delivers liquid drugs intravenously.",
          "highlights": [],
          "websiteLabel": ""
        },
        "7": {
          "subtitle": "ASP.NET Core MVC",
          "description": "An ASP.NET Core MVC site for Sho3lat-Fikr, a cultural club at the Arab American University.",
          "highlights": [],
          "websiteLabel": ""
        },
        "8": {
          "subtitle": "ReactJS practice build",
          "description": "A React practice project describing a gym and its training programmes.",
          "highlights": [],
          "websiteLabel": ""
        },
        "9": {
          "subtitle": "Engineering project management",
          "description": "Prepared for an engineering project management course — planning and preparing a smart-home project end to end.",
          "highlights": [],
          "websiteLabel": ""
        },
        "10": {
          "subtitle": "Software engineering course",
          "description": "A software engineering course project covering how to plan and run an agile process for a clothes factory.",
          "highlights": [],
          "websiteLabel": ""
        },
        "11": {
          "subtitle": "HTML · CSS · JavaScript",
          "description": "A small, simple site built with plain HTML, CSS, and JavaScript.",
          "highlights": [],
          "websiteLabel": ""
        },
        "12": {
          "subtitle": "ReactJS practice build",
          "description": "Login and sign-up section designs implemented in React as practice.",
          "highlights": [],
          "websiteLabel": ""
        },
        "13": {
          "subtitle": "Vanilla JavaScript",
          "description": "A solution to the Elzero Web School JavaScript challenge, written in pure JavaScript.",
          "highlights": [],
          "websiteLabel": ""
        },
        "14": {
          "subtitle": "HTML · CSS",
          "description": "A hover area with animation and a clock design built with HTML and CSS.",
          "highlights": [],
          "websiteLabel": ""
        },
        "15": {
          "subtitle": "HTML · CSS",
          "description": "An animated emoji design, part three of the front-end training tasks.",
          "highlights": [],
          "websiteLabel": ""
        },
        "16": {
          "subtitle": "Template builds",
          "description": "Templates designed with HTML and CSS after finishing the Elzero Web School courses.",
          "highlights": [],
          "websiteLabel": ""
        },
        "17": {
          "subtitle": "Frontend Mentor challenge",
          "description": "A Frontend Mentor challenge solved with HTML and CSS.",
          "highlights": [],
          "websiteLabel": ""
        },
        "18": {
          "subtitle": "HTML · CSS",
          "description": "The first version of this portfolio, built as a web CV.",
          "highlights": [],
          "websiteLabel": ""
        },
        "19": {
          "subtitle": "ReactJS",
          "description": "The React rebuild of the portfolio — the site you are reading now.",
          "highlights": [],
          "websiteLabel": ""
        },
        "20": {
          "subtitle": "ReactJS · useState",
          "description": "An interactive projects section built with React hooks as a practice exercise.",
          "highlights": [],
          "websiteLabel": ""
        }
      }
    },
    "skills": {
      "label": "Skills",
      "titleLead": "My",
      "titleAccent": "tech stack",
      "subtitle": "Technologies and tools I work with to bring ideas to life.",
      "softTitle": "Soft Skills",
      "categories": [
        "Web & Mobile",
        "Back-End & Database",
        "Tools & Platforms",
        "Testing & Quality"
      ],
      "soft": [
        "Team Leadership",
        "Problem Solving",
        "Time Management",
        "Teamwork",
        "Agile Methodology",
        "Client Communication",
        "Code Reviews",
        "Quick Learner"
      ]
    },
    "tutorials": {
      "label": "Tutorials",
      "titleLead": "Featured",
      "titleAccent": "content",
      "subtitle": "Tech tutorials I've created to share knowledge with the developer community.",
      "watch": "Watch Video",
      "channel": "View my YouTube channel"
    },
    "contact": {
      "label": "Contact",
      "titleLead": "Let's work",
      "titleAccent": "together",
      "subtitle": "Have a project in mind or just want to say hello? I'd love to hear from you.",
      "email": "Email",
      "phone": "Phone / WhatsApp",
      "location": "Location",
      "locationValue": "Madama, Nablus, Palestine",
      "formName": "Full Name",
      "formNamePlaceholder": "Your name",
      "formEmail": "Email",
      "formEmailPlaceholder": "Your email",
      "formMessage": "Message",
      "formMessagePlaceholder": "Your message...",
      "send": "Send Message"
    },
    "common": {
      "switchToLight": "Switch to light theme",
      "switchToDark": "Switch to dark theme",
      "switchLanguage": "Switch to Arabic"
    }
  },
  "ar": {
    "nav": {
      "about": "نبذة عني",
      "experience": "الخبرة العملية",
      "skills": "المهارات",
      "projects": "المشاريع",
      "contact": "التواصل",
      "cv": "السيرة الذاتية",
      "downloadCv": "تحميل السيرة الذاتية",
      "home": "الرئيسية",
      "toggleMenu": "فتح/إغلاق القائمة"
    },
    "hero": {
      "greeting": "مرحباً بالعالم، أنا",
      "title": "مطوّر Full Stack · تطبيقات الجوال والويب",
      "description": "أبني تطبيقات إنتاجية تُنشر على App Store وGoogle Play — React Native وReactJS وTypeScript في الواجهة الأمامية، وASP.NET Core وLaravel خلفها.",
      "getInTouch": "تواصل معي",
      "viewWork": "اطّلع على أعمالي",
      "statYears": "سنوات خبرة",
      "statApps": "تطبيقات إنتاجية",
      "statCompanies": "شركات",
      "scroll": "مرّر للأسفل"
    },
    "about": {
      "label": "نبذة عني",
      "titleLead": "تحويل الأفكار إلى",
      "titleAccent": "واقع رقمي",
      "p1": "مطوّر Full Stack بخلفية في هندسة أنظمة الحاسوب، أبني تطبيقات الجوال والويب متعددة المنصّات من البداية إلى النهاية. أحمل درجة البكالوريوس في هندسة أنظمة الحاسوب من Arab American University.",
      "p2": "في MENA Talents وaba agency أطلقت تطبيقات إنتاجية على App Store وGoogle Play — منصّة تواصل اجتماعي للغولف، وتطبيق العمليات الداخلية لوكالة إبداعية، وسوقًا يجمع المرشدين وطالبي الإرشاد — إلى جانب بوابات الإدارة المبنية بـReact خلفها. أعمل بشكل أساسي على React Native وReactJS وTypeScript، وأساهم عبر مختلف طبقات النظام في ASP.NET Core وLaravel.",
      "p3": "إلى جانب العمل مع العملاء، أبني Custvice، وهو منتجي الخاص كسوق ثنائي الجانب. أعمل بأفضل ما لديّ ضمن فرق Agile وأهتمّ قبل كل شيء بإطلاق برمجيات يستخدمها الناس فعلاً.",
      "labelName": "الاسم",
      "labelRole": "الدور الوظيفي",
      "labelExperience": "الخبرة",
      "labelLocation": "الموقع",
      "labelEmail": "البريد الإلكتروني",
      "labelDegree": "الشهادة",
      "valueName": "شعيب جاد الله",
      "valueRole": "مطوّر Full Stack",
      "valueExperienceYears": "سنوات،",
      "valueExperienceApps": "تطبيقات تم إطلاقها",
      "valueLocation": "نابلس، فلسطين",
      "valueDegree": "بكالوريوس هندسة أنظمة الحاسوب",
      "ctaContact": "لنعمل معًا",
      "ctaWork": "شاهد أعمالي"
    },
    "footer": {
      "rights": "© {year} شعيب جاد الله. جميع الحقوق محفوظة.",
      "upwork": "وظّفني عبر Upwork",
      "downloadCv": "حمّل سيرتي الذاتية"
    },
    "experience": {
      "label": "الخبرة العملية",
      "titleLead": "الجهات التي",
      "titleAccent": "عملت بها",
      "subtitle": "رحلتي المهنية في بناء تطبيقات الويب والجوال.",
      "readMore": "اقرأ المزيد",
      "showLess": "عرض أقل",
      "roles": {
        "MENA Talents": {
          "role": "مطوّر Full Stack | React Native و ASP.NET",
          "period": "فبراير 2025 - حتى الآن",
          "highlights": [
            "GolfSnap — طوّرت تطبيقًا اجتماعيًا للغولف متعدد المنصّات (iOS/Android) باستخدام React Native (Expo SDK 54) و React 19 لاكتشاف الملاعب عبر GPS وتنظيم المباريات والتسجيل المباشر للنقاط.",
            "GolfSnap Portal — شاركت في بناء بوابة الإدارة المرافقة القائمة على الأدوار (React 18، TypeScript، Vite) مع مسارات محمية ولوحات تحكم مخصّصة لكل دور وعمليات CRUD كاملة.",
            "صمّمت بنية API قابلة لإعادة الاستخدام باستخدام custom hooks وأنماط HOC، موحّدًا المصادقة ومعالجة الأخطاء وتجديد الـ token عبر تطبيقات الجوال والويب."
          ],
          "fullHighlights": [
            "GolfSnap — طوّرت تطبيقًا اجتماعيًا للغولف متعدد المنصّات (iOS/Android) باستخدام React Native (Expo SDK 54) و React 19 لاكتشاف الملاعب عبر GPS وتنظيم المباريات والتسجيل المباشر للنقاط.",
            "GolfSnap Portal — شاركت في بناء بوابة الإدارة المرافقة القائمة على الأدوار (React 18، TypeScript، Vite) مع مسارات محمية ولوحات تحكم مخصّصة لكل دور وعمليات CRUD كاملة مع تقسيم الصفحات والتصفية والاستيراد الجماعي بصيغ Excel/CSV/JSON.",
            "JUMP — ساهمت كمطوّر أساسي في منصّة متعددة المنصّات مبنية بـ Flutter تجمع بين المرشدين وطالبي الإرشاد، مع المطابقة عبر السحب وحجز الاجتماعات والمراسلة في الوقت الفعلي.",
            "صمّمت بنية API قابلة لإعادة الاستخدام باستخدام custom hooks وأنماط HOC، موحّدًا المصادقة ومعالجة الأخطاء وتجديد الـ token عبر تطبيقات الجوال والويب.",
            "نفّذت خصائص في الوقت الفعلي باستخدام SignalR — تحديثات مباشرة لنتائج المباريات ومحادثة تدعم تعديل الرسائل وإشعارات القراءة.",
            "طوّرت دورة حياة المباراة بالكامل: الدعوات والروابط العميقة (deep linking)، والتسجيل المباشر للنقاط، ومعالجة الاعتراضات، والتقييمات، وتوليد بطاقات نتائج PDF موقّعة.",
            "ساهمت في خصائص الواجهة الخلفية بـ ASP.NET Core (المصادقة، وتأكيد البريد الإلكتروني، وإعادة تعيين كلمة المرور، والإبلاغ عن المشكلات) ودمجت Firebase Analytics والإشعارات الفورية والخصائص المعتمدة على GPS."
          ]
        },
        "aba agency": {
          "role": "مطوّر Full Stack | React Native و Laravel",
          "period": "مارس 2024 - ديسمبر 2024",
          "highlights": [
            "طوّرت تطبيق العمليات الداخلية لوكالة إبداعية وتسويقية في رام الله — تطبيق واحد متعدد المنصّات مبني بـ React Native يخدم الموارد البشرية والإدارة والمالية والتصميم والفعاليات والطباعة والإنتاج الرقمي.",
            "بنيت خصائص العمل الأساسية بما فيها تتبّع الحضور، وإدارة المهام والاجتماعات، وسير العمل القائم على الأدوار عبر أقسام متعددة.",
            "صمّمت ونفّذت دعم تعدد اللغات (العربية/الإنجليزية) مع معالجة الاتجاه من اليمين إلى اليسار (RTL) ونظام سمات متعدد مع حفظ دائم لتفضيلات المستخدم.",
            "ساهمت في تطوير الواجهة الخلفية بـ Laravel، شاملًا واجهات API للمحادثة الفورية وخدمات الإشعارات وتحسينات على المصادقة المعتمدة على Sanctum."
          ],
          "fullHighlights": [
            "طوّرت تطبيق العمليات الداخلية لوكالة إبداعية وتسويقية في رام الله — تطبيق واحد متعدد المنصّات مبني بـ React Native (Expo) يخدم الموارد البشرية والإدارة والمالية والتصميم والفعاليات والطباعة والإنتاج الرقمي.",
            "نفّذت منطق عمل ديناميكيًا قائمًا على الأقسام وعرضًا شرطيًا للواجهة، بحيث يرى كل قسم سير العمل الخاص به فقط داخل تطبيق واحد مشترك.",
            "بنيت نظامًا لتتبّع حضور الموظفين يمكّن المستخدمين من بدء/إنهاء جلسات العمل، وتخزين سجلات الحضور اليومية، ومراجعة سجل عملهم.",
            "ساهمت في وحدة تقويم مشتركة تغطي إدارة الاجتماعات والمهام مع تصفية حسب التاريخ وعروض تفصيلية.",
            "صمّمت ونفّذت دعم تعدد اللغات (العربية/الإنجليزية) مع معالجة كاملة للاتجاه من اليمين إلى اليسار (RTL) ونظام سمات متعدد (Light و Dark و Dreamy وسمات مخصّصة) مع حفظ دائم لتفضيلات المستخدم.",
            "نفّذت تنقّلًا معتمدًا على القائمة الجانبية (drawer) لتحسين انسيابية تجربة المستخدم وسهولة الوصول إلى خصائص التطبيق.",
            "طبّقت مبادئ البنية النظيفة باستخدام مكوّنات قابلة لإعادة الاستخدام و custom hooks وإدارة الحالة عبر Context API.",
            "ساهمت في تطوير الواجهة الخلفية بـ Laravel، شاملًا واجهات API للمحادثة الفورية وخدمات الإشعارات وتحسينات على المصادقة المعتمدة على Sanctum.",
            "خدمت قاعدة مستخدمين نشطة من 70–100 موظف، مع الحفاظ على أداء التطبيق وقابليته للتوسّع وموثوقيته في الاستخدام التشغيلي اليومي.",
            "تعاونت مع فرق متعددة التخصصات في بيئة Agile، وساهمت في تشكيل التطبيق ليصبح قالبًا قابلًا لإعادة الاستخدام لعملاء مستقبليين."
          ]
        },
        "Staffready Mablewood": {
          "role": "مطوّر واجهات أمامية ReactJS (عمل حر)",
          "period": "يونيو 2023 - يناير 2024",
          "highlights": [
            "أعدت كتابة مشروع قائم باستخدام React و Material UI، مقدّمًا واجهة عصرية بقابلية استخدام أفضل.",
            "تعاونت مع أعضاء الفريق عبر Jira و GitHub، وشاركت في مراجعات الشيفرة وسير عمل إدارة الإصدارات."
          ],
          "fullHighlights": [
            "أعدت كتابة مشروع قائم باستخدام React ومكتبة Material UI، مقدّمًا واجهة عصرية سهلة الاستخدام بقابلية استخدام أفضل وخصائص أكثر جاذبية بصريًا.",
            "تعاونت مع أعضاء الفريق عبر Jira و Slack، وأدرت مهام المشروع في بيئة تطوير احترافية.",
            "شاركت في مراجعات الشيفرة وسير عمل إدارة الإصدارات على GitHub، مساهمًا في قاعدة شيفرة مشتركة وتعاونية.",
            "كيّفت تطبيق الويب وحسّنته ليصبح تطبيق هاتف بـ React Native للنشر على منصات متعددة."
          ]
        },
        "IConnect Technologies": {
          "role": "متدرّب Full-Stack (ASP.NET Web API و Angular)",
          "period": "مارس 2023 - يونيو 2023",
          "highlights": [
            "بنيت تطبيق ويب متكاملًا (full-stack) باستخدام Angular و ASP.NET Web API مع Entity Framework Core.",
            "صمّمت ونفّذت واجهات RESTful APIs مع DTOs وإدارة الجلسات وبنية الخدمات المصغّرة (microservices)."
          ],
          "fullHighlights": [
            "بنيت تطبيق ويب متكاملًا (full-stack) باستخدام Angular و ASP.NET Web API مع Entity Framework Core.",
            "صمّمت ونفّذت واجهات RESTful APIs مع DTOs وإدارة الجلسات وبنية الخدمات المصغّرة (microservices).",
            "عملت على قواعد بيانات SQL Server في نمذجة البيانات والاستعلام عنها.",
            "دمجت الواجهة الأمامية والواجهة الخلفية في مشروع full-stack واحد، مهيّأ وجاهز للنشر."
          ]
        }
      }
    },
    "projects": {
      "label": "معرض الأعمال",
      "titleLead": "أبرز",
      "titleAccent": "المشاريع",
      "subtitle": "خمسة تطبيقات إنتاجية — أربعة منها بُنيت لعملاء وواحد منتج خاص بي — إضافة إلى أعمال الدراسة الجامعية والتعلّم الذاتي التي سبقتها.",
      "filterAll": "الكل",
      "filterMobile": "الجوال",
      "filterWeb": "الويب",
      "filterProduction": "إنتاجية",
      "filterPractice": "تدريبية",
      "emptyTitle": "لا توجد مشاريع بعد",
      "emptyText": "لا توجد مشاريع تطابق هذه التوليفة من الفئة والمنصّة. جرّب توليفة أخرى.",
      "viewDetails": "عرض تفاصيل {title}",
      "whatIBuilt": "ما الذي بنيته",
      "builtWith": "بُني باستخدام",
      "close": "إغلاق",
      "filterPlatform": "التصفية حسب المنصّة",
      "filterCategory": "التصفية حسب الفئة",
      "ownership": {
        "solo": "تنفيذ فردي",
        "core": "مطوّر أساسي",
        "team": "مساهمة ضمن فريق",
        "study": "مشروع جامعي"
      },
      "notes": {
        "privateDefault": "شيفرة مصدرية خاصة بالعميل",
        "privateDefaultLong": "شيفرة مصدرية خاصة بالعميل — لا يمكن مشاركة الشيفرة.",
        "openSource": "الشيفرة المصدرية على GitHub",
        "docsOnly": "توثيق فقط",
        "custvicePrivate": "منتج خاص بي — الشيفرة المصدرية غير عامة"
      },
      "items": {
        "1": {
          "subtitle": "منصّة غولف اجتماعية · iOS + Android",
          "description": "تطبيق جوال متعدد المنصّات لاكتشاف ملاعب الغولف عبر GPS، وتنظيم المباريات، وتسجيل نتائجها مباشرةً — مع تسجيل نتائج ومحادثة في الوقت الفعلي، وصيغ تسجيل متعددة، وبطاقات نتائج بصيغة PDF.",
          "highlights": [
            "تسجيل نتائج ومحادثة في الوقت الفعلي عبر SignalR، مع مطابقتها مع ذاكرة التخزين المؤقت لـ TanStack Query",
            "تجديد صامت لرموز JWT، وتسجيل الدخول عبر Google/Facebook، وفتح بالبصمة الحيوية، وتثبيت شهادات SSL",
            "إشعارات فورية، وتقويم الجهاز، ودعوات عبر جهات الاتصال، وروابط عميقة golfsnap://",
            "92 ملف اختبار باستخدام Jest / React Native Testing Library؛ إضافة إلى Firebase Analytics و Crashlytics"
          ],
          "websiteLabel": "عرض على Google Play"
        },
        "2": {
          "subtitle": "بوابة ويب متعددة الأدوار للإدارة واللاعبين",
          "description": "بوابة الويب المرافقة لتطبيق GolfSnap — بوابات لمدير النظام الأعلى ومالك النادي واللاعب ضمن تطبيق صفحة واحدة مبني على React + Vite، كلٌّ منها محميّ بتوجيه قائم على الأدوار.",
          "highlights": [
            "مسارات محمية مع استعادة الجلسة وتسجيل خروج تلقائي عند الاستجابة 401",
            "جداول مقسّمة إلى صفحات من جهة الخادم مع بحث مؤجَّل (debounce)، ومرشّحات متعددة الحقول، وفرز، وحذف جماعي",
            "إدارة الأندية والملاعب ومناطق البدء (tee) والحُفَر مع إسناد المالكين ونوافذ بيانات الدخول",
            "استيراد جماعي من Excel و JSON مع تنزيل القوالب والتحقق من صحة البيانات قبل الاستيراد",
            "نحو 23 مجموعة اختبارات Vitest إضافة إلى تغطية شاملة من طرف إلى طرف باستخدام Playwright"
          ],
          "websiteLabel": "زيارة البوابة"
        },
        "3": {
          "subtitle": "منتج خاص بي · سوق يربط العملاء ⇄ الشركات",
          "description": "منتج خاص بي، بُني ونُشر بشكل مستقل — سوق ثنائي الجانب يربط العملاء بشركات الخدمات. تنشر الشركات وظائف ومناقصات وفعاليات وإعلانات ومنشورات وقصصًا مدتها 24 ساعة؛ بينما يتصفّح العملاء حسب الفئة ويفتحون محادثات مباشرة.",
          "highlights": [
            "نوعان من الحسابات مع مسارات تسجيل منفصلة، وملفات تعريف مستقلة، وإجراءات محكومة بالصلاحيات",
            "ستة أنواع من المحتوى تشترك في نمط واحد لعمليات CRUD وإبطال ذاكرة التخزين المؤقت عبر نحو 58 query hook",
            "20 وحدة خدمات ذات أنواع محدّدة، ونحو 30 مكوّنًا من نظام التصميم مبنية يدويًا",
            "دعم ثنائي اللغة (العربية/الإنجليزية)، وقفل التطبيق بالبصمة الحيوية، وشريط تنبيه عند انقطاع الاتصال، وإشعارات فورية",
            "74 ملف اختبار؛ إضافة إلى Firebase Analytics و Crashlytics؛ و EAS Build مع تحديثات OTA"
          ],
          "websiteLabel": ""
        },
        "4": {
          "subtitle": "وكالة إبداعية · تطبيق العمليات الداخلية",
          "description": "تطبيق العمليات الداخلية لـ aba agency، وهي وكالة إبداعية وتسويقية في رام الله. تطبيق واحد قائم على الأدوار يدير جميع الأقسام — الموارد البشرية، والإدارة، والمالية، والتصميم، والفعاليات، والطباعة، والإنتاج الرقمي — على iOS و Android والويب.",
          "highlights": [
            "تسجيل الحضور والانصراف ضمن نطاق جغرافي محدّد، والاجتماعات، والمهام، وطلبات الغياب، والتقييمات",
            "مسارات عمل الأقسام: اعتمادات التصميم، وجرد المستودع، وأوامر الشراء، ومسار المبيعات",
            "إشعارات ومحادثة في الوقت الفعلي عبر Laravel Echo و Reverb",
            "دعم ثنائي اللغة (العربية/الإنجليزية) مع دعم كامل للاتجاه من اليمين إلى اليسار، إضافة إلى أربع سمات قابلة للاختيار",
            "تتبّع الأخطاء وإعادة تشغيل الجلسات عبر Sentry، وتثبيت المفتاح العام لـ SSL، وتوصيل التحديثات عبر Expo OTA"
          ],
          "websiteLabel": "زيارة aba.ps"
        },
        "5": {
          "subtitle": "سوق يجمع المرشدين وطالبي الإرشاد · Flutter",
          "description": "تطبيق Flutter متعدد المنصّات يتيح للمتدرّبين اكتشاف المرشدين وحجز جلسات معهم، مع مطابقة قائمة على السحب، ومراسلة في الوقت الفعلي، وتقييمات متبادلة.",
          "highlights": [
            "مطابقة عبر السحب مع مرشّحات حسب القطاع والمهارات والاهتمامات",
            "مراسلة في الوقت الفعلي عبر SignalR مع مسارات زمنية مقسّمة إلى صفحات",
            "حجز الاجتماعات وفق أوقات توفّر المرشد مع دورة حياة كاملة للحالات",
            "تسجيل الدخول عبر Google و Apple و LinkedIn، وتجديد رموز JWT، وبديل بالبصمة الحيوية",
            "بنية نظيفة مع خوادم خلفية Go و .NET قابلة للتبديل أثناء التشغيل"
          ],
          "websiteLabel": "زيارة thejumpapp.com"
        },
        "6": {
          "subtitle": "جهاز طبي · برمجيات + عتاد",
          "description": "مشروع طبي مقسّم بين البرمجيات والعتاد — تطبيق Flutter يشغّل جهاز Arduino يقوم بإعطاء الأدوية السائلة عن طريق الوريد.",
          "highlights": [],
          "websiteLabel": ""
        },
        "7": {
          "subtitle": "ASP.NET Core MVC",
          "description": "موقع مبني على ASP.NET Core MVC لنادي Sho3lat-Fikr، وهو نادٍ ثقافي في Arab American University.",
          "highlights": [],
          "websiteLabel": ""
        },
        "8": {
          "subtitle": "مشروع تدريبي بـ ReactJS",
          "description": "مشروع تدريبي بـ React يعرّف بصالة رياضية وبرامجها التدريبية.",
          "highlights": [],
          "websiteLabel": ""
        },
        "9": {
          "subtitle": "إدارة المشاريع الهندسية",
          "description": "أُعدّ لمساق إدارة المشاريع الهندسية — تخطيط مشروع منزل ذكي وإعداده من البداية إلى النهاية.",
          "highlights": [],
          "websiteLabel": ""
        },
        "10": {
          "subtitle": "مساق هندسة البرمجيات",
          "description": "مشروع ضمن مساق هندسة البرمجيات يتناول كيفية تخطيط عملية Agile وإدارتها في مصنع ملابس.",
          "highlights": [],
          "websiteLabel": ""
        },
        "11": {
          "subtitle": "HTML · CSS · JavaScript",
          "description": "موقع صغير وبسيط مبني باستخدام HTML و CSS و JavaScript الخالصة.",
          "highlights": [],
          "websiteLabel": ""
        },
        "12": {
          "subtitle": "مشروع تدريبي بـ ReactJS",
          "description": "تصاميم لأقسام تسجيل الدخول وإنشاء الحساب نُفّذت باستخدام React على سبيل التدريب.",
          "highlights": [],
          "websiteLabel": ""
        },
        "13": {
          "subtitle": "JavaScript خالص",
          "description": "حلّ لتحدّي JavaScript من Elzero Web School، مكتوب بـ JavaScript خالص.",
          "highlights": [],
          "websiteLabel": ""
        },
        "14": {
          "subtitle": "HTML · CSS",
          "description": "منطقة تفاعلية عند المرور بالمؤشر مع حركة، وتصميم ساعة، مبنيان باستخدام HTML و CSS.",
          "highlights": [],
          "websiteLabel": ""
        },
        "15": {
          "subtitle": "HTML · CSS",
          "description": "تصميم رمز تعبيري متحرك، وهو الجزء الثالث من مهام التدريب على الواجهات الأمامية.",
          "highlights": [],
          "websiteLabel": ""
        },
        "16": {
          "subtitle": "بناء قوالب",
          "description": "قوالب صُمّمت باستخدام HTML و CSS بعد إنهاء مساقات Elzero Web School.",
          "highlights": [],
          "websiteLabel": ""
        },
        "17": {
          "subtitle": "تحدٍّ من Frontend Mentor",
          "description": "تحدٍّ من Frontend Mentor تم حلّه باستخدام HTML و CSS.",
          "highlights": [],
          "websiteLabel": ""
        },
        "18": {
          "subtitle": "HTML · CSS",
          "description": "النسخة الأولى من هذا الموقع الشخصي، بُنيت كسيرة ذاتية على الويب.",
          "highlights": [],
          "websiteLabel": ""
        },
        "19": {
          "subtitle": "ReactJS",
          "description": "إعادة بناء الموقع الشخصي باستخدام React — وهو الموقع الذي تتصفّحه الآن.",
          "highlights": [],
          "websiteLabel": ""
        },
        "20": {
          "subtitle": "ReactJS · useState",
          "description": "قسم مشاريع تفاعلي مبني باستخدام React hooks كتمرين تدريبي.",
          "highlights": [],
          "websiteLabel": ""
        }
      }
    },
    "skills": {
      "label": "المهارات",
      "titleLead": "حزمتي",
      "titleAccent": "التقنية",
      "subtitle": "التقنيات والأدوات التي أعمل بها لتحويل الأفكار إلى واقع.",
      "softTitle": "المهارات الشخصية",
      "categories": [
        "الويب والجوال",
        "الواجهة الخلفية وقواعد البيانات",
        "الأدوات والمنصّات",
        "الاختبار والجودة"
      ],
      "soft": [
        "قيادة الفريق",
        "حل المشكلات",
        "إدارة الوقت",
        "العمل الجماعي",
        "منهجية Agile",
        "التواصل مع العملاء",
        "مراجعات الشيفرة",
        "سريع التعلّم"
      ]
    },
    "tutorials": {
      "label": "الدروس التعليمية",
      "titleLead": "محتوى",
      "titleAccent": "مميّز",
      "subtitle": "دروس تقنية أنشأتها لمشاركة المعرفة مع مجتمع المطورين.",
      "watch": "مشاهدة الفيديو",
      "channel": "زيارة قناتي على YouTube"
    },
    "contact": {
      "label": "التواصل",
      "titleLead": "لنعمل",
      "titleAccent": "معًا",
      "subtitle": "هل لديك مشروع في ذهنك أو تودّ إلقاء التحية فقط؟ يسعدني أن أسمع منك.",
      "email": "البريد الإلكتروني",
      "phone": "الهاتف / WhatsApp",
      "location": "الموقع",
      "locationValue": "مادما، نابلس، فلسطين",
      "formName": "الاسم الكامل",
      "formNamePlaceholder": "اسمك",
      "formEmail": "البريد الإلكتروني",
      "formEmailPlaceholder": "بريدك الإلكتروني",
      "formMessage": "الرسالة",
      "formMessagePlaceholder": "رسالتك...",
      "send": "إرسال الرسالة"
    },
    "common": {
      "switchToLight": "التبديل إلى السمة الفاتحة",
      "switchToDark": "التبديل إلى السمة الداكنة",
      "switchLanguage": "التبديل إلى الإنجليزية"
    }
  }
};
