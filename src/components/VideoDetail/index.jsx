import React from 'react';
import isEmpty from '../../utils/isEmpty';

const VideoDetail = ({ video }) => {

  //  Handle null prop
  if (isEmpty(video)) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="Video Player" />
      </div>
      <div className="ui segment">
        <div className="ui header">{video.snippet.title}</div>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
