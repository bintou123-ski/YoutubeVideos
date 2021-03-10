import React from "react";
import VideosItems from "./VideosItems";

const Videos = ({videos,onVideoSelect}) =>{
    const Rendered = videos.map((video)=>{
        return <VideosItems 
        key={video.id.videoId} 
        onVideoSelect={onVideoSelect}
         video={video}/>
    })
    return(
        <div className="ui relaxed divided list">{Rendered}</div>
    )
}
export default Videos;