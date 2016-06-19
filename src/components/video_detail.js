import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }
//We write the if statement because React loves to render things immediately. Beacuse of this, video hasn't had time to render because parent objects are rendering too quickly. We add the if statement to give the video time to render and therefore the object will have an ID by the time the code is read. 
//In the if statement we're saying, if there is no video, return a div that says loading.
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
//We have to use backticks because in ES6 this is how you use string interpulation. This is also the reason for the $ sign.
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={ url }></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;
