import React, {PureComponent} from 'react';
import {propTypes} from './city-map.props';
import leaflet from 'leaflet';

class CityMap extends PureComponent {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.city = this.props.cityLocation;
    this.zoom = this.props.zoom;
    this.map = null;
    this.icon = leaflet.icon({
      iconUrl: `img/icon-marker.svg`,
      iconSize: [27, 39],
    });
  }

  renderOffers(cityLocation, offersLocations = [], zoom = 12) {
    this.map.setView(cityLocation, zoom);
    offersLocations.forEach((location) => {
      const icon = this.icon;
      leaflet
      .marker(location, {icon})
      .addTo(this.map);
    });
  }

  componentDidMount() {
    this.map = leaflet.map(this.containerRef.current, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    this.renderOffers(this.props.cityLocation, this.props.locations, this.props.zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);
  }

  componentDidUpdate() {
    this.renderOffers(this.props.cityLocation, this.props.locations, this.props.zoom);
  }

  render() {
    return <div id="map" style={{
      width: `100%`,
      minHeight: `800px`,
      height: `100%`,
    }} ref={this.containerRef}></div>;
  }
}

CityMap.propTypes = propTypes;

export default CityMap;
