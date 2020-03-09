import React, { Component } from 'react';
import MapBoxMap from '../../../components/Maps/MapBoxMap';

import Image from '../../../components/Image/Image';
import './PostDetail.css';

class SinglePost extends Component {
  state = {
    title: '',
    author: '',
    date: '',
    image: '',
    content: '',
    longitude:2.3488,
    latitude:48.8534
  };

  componentDidMount() {
    const postId = this.props.match.params.postId;
    fetch(process.env.REACT_APP_TRAVEL_API+'feed/post/'+postId, {
      headers: {
        Authorization: 'Bearer '+this.props.token
      }
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Failed to fetch status');
        }
        return res.json();
      })
      .then(resData => {
        this.setState({
          title: resData.post.title,
          author: resData.post.creator.name,
          image: process.env.REACT_APP_TRAVEL_API+resData.post.imageUrl,
          date: new Date(resData.post.createdAt).toLocaleDateString('en-US'),
          content: resData.post.content,
          latitude: +resData.post.latitude,
          longitude: +resData.post.longitude
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <section className="single-post">
        <h1>{this.state.title}</h1>
        <h2>
          Created by {this.state.author} on {this.state.date}
        </h2>
        <div className="single-post__image">
          <Image contain imageUrl={this.state.image} />
        </div>
        <p>{this.state.content}</p>
        <div>
          <MapBoxMap 
          initialLatitude={this.state.latitude} 
          initialLongitude={this.state.longitude}/>
        </div>
      </section>
    );
  }
}

export default SinglePost;
