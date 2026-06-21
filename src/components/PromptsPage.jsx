import React from 'react';
import { episodes } from '../data/episodes';

const PromptsPage = () => {
  return (
    <div className="prompts-page">
      <div className="prompts-container">
        <header className="prompts-header">
          <h1 className="prompts-title">Initial ChatGPT Prompts</h1>
          <p className="prompts-subtitle">Every project starts with a prompt.</p>
          <p className="prompts-intro">
            These are the original ChatGPT prompts used to define projects, establish direction, and begin the public building process before Devin starts executing.
          </p>
        </header>

        {episodes.map((episode) => (
          <section key={episode.episode} className="prompts-section">
            <p className="prompts-section-label">{episode.episode}</p>
            
            <div className="prompts-card">
              <h2 className="prompts-card-title">{episode.promptPageTitle || episode.title}</h2>
              <p className="prompts-card-description">
                {episode.promptPageDescription || episode.description}
              </p>
              {episode.promptFiles.length > 0 && (
                <>
                  <div className="prompts-buttons">
                    <a href={episode.promptFiles[0].file} target="_blank" rel="noreferrer" className="prompts-btn prompts-btn-primary">View</a>
                    <a href={episode.promptFiles[0].file} download className="prompts-btn prompts-btn-secondary">Download</a>
                  </div>
                  {episode.promptFiles.length > 1 && (
                    <a href={episode.promptFiles[1].file} className="prompts-secondary-link">
                      {episode.promptFiles[1].title} →
                    </a>
                  )}
                </>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default PromptsPage;
