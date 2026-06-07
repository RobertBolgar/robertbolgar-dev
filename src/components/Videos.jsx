import React from 'react';

const Videos = () => {
  const episodes = [
    {
      episode: 'EP 01',
      title: 'Building My Website Live With AI',
      date: 'June 2026',
      description: 'Turning robertbolgar.dev from a placeholder site into the public home base for my building journey.',
      youtubeUrl: 'https://youtube.com',
      videoId: null,
      prompts: [
        {
          title: 'Website Build Thread Prompt',
          file: '/prompts/ep01/website-build-thread.txt'
        },
        {
          title: 'Hero Section Prompt',
          file: '/prompts/ep01/hero-section.txt'
        }
      ]
    }
  ];

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
                <h4 className="video-prompts-heading">Prompts Used This Episode</h4>
                <div className="video-prompt-list">
                  {episode.prompts.map((prompt) => (
                    <div key={prompt.file} className="video-prompt">
                      <span>{prompt.title}</span>
                      <div className="video-prompt-actions">
                        <a href={prompt.file} target="_blank" rel="noreferrer">View</a>
                        <a href={prompt.file} download>Download</a>
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
