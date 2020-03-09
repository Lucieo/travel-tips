import "mapbox-gl/dist/mapbox-gl.css"
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import React, { Component } from 'react'
import MapGL, {Marker} from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import {ReactComponent as Star} from '../../images/star.svg';

import './MapBoxMap.css'

const token = process.env.REACT_APP_MAPBOX_TOKEN 



class Geolocator extends Component {
  state = { 
    latitude: this.props.initialLatitude,
    longitude: this.props.initialLongitude,
    zoom: 10
  }

  componentDidUpdate(prevProps) {
    const { initialLatitude, initialLongitude } = this.props
    if (prevProps.initialLatitude !== initialLatitude || prevProps.initialLongitude!==initialLongitude) {
        this.setState(prevState=>({
            ...prevState,
            longitude: this.props.initialLongitude,
            latitude: this.props.initialLatitude
        }))
    }
   }


  mapRef = React.createRef()

  handleViewportChange = viewport => {
    this.setState({
      ...viewport
    })
  }

  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  handleOnResult = event => {
      const longitude = event.result.geometry.coordinates[0];
      const latitude = event.result.geometry.coordinates[1];
    this.setState(prevState=>({
        ...prevState,
        longitude,
        latitude
    }))
    this.props.onChangeHandler(longitude, latitude)
  }

    render(){
    
      return (
        <div className="mapBoxMap">
          <MapGL 
            ref={this.mapRef}
            {...this.state}
            width="100%"
            height="90%"
            onViewportChange={this.handleViewportChange}
            mapboxApiAccessToken={token}
            >
              {
                this.props.editMode &&
                <>
                    <Geocoder 
                    mapRef={this.mapRef}
                    onResult={this.handleOnResult}
                    onViewportChange={this.handleGeocoderViewportChange}
                    mapboxApiAccessToken={token}
                    position='top-left'
                    />
              </>
              }

              <Marker 
                    longitude={this.props.editMode ? this.state.longitude : this.props.initialLongitude }
                    latitude={this.props.editMode ? this.state.latitude : this.props.initialLatitude }
                >
                    <button>
                        <Star className="mapBoxMap__icon"/>
                    </button>
              </Marker>
            </MapGL>
        </div>
      )
    }
}

export default Geolocator;