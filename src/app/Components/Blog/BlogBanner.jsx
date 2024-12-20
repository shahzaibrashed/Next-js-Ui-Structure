import React from 'react';

const BlogBanner = () => {
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4"
            type="video/hd"
            autoPlay
            muted
            loop
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 px-6 space-y-6 xl:w-3/5 lg:w-4/5 mx-auto">
          <h1 className="text-3xl md:text-6xl font-seriff font-bold leading-tight">
            Creativity has no limits. Why should we?
          </h1>
          <p className="text-lg md:text-2xl font-light font-seriff">
            Discover the innovative and impactful projects we've built, showcasing
            our expertise and creativity in solving real-world challenges.
          </p>
        </div>
      </section>
    </>
  );
};

export default BlogBanner;
