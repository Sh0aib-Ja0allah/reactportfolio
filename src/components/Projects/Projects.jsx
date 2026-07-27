import React, { useState, useEffect } from 'react';
import './Projects.css';
import { ProjectsData } from './ProjectsData';

/* Two independent filter groups — a project must match both to be shown.
   Category has no "All": the section opens on production client work. */
const categoryFilters = [
  { key: 'production', label: 'Production' },
  { key: 'academic', label: 'Practice' },
];

const platformFilters = [
  { key: 'all', label: 'All' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'web', label: 'Web' },
];

const PAGE_SIZE = 6;

function ProjectCover({ project }) {
  if (project.image) {
    return <img src={project.image} alt={project.alt || project.title} />;
  }

  const { initials, from, to } = project.cover || {};
  const logoImg = project.logo && (
    <img className="projects__card-logo" src={project.logo} alt={`${project.title} logo`} />
  );

  return (
    <div
      className="projects__card-cover"
      style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
      aria-hidden={project.logo ? undefined : 'true'}
    >
      {/* Most brand marks are dark artwork on a transparent background, so they
          sit on a light plate. logoBleed is for logos that are already a
          finished, self-contained icon. */}
      {project.logo ? (
        project.logoBleed ? (
          logoImg
        ) : (
          <span className="projects__card-plate">{logoImg}</span>
        )
      ) : (
        <span className="projects__card-initials">{initials}</span>
      )}
    </div>
  );
}

function ProjectDialog({ project, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const links = project.links || [];

  return (
    <div className="projects__dialog-backdrop" onClick={onClose}>
      <div
        className="projects__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="projects-dialog-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="projects__dialog-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="projects__dialog-media">
          <ProjectCover project={project} />
        </div>

        <div className="projects__dialog-body">
          <div className="projects__dialog-heading">
            <h3 className="projects__dialog-title" id="projects-dialog-title">
              {project.title}
            </h3>
            <span className="projects__card-date">{project.date}</span>
          </div>
          {project.subtitle && (
            <p className="projects__card-subtitle">{project.subtitle}</p>
          )}

          <span className={`projects__dialog-badge projects__badge--${project.ownership.tone}`}>
            {project.ownership.label}
          </span>

          <p className="projects__dialog-desc">{project.description}</p>

          {project.highlights && (
            <>
              <h4 className="projects__dialog-subhead">What I built</h4>
              <ul className="projects__card-highlights">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </>
          )}

          <h4 className="projects__dialog-subhead">Built with</h4>
          <div className="projects__card-techs">
            {project.technologies.map((tech, i) => (
              <span key={i} className="projects__card-tech">{tech}</span>
            ))}
          </div>

          {project.isPrivate && (
            <p className="projects__card-note projects__dialog-note">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              {project.privateNote
                ? `${project.privateNote}.`
                : 'Private client codebase — source cannot be shared.'}
            </p>
          )}

          {(project.website || links.length > 0) && (
            <div className="projects__dialog-actions">
              {project.website && (
                <a
                  className="projects__dialog-cta"
                  href={project.website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.website.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <path d="M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              )}
              {links.map((link) => (
                <a
                  key={link.url}
                  className="projects__dialog-cta projects__dialog-cta--secondary"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [activeCategory, setActiveCategory] = useState('production');
  const [activePlatform, setActivePlatform] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [openProject, setOpenProject] = useState(null);

  const filteredProjects = ProjectsData.filter((project) => {
    const matchesCategory = project.tags.includes(activeCategory);
    const matchesPlatform =
      activePlatform === 'all' || project.tags.includes(activePlatform);
    return matchesCategory && matchesPlatform;
  });

  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + PAGE_SIZE);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, activePlatform]);

  return (
    <section className="projects" id="projects">
      <div className="projects__container section">
        <div className="projects__header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">projects</span>
          </h2>
          <p className="section-subtitle">
            Five production applications — four built for clients and one my own product —
            plus the university and self-study work that came before them.
          </p>
        </div>

        <div className="projects__filters">
          <div className="projects__filter-row" aria-label="Filter by platform">
            {platformFilters.map((filter) => (
              <button
                key={filter.key}
                className={`projects__filter projects__filter--platform ${
                  activePlatform === filter.key ? 'projects__filter--active' : ''
                }`}
                onClick={() => setActivePlatform(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div
            className="projects__filter-row projects__filter-row--end"
            aria-label="Filter by category"
          >
            {categoryFilters.map((filter) => (
              <button
                key={filter.key}
                className={`projects__filter ${
                  activeCategory === filter.key ? 'projects__filter--active' : ''
                }`}
                onClick={() => setActiveCategory(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="projects__empty">
            <svg className="projects__empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              <line x1="9" y1="13" x2="15" y2="13" />
            </svg>
            <h3 className="projects__empty-title">No projects yet</h3>
            <p className="projects__empty-text">
              No projects match this category and platform combination. Try a different one.
            </p>
          </div>
        ) : (
          <div className="projects__grid">
            {paginatedProjects.map((project) => {
              const hasLinks = project.links && project.links.length > 0;
              const isOpenSource =
                !project.isPrivate &&
                hasLinks &&
                project.links.some((link) => link.url.includes('github.com'));

              return (
                <div className="projects__card" key={project.index}>
                  <div className="projects__card-image">
                    <ProjectCover project={project} />
                    {hasLinks && (
                      <div className="projects__card-overlay">
                        {project.links.map((link, i) => (
                          <a
                            key={link.url}
                            href={link.url}
                            className={`projects__card-link ${
                              i > 0 ? 'projects__card-link--secondary' : ''
                            }`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                    )}
                    <span className={`projects__badge projects__badge--${project.ownership.tone}`}>
                      {project.ownership.label}
                    </span>
                  </div>

                  <div className="projects__card-content">
                    <div className="projects__card-heading">
                      <h3 className="projects__card-title">{project.title}</h3>
                      <span className="projects__card-date">{project.date}</span>
                    </div>
                    {project.subtitle && (
                      <p className="projects__card-subtitle">{project.subtitle}</p>
                    )}
                    <p className="projects__card-desc">{project.description}</p>

                    <div className="projects__card-techs">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="projects__card-tech">{tech}</span>
                      ))}
                    </div>

                    <div className="projects__card-footer">
                      {project.isPrivate ? (
                        <span className="projects__card-note">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" />
                            <path d="M7 11V7a5 5 0 0110 0v4" />
                          </svg>
                          {project.privateNote || 'Private client codebase'}
                        </span>
                      ) : isOpenSource ? (
                        <span className="projects__card-note">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                          </svg>
                          Source on GitHub
                        </span>
                      ) : (
                        <span className="projects__card-note">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          Documentation only
                        </span>
                      )}
                      <button
                        className="projects__card-eye"
                        onClick={() => setOpenProject(project)}
                        aria-label={`View details for ${project.title}`}
                        title="View details"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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

      {openProject && (
        <ProjectDialog project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </section>
  );
}

export default Projects;
