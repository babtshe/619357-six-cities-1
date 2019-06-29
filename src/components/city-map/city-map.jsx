import React, {PureComponent} from 'react';
import {propTypes} from './city-map.props';
import leaflet from 'leaflet';

const Marker = {
  DEFAULT_URL: `img/icon-marker.svg`,
  ACTIVE_URL: `img/icon-marker-active.svg`,
  ICON_SIZE: [27, 39],
};

const DEFAULT_ZOOM = 12;

class CityMap extends PureComponent {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.city = this.props.cityLocation;
    this.zoom = this.props.zoom;
    this.map = null;
    this.activeLocation = this.props.activeLocation || [];
    this.icon = leaflet.icon({
      iconUrl: Marker.DEFAULT_URL,
      iconSize: Marker.ICON_SIZE,
    });
    this.activeIcon = leaflet.icon({
      iconUrl: Marker.ACTIVE_URL,
      iconSize: Marker.ICON_SIZE,
    });
    this.markerLayerGroup = null;
  }

  renderOffers(cityLocation, offersLocations = [], zoom = DEFAULT_ZOOM, activeLocation) {
    if (this.markerLayerGroup) {
      this.markerLayerGroup.clearLayers();
    }
    if (cityLocation === this.city && activeLocation) {
      this.map.setView(activeLocation, zoom);
    } else {
      this.city = cityLocation;
      this.map.setView(cityLocation, zoom);
    }
    const markers = offersLocations.map((location) => {
      const icon = (location === activeLocation) ? this.activeIcon : this.icon;
      return leaflet.marker(location, {icon});
    });
    this.markerLayerGroup = leaflet
    .layerGroup(markers)
    .addTo(this.map);
  }

  componentDidMount() {
    this.map = leaflet.map(this.containerRef.current, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    this.renderOffers(this.props.cityLocation, this.props.locations, this.props.zoom, this.props.activeLocation);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);
  }

  componentDidUpdate() {
    this.renderOffers(this.props.cityLocation, this.props.locations, this.props.zoom, this.props.activeLocation);
  }

  render() {
    return <div id="map" style={{
      width: `100%`,
      height: `100%`,
    }} ref={this.containerRef}></div>;
  }

}

CityMap.propTypes = propTypes;

export default CityMap;
