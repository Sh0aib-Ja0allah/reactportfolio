import React, { useState, useEffect } from 'react';
import './Projects.css';
import { ProjectsData } from './ProjectsData';

const filters = ['All', 'Web', 'Other'];
const PAGE_SIZE = 3;

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = ProjectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.type.toLowerCase().includes(activeFilter.toLowerCase());
  });

  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + PAGE_SIZE);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  return (
    <section className="projects" id="projects">
      <div className="projects__container section">
        <div className="projects__header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">projects</span>
          </h2>
          <p className="section-subtitle">
            A collection of projects that showcase my skills and experience.
          </p>
        </div>

        <div className="projects__filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`projects__filter ${activeFilter === filter ? 'projects__filter--active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="projects__empty">
            <svg className="projects__empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              <line x1="9" y1="13" x2="15" y2="13" />
            </svg>
            <h3 className="projects__empty-title">No projects yet</h3>
            <p className="projects__empty-text">
              {activeFilter === 'All'
                ? 'Projects are coming soon. Stay tuned!'
                : `No ${activeFilter.toLowerCase()} projects found. Try a different filter.`}
            </p>
          </div>
        ) : (
          <div className="projects__grid">
            {paginatedProjects.map((project) => (
              <div className="projects__card" key={project.index}>
                <div className="projects__card-image">
                  <img src={project.image} alt={project.alt} />
                  <div className="projects__card-overlay">
                    {project.button1Source && (
                      <a
                        href={project.button1Source}
                        className="projects__card-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.button1Text}
                      </a>
                    )}
                    {project.button2Source && (
                      <a
                        href={project.button2Source}
                        className="projects__card-link projects__card-link--secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.button2Text}
                      </a>
                    )}
                  </div>
                </div>
                <div className="projects__card-content">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-desc">{project.description}</p>
                  <div className="projects__card-techs">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="projects__card-tech">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="projects__pagination">
            <button
              className="projects__page-arrow"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="projects__page-dots">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`projects__page-dot ${currentPage === page ? 'projects__page-dot--active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                  aria-label={`Page ${page}`}
                />
              ))}
            </div>
            <button
              className="projects__page-arrow"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
