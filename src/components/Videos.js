import React from "react";
import VideosItems from "./VideosItems";

const Videos = ({videos}) =>{
    const Rendered = videos.map((video)=>{
        return <VideosItems video={video}/>
    })
    return(
        <div className="ui relaxed divided list">{Rendered}</div>
    )
}
export default Videos;