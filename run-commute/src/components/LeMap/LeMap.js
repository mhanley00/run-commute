import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
// import "./LeMap.css";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoibWhhbmxleTAwIiwiYSI6ImNqcDV1OGIxNzE3anYzcW9ia2oxNndtamsifQ.aiLhDn2SdxLh0LwY6PA-Sw"
});

class LeMap extends Component {
  constructor() {
    super()

    this.state = {
      latitude: '',
      longitude: '',
    }

    this.getMyLocation = this.getMyLocation.bind(this)
  }
  
  componentDidMount() {
    this.getMyLocation()
  }

  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation
    
    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }

  }

  render() { //part of Component
    const { latitude, longitude } = this.state

    return (
  <div>
        
  {/* <p>{[latitude, longitude]}</p> */}
  <Map
  style="mapbox://styles/mapbox/streets-v9"
  // logoPosition='top-right'
  center={[longitude, latitude]}
  // center={[-77.0369, 38.9072]} DEFAULT FOR DC
  zoom={[15]}
  containerStyle={{
    height: "100vh",
    width: "100vw"
  }}>
  <ZoomControl
  position='bottom-left'  
  />
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[longitude, latitude]}/>
    </Layer>
  <div className='floating-panel'/>
</Map>
</div>
    );};}
  export default LeMap;