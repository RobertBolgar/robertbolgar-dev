import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'robertbolgar.dev',
      description: 'The home base for the public building journey, videos, projects, and devlog updates.',
      status: 'In Progress'
    },
    {
      name: 'HolidayName',
      description: 'A simple, shareable web app being rebuilt from scratch with a cleaner foundation.',
      status: 'Planned',
      link: 'https://holidayname.com'
    },
    {
      name: 'TubeLinkr',
      description: 'A creator-focused link and video hub project built around YouTube workflows.',
      status: 'Existing Project',
      link: 'https://rob.tubelinkr.com/invite/c1'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <p className="section-eyebrow">PROJECTS</p>
        <h2 className="section-heading">Projects I'm Building</h2>
        <p className="section-copy">
          A running record of the products, experiments, and tools being built publicly on the channel.
        </p>
        <div className="project-grid">
          {projects.map((project, index) => (
            project.link ? (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-card"
              >
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <span className={`project-status project-status-${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </a>
            ) : (
              <div key={index} className="project-card">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <span className={`project-status project-status-${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
