//27 detail component and template strings

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// hash this api key you fuckin idiot
const API_KEY = 'AIzaSyDCnCs52WVxuhn4Wvlofa2s-1sg6ezoSnM';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null 
		};

		YTSearch({key: API_KEY, term: 'ReactJS'}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video = {this.state.selectedVideo} />
				<VideoList
					onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
					videos = {this.state.videos} />
			</div>
		);
	}
}


// take said component's generated html and inject it to the dom

ReactDOM.render(<App />, document.querySelector('.container'));













