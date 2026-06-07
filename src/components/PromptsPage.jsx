import React from 'react';

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

        <section className="prompts-section">
          <p className="prompts-section-label">Episode 01</p>
          
          <div className="prompts-card">
            <h2 className="prompts-card-title">The Prompt That Started Episode 01</h2>
            <p className="prompts-card-description">
              The original ChatGPT prompt used to define the robertbolgar.dev rebuild, establish the public-building direction, and generate the Devin prompts used throughout the episode.
            </p>
            <div className="prompts-buttons">
              <a href="/prompts/ep01/initial-chatgpt-prompt.txt" target="_blank" rel="noreferrer" className="prompts-btn prompts-btn-primary">View</a>
              <a href="/prompts/ep01/initial-chatgpt-prompt.txt" download className="prompts-btn prompts-btn-secondary">Download</a>
            </div>
            <a href="/prompts/ep01/episode-01-prompts.txt" className="prompts-secondary-link">
              Complete Episode 01 Prompt Archive →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PromptsPage;
