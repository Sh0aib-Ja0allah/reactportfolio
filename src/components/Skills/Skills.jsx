import React, { useState } from 'react';
import './Skills.css';
import CountUp from '../CountUp/CountUp';

const skillCategories = [
  {
    title: 'Web & Mobile',
    icon: '</>',
    color: '#f97316',
    skills: ['ReactJS', 'React Native', 'HTML & CSS', 'JavaScript', 'TypeScript', 'Angular', 'Flutter'],
  },
  {
    title: 'Back-End & Database',
    icon: '{}',
    color: '#ec4899',
    skills: ['ASP.NET Core', 'C#', 'Laravel / PHP', 'SignalR', 'Entity Framework', 'SQL Server', 'Oracle / PL-SQL', 'Python', 'Java'],
  },
  {
    title: 'Tools & Platforms',
    icon: '#',
    color: '#a78bfa',
    skills: ['Git & GitHub', 'Expo & EAS', 'TanStack Query', 'Firebase', 'Sentry', 'Vite', 'Material UI', 'Bootstrap', 'Jira', 'Linux'],
  },
  {
    title: 'Testing & Quality',
    icon: '✓',
    color: '#34d399',
    skills: ['Jest', 'React Native Testing Library', 'Vitest', 'Playwright', 'MSW', 'ESLint'],
  },
];

const softSkills = ['Team Leadership', 'Problem Solving', 'Time Management', 'Teamwork', 'Agile Methodology', 'Client Communication', 'Code Reviews', 'Quick Learner'];

function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="skills ambient" id="skills">
      <div className="skills__container section">
        <div className="skills__header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">tech stack</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="skills__layout">
          <div className="skills__tabs">
            {skillCategories.map((cat, i) => (
              <button
                key={i}
                className={`skills__tab ${activeTab === i ? 'skills__tab--active' : ''}`}
                onClick={() => setActiveTab(i)}
                style={{ '--tab-color': cat.color }}
              >
                <span className="skills__tab-icon">{cat.icon}</span>
                <span className="skills__tab-text">{cat.title}</span>
                <CountUp
                  className="skills__tab-count"
                  end={cat.skills.length}
                  duration={1100}
                  delay={i * 120}
                />
              </button>
            ))}
          </div>

          <div className="skills__panel">
            <div className="skills__panel-header">
              <div
                className="skills__panel-indicator"
                style={{ '--indicator-color': skillCategories[activeTab].color }}
              ></div>
              <h3 className="skills__panel-title">{skillCategories[activeTab].title}</h3>
            </div>
            <div className="skills__tiles">
              {skillCategories[activeTab].skills.map((skill, i) => (
                <div
                  className="skills__tile"
                  key={`${activeTab}-${i}`}
                  style={{
                    '--tile-color': skillCategories[activeTab].color,
                    animationDelay: `${i * 0.06}s`,
                  }}
                >
                  <span className="skills__tile-dot"></span>
                  <span className="skills__tile-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills__soft">
          <h3 className="skills__soft-title">Soft Skills</h3>
          <div className="skills__soft-grid">
            {softSkills.map((skill, i) => (
              <span key={i} className="skills__soft-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
