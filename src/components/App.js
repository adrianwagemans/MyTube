import React from "react";
import Youtube from "./API/Youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
      this.submitSeacrchTerm('YES - Owner of a Lonely Heart (Official Music Video)')
  };

  submitSeacrchTerm = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });

    

    this.setState({ videos: response.data.items,
                    selectedVideo:response.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
    
      <div className="ui container">
        <img src='./images/MyTube(1).png' />
        <SearchBar submitSeacrchTerm={this.submitSeacrchTerm} />
        <div className="ui grid">
          <div className="ui row">
              <div className='detail eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
              </div>
            <div className='five wide column'>
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
