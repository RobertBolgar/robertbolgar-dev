import React from 'react';

const Videos = () => {
  const videos = [
    {
      episode: 'Episode 1',
      title: 'Building the Home Base',
      description: 'Setting up the foundation for documenting the public building journey.',
      status: 'Published'
    },
    {
      episode: 'Episode 2',
      title: 'Rebuilding HolidayName From Scratch',
      description: 'Taking a failed project and rebuilding it with cleaner architecture.',
      status: 'In Progress'
    },
    {
      episode: 'Episode 3',
      title: 'Lessons From Shipping With AI',
      description: 'What I learned from building and launching products with AI assistance.',
      status: 'Planned'
    }
  ];

  return (
    <section id="videos" className="videos">
      <div className="section-container">
        <p className="section-eyebrow">VIDEOS</p>
        <h2 className="section-heading">Latest Videos</h2>
        <p className="section-copy">
          Follow the process as I plan, build, test, launch, and improve real products using modern AI tools.
        </p>
        <div className="video-grid">
          {videos.map((video, index) => (
            <div key={index} className="video-card">
              <span className="video-episode">{video.episode}</span>
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.description}</p>
              <span className={`video-status video-status-${video.status.toLowerCase().replace(' ', '-')}`}>
                {video.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
