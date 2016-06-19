import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />  
  }); 
//going through each video and providing it with a key known as an etag(element tag). this means that each video has a key so that react can update the appropriate record in a speedy fashion.
  return (
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );
};


export default VideoList;
