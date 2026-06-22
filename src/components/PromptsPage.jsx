import React from 'react';
import { episodes } from '../data/episodes';
import { standalonePromptsData } from '../data/standalonePrompts';

const PromptsPage = () => {
  return (
    <div className="prompts-page">
      <div className="prompts-container">
        <header className="prompts-header">
          <h1 className="prompts-title">Public Prompt Library</h1>
          <p className="prompts-subtitle">Every build starts somewhere.</p>
          <p className="prompts-intro">
            Browse the prompts behind my public builds, experiments, audits, fixes, and standalone projects. These are the actual prompts used to plan, build, debug, and launch real things with AI.
          </p>
        </header>

        <section className="prompts-category-section">
          <h2 className="prompts-category-label">Episode Prompts</h2>
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
        </section>

        <section className="prompts-category-section">
          <h2 className="prompts-category-label">Standalone Project Prompts</h2>
          {standalonePromptsData.map((item) => (
            <section key={item.label} className="prompts-section">
              <div className="prompts-card prompts-card-standalone">
                {item.category && (
                  <span className="prompts-category-pill">{item.category}</span>
                )}
                <h2 className="prompts-card-title">{item.title}</h2>
                <p className="prompts-card-description">
                  {item.description}
                </p>
                <div className="prompts-buttons">
                  <a href={item.primaryPrompt.file} target="_blank" rel="noreferrer" className="prompts-btn prompts-btn-primary">View</a>
                  <a href={item.primaryPrompt.file} download className="prompts-btn prompts-btn-secondary">Download</a>
                </div>
                {item.secondaryPrompt && (
                  <a href={item.secondaryPrompt.file} className="prompts-secondary-link">
                    {item.secondaryPrompt.title} →
                  </a>
                )}
              </div>
            </section>
          ))}
        </section>
      </div>
    </div>
  );
};

export default PromptsPage;
