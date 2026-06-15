import React from 'react';
import { episodes } from '../data/episodes';

const Videos = () => {

  const getThumbnailUrl = (videoId) => {
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }

    return '/icons.svg';
  };

  return (
    <section id="videos" className="videos">
      <div className="section-container">
        <p className="section-eyebrow">VIDEOS</p>
        <h2 className="section-heading">Latest Videos</h2>
        <p className="section-copy">
          Follow the process as I plan, build, test, launch, and improve real products using modern AI tools.
        </p>
        <div className="video-grid">
          {episodes.map((episode) => (
            <div key={episode.episode} className="video-card">
              <a
                href={episode.youtubeUrl}
                className="video-thumbnail"
                target="_blank"
                rel="noreferrer"
                aria-label={`Watch ${episode.title} on YouTube`}
              >
                <img src={getThumbnailUrl(episode.videoId)} alt={`${episode.title} thumbnail`} />
                <span className="video-thumbnail-overlay">Watch on YouTube</span>
              </a>
              <div className="video-meta">
                <span className="video-episode">{episode.episode}</span>
                <span className="video-date">{episode.date}</span>
              </div>
              <h3 className="video-title">{episode.title}</h3>
              <p className="video-description">{episode.description}</p>
              <a href={episode.youtubeUrl} className="video-watch" target="_blank" rel="noreferrer">
                Watch on YouTube
              </a>
              <div className="video-prompts">
                <h4 className="video-prompts-heading">PROMPT RESOURCES</h4>
                <div className="video-prompt-list">
                  {episode.promptFiles.map((prompt) => (
                    <div key={prompt.file} className="video-prompt-card">
                      <div className="video-prompt-info">
                        <span className="video-prompt-title">{prompt.title}</span>
                        <span className="video-prompt-description">{prompt.description}</span>
                      </div>
                      <div className="video-prompt-actions">
                        <a href={prompt.file} target="_blank" rel="noreferrer" className="video-prompt-btn">View</a>
                        <a href={prompt.file} download className="video-prompt-btn">Download</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
