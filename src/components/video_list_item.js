import React from 'react';
//props is an object
const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

//By calling video in the VideoListItem, we are saying that video is now a variable and is exactly like writing const video = props.video; It's like saying this object in the argument parans has a property called video, please grab that video and declare a new variable called video.
export default VideoListItem;
