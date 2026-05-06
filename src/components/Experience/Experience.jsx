import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Top MENA Talents',
    role: 'React Native Developer & ReactJS Web Developer',
    period: 'Feb 2025 - Present',
    highlights: [
      'Built a cross-platform mobile app (iOS/Android) using React Native (Expo SDK 54) and React 19 for golfers to connect, organize games, and track scores.',
      'Participated in building a role-based admin portal with React 18, TypeScript, and Vite featuring four distinct dashboards with protected routes.',
      'Architected a custom API client layer with custom hooks and HOC pattern.',
    ],
    fullHighlights: [
      'Developed a cross-platform mobile app (iOS/Android) using React Native (Expo SDK 54) and React 19, helping golfers connect, organize games, track scores, and share experiences.',
      'Participated in building a role-based admin portal using React 18, TypeScript, and Vite, featuring four distinct dashboards (Super Admin, Club Owner, Player) with protected routes and automatic portal-type redirection.',
      'Implemented a Role & Permission management system with dynamic role creation, granular permission assignment, and user-role mapping — enabling fine-grained access control across the platform.',
      'Developed a User Management module with paginated listings, multi-criteria filtering (email, name, phone, game type, privacy, location radius), sorting, and full CRUD operations.',
      'Built a Club & Course administration system allowing club creation, multi-owner assignment, course/tee configuration with hole-by-hole data (par, yards, slope rating, stroke index), and default tee settings.',
      'Architected a custom API client layer with a custom hook and HOC pattern, unifying many domain modules under a single authentication and error-handling pipeline.',
      'Built a real-time chat system using SignalR for live messaging, including message editing, deletion, read receipts, and unread conversation counts.',
      'Created reusable custom hooks for analytics tracking with batched event flushing, GPS location with reverse geocoding, profile image batch-fetching with caching, native calendar integration, and contact-based player invitations.',
      'Built the full game lifecycle flow end-to-end: game creation, player invitations, join requests, check-in/no-show, live scoring, score disputes, and scorecard generation (PDF/image with digital signatures).',
      'Designed a Context API state management architecture with UserContextProvider (auth, user data, tokens) and AppContextProvider (theming, navigation state) for centralized, prop-free data flow across the app.',
      'Integrated Firebase Analytics, push notifications via Expo Push Tokens, and deep linking (golfsnap://) for game invitations and password reset flows.',
      'Participated in weekly client meetings in an Agile environment, translating Figma MVP designs into production-ready screens and proposing UX improvements.',
    ],
    technologies: ['React Native', 'ReactJS', 'TypeScript', 'Vite', 'SignalR', 'Firebase', 'Expo'],
  },
  {
    company: 'aba agency',
    role: 'React Native Developer',
    period: 'Mar 2024 - Dec 2024',
    highlights: [
      'Developed a role-based, multi-department mobile app using React Native (Expo) for internal operations across HR, Management, Printing, Events, Design, and Marketing.',
      'Built an employee attendance tracking system and a shared Calendar module with Meetings & Tasks management.',
      'Developed multi-theme UI (Light, Dark, Dreamy) and multi-language support (Arabic, English).',
    ],
    fullHighlights: [
      'Developed and maintained a role-based, multi-department mobile application using React Native (Expo) for internal company operations.',
      'Implemented department-specific business logic and dynamic UI rendering for HR, Management, Printing, Events, Design, and Marketing departments.',
      'Built an employee attendance tracking system enabling users to start/end work sessions, store daily attendance records, and review work history.',
      'Contributed to a shared Calendar module featuring Meetings and Tasks management with date-based filtering and detailed views.',
      'Developed a Settings module supporting multi-theme UI (Light, Dark, Dreamy) and multi-language support (Arabic, English).',
      'Implemented drawer-based navigation to improve user flow and accessibility across app features.',
      'Worked with an active user base of 70–100 employees, ensuring performance, scalability, and reliability.',
      'Followed clean architecture principles, reusable components, custom hooks, and context-based state management.',
      'Collaborated with cross-functional teams in an Agile environment, contributing to a scalable app designed as a reusable template for future clients.',
    ],
    technologies: ['React Native', 'Expo', 'Context API', 'Custom Hooks'],
  },
  {
    company: 'Staffready Mablewood',
    role: 'Front-End ReactJS Developer (Freelancer)',
    period: 'Jun 2023 - Jan 2024',
    highlights: [
      'Rewrote an existing project using ReactJS and Material UI to enhance UX with a modern, user-friendly interface.',
      'Collaborated using Jira and Slack, contributing to version control and code reviews on GitHub.',
    ],
    fullHighlights: [
      'Worked on rewriting an existing project using ReactJS and the Material UI library to enhance the user interface and deliver a more modern, user-friendly experience. Introduced visually appealing features and improved usability.',
      'Gained hands-on experience with Jira and Slack, effectively collaborating with team members and managing project tasks in a professional development environment.',
      'Expanded proficiency in GitHub by contributing to collaborative projects, handling version control, and participating in code reviews.',
      'Worked as a React Native developer on a mobile app project, adapting and optimizing a previous web application for mobile platforms.',
    ],
    technologies: ['ReactJS', 'React Native', 'Material UI', 'GitHub', 'Jira'],
  },
  {
    company: 'IConnect Technologies',
    role: 'Full-Stack (ASP.NET Web API & Angular) Intern',
    period: 'Mar 2023 - Jun 2023',
    highlights: [
      'Learned SQL, databases, and front-end development with the Angular framework.',
      'Built APIs using ASP.NET Entity Framework Core with DTO patterns, Sessions, and Microservices architecture.',
    ],
    fullHighlights: [
      'Learned more about SQL and databases, then started with front-end development by learning the Angular framework and its basics.',
      'Learned ASP.NET and its Entity Framework Core, and how to build APIs with features like DTO, Sessions, and Microservices.',
      'Combined the front-end and back-end to have a full-stack project ready to be deployed.',
    ],
    technologies: ['Angular', 'ASP.NET', 'SQL', 'Entity Framework', 'C#'],
  },
];

function Experience() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="experience" id="experience">
      <div className="experience__container section">
        <div className="experience__header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            Where I've <span className="gradient-text">worked</span>
          </h2>
          <p className="section-subtitle">
            My professional journey building web and mobile applications.
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, index) => {
            const isExpanded = expandedCards[index];
            const displayHighlights = isExpanded ? exp.fullHighlights : exp.highlights;

            return (
              <div className="experience__item" key={index}>
                <div className="experience__dot"></div>
                <div className={`experience__card ${isExpanded ? 'experience__card--expanded' : ''}`}>
                  <div className="experience__card-header">
                    <div>
                      <h3 className="experience__company">{exp.company}</h3>
                      <p className="experience__role">{exp.role}</p>
                    </div>
                    <span className="experience__period">{exp.period}</span>
                  </div>
                  <ul className="experience__highlights">
                    {displayHighlights.map((highlight, i) => (
                      <li key={i} className="experience__highlight">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="experience__footer">
                    <div className="experience__techs">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="experience__tech">{tech}</span>
                      ))}
                    </div>
                    <button
                      className="experience__toggle"
                      onClick={() => toggleCard(index)}
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                      <svg
                        className={`experience__toggle-icon ${isExpanded ? 'experience__toggle-icon--up' : ''}`}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
