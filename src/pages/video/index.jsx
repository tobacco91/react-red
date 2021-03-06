import React, { Component } from 'react'
export default class Loading extends Component {
    constructor() {
        super();
        this.state = {
            now: {}
        };
    }
    componentDidMount() {
        let mothod = {
            method: 'GET'
        }
        fetch('/red-wx/RedWeb/RedWeb/VideoUrl.php',mothod)
        .then(res => res.json())
        .then(data => {
            this.setState({now: data[this.props.match.params.id]})
            document.title = this.state.now.name;
        })
    }

    render() {
        const now = this.state.now;
        return (
        <div className="movie-list">
            <video controls="controls" data-x-webkit-airplay="true" data-playsinline=""
             data-webkit-playsinline="true" src={now.videourl} poster={now.picurl} style={{fontSize: '0px',width: '100%'}}></video>
        </div>
        )
    }
}