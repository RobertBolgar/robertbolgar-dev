import React from 'react';
import { promptsData } from '../data/prompts';

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

        {promptsData.map((item) => (
          <section key={item.label} className="prompts-section">
            <p className="prompts-section-label">{item.label}</p>
            
            <div className="prompts-card">
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
      </div>
    </div>
  );
};

export default PromptsPage;
