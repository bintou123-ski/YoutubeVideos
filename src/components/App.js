import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import Videos from "./Videos";
import VideoDetails from "./VideoDetails";


class App extends React.Component{
    state={videos:[], selectedVideo :null}

      onTermSubmit= async term =>{
        const response = await youtube.get('/search', {
           params:{
               q:term
           }
       })
       this.setState({
           videos:response.data.items,
        selectedVideo:response.data.items[0]
    })
    };
    onVideoSelect =(video)=>{
       this.setState({SelectedVideo:video})
    };
    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column"> 
                        <VideoDetails video={this.state.SelectedVideo}/>
                         </div>
                       <div className="five wide column">
                           <Videos onVideoSelect={this.onVideoSelect}
                            videos={this.state.videos}/>
                       </div>
                    </div>
                </div>
              
                
            </div>
        )
    }
}
export default App;