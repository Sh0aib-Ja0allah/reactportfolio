import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'MENA Talents',
    role: 'Full Stack Developer | React Native & ASP.NET',
    period: 'Feb 2025 - Present',
    highlights: [
      'GolfSnap — developed a cross-platform golf social app (iOS/Android) with React Native (Expo SDK 54) and React 19 for GPS course discovery, organising games, and live scoring.',
      'GolfSnap Portal — participated in building the companion role-based admin portal (React 18, TypeScript, Vite) with protected routes, per-role dashboards, and full CRUD.',
      'Designed a reusable API architecture using custom hooks and HOC patterns, unifying authentication, error handling, and token refresh across mobile and web.',
    ],
    fullHighlights: [
      'GolfSnap — developed a cross-platform golf social app (iOS/Android) with React Native (Expo SDK 54) and React 19 for GPS course discovery, organising games, and live scoring.',
      'GolfSnap Portal — participated in building the companion role-based admin portal (React 18, TypeScript, Vite) with protected routes, per-role dashboards, and full CRUD with pagination, filtering, and bulk Excel/CSV/JSON import.',
      'JUMP — contributed as a core developer to a cross-platform Flutter mentor–mentee marketplace with swipe matching, meeting booking, and real-time messaging.',
      'Designed a reusable API architecture using custom hooks and HOC patterns, unifying authentication, error handling, and token refresh across mobile and web.',
      'Implemented real-time functionality with SignalR — live game scoring updates and chat with message editing and read receipts.',
      'Developed the full game lifecycle: invitations and deep linking, live scoring, dispute handling, ratings, and signed PDF scorecard generation.',
      'Contributed to ASP.NET Core backend features (authentication, email verification, password reset, issue reporting) and integrated Firebase Analytics, push notifications, and GPS-based features.',
    ],
    technologies: ['React Native', 'Expo', 'ReactJS', 'TypeScript', 'Flutter', 'ASP.NET Core', 'SignalR', 'Firebase'],
  },
  {
    company: 'aba agency',
    role: 'Full Stack Developer | React Native & Laravel',
    period: 'Mar 2024 - Dec 2024',
    highlights: [
      'Developed the internal operations app for a creative and marketing agency in Ramallah — one cross-platform React Native application serving HR, Management, Finance, Design, Events, Printing, and Digital Production.',
      'Built core business features including attendance tracking, task & meeting management, and role-based workflows across multiple departments.',
      'Designed and implemented multi-language (Arabic/English) support with RTL handling and a multi-theme system with persistent user preferences.',
      'Contributed to backend development in Laravel, including real-time chat APIs, notification services, and Sanctum-based authentication improvements.',
    ],
    fullHighlights: [
      'Developed the internal operations app for a creative and marketing agency in Ramallah — one cross-platform React Native (Expo) application serving HR, Management, Finance, Design, Events, Printing, and Digital Production.',
      'Implemented dynamic department-based business logic and conditional UI rendering, so each department sees only its own workflows inside one shared application.',
      'Built an employee attendance tracking system enabling users to start/end work sessions, store daily attendance records, and review their work history.',
      'Contributed to a shared Calendar module covering Meetings and Tasks management with date-based filtering and detailed views.',
      'Designed and implemented multi-language (Arabic/English) support with full RTL handling and a multi-theme system (Light, Dark, Dreamy, and custom themes) with persistent user preferences.',
      'Implemented drawer-based navigation to improve user flow and accessibility across app features.',
      'Applied clean architecture principles using reusable components, custom hooks, and Context API state management.',
      'Contributed to backend development in Laravel, including real-time chat APIs, notification services, and Sanctum-based authentication improvements.',
      'Served an active user base of 70–100 employees, keeping the app performant, scalable, and reliable in daily operational use.',
      'Collaborated with cross-functional teams in an Agile environment, shaping the app into a reusable template for future clients.',
    ],
    technologies: ['React Native', 'Expo', 'Laravel', 'PHP', 'Context API', 'i18n / RTL'],
  },
  {
    company: 'Staffready Mablewood',
    role: 'Front-End ReactJS Developer (Freelancer)',
    period: 'Jun 2023 - Jan 2024',
    highlights: [
      'Rewrote an existing project using React and Material UI, delivering a modern interface with improved usability.',
      'Collaborated with team members using Jira and GitHub, participating in code reviews and version control workflows.',
    ],
    fullHighlights: [
      'Rewrote an existing project using React and the Material UI library, delivering a modern, user-friendly interface with improved usability and more visually appealing features.',
      'Collaborated with team members using Jira and Slack, managing project tasks in a professional development environment.',
      'Participated in code reviews and version control workflows on GitHub, contributing to a shared collaborative codebase.',
      'Adapted and optimized the web application into a React Native mobile app for cross-platform deployment.',
    ],
    technologies: ['ReactJS', 'React Native', 'Material UI', 'GitHub', 'Jira'],
  },
  {
    company: 'IConnect Technologies',
    role: 'Full-Stack (ASP.NET Web API & Angular) Intern',
    period: 'Mar 2023 - Jun 2023',
    highlights: [
      'Built a full-stack web application using Angular and ASP.NET Web API with Entity Framework Core.',
      'Designed and implemented RESTful APIs with DTOs, session management, and microservices architecture.',
    ],
    fullHighlights: [
      'Built a full-stack web application using Angular and ASP.NET Web API with Entity Framework Core.',
      'Designed and implemented RESTful APIs with DTOs, session management, and microservices architecture.',
      'Worked with SQL Server databases for data modeling and querying.',
      'Combined the front-end and back-end into a single full-stack project, prepared and ready to be deployed.',
    ],
    technologies: ['Angular', 'ASP.NET Web API', 'Entity Framework Core', 'SQL Server', 'C#'],
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
