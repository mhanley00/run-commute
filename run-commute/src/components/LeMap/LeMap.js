import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
// import Geocoder from '@mapbox/react-geocoder'
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
        
  <Map
  //logoPosition='top-left' //
  // attributionControl='false' // BOOLEAN, can't get to go against default setting
  style="mapbox://styles/mapbox/outdoors-v9"
  // logoPosition='top-right'
  center={[longitude, latitude]} //this line gets state from lng/lat, browser location
  //NOTE THIS IS LONG/LAT, NOT LAT/LONG 
  // center={[-77.0369, 38.9072]} DEFAULT FOR DC
  zoom={[15]}
  containerStyle={{
    height: "100vh", //ie 100% of the screen, might want to reduce in future so there's space for a nav bar
    width: "100vw"
  }}
  >
  <ZoomControl
  position='top-left' //this is the +/- box for zooming in and out 
  />
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[longitude, latitude]}/>
    </Layer>
  <Layer>
  <div className='floating-panel'><p>{[latitude, longitude]}</p></div>
  </Layer>
  {/* <Geocoder
  accessToken='pk.eyJ1IjoibWhhbmxleTAwIiwiYSI6ImNqcDV1OGIxNzE3anYzcW9ia2oxNndtamsifQ.aiLhDn2SdxLh0LwY6PA-Sw'
  // onSelect=required function
  // onSuggest=optional function
  // source=optional string, default 'mapbox.places'
  // endpoint=optional string, default 'http://api.tiles.mapbox.com'
  // inputClass=optional string, default ''
  // inputPlaceholder=optional string, default 'Search'
  // resultClass=optional string, default ''
  // resultsClass=optional string, default ''
  // showLoader=optional string, default ''
  // inputPosition=optional string, default 'top', can be 'bottom'
  // resultFocusClass=optional string, default 'strong'
  // proximity=optional string, default '',
  // bbox=optional string, default '',
  // types=optional string, default '',
  // focusOnMount=optional bool, default true
  /> */}
  {/* <div className='floating-panel'/> */}
</Map>
</div>
    );};}
  export default LeMap;