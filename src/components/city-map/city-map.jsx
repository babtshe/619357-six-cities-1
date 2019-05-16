import React, {PureComponent} from 'react';
import {propTypes} from './city-map.props';
import leaflet from 'leaflet';

class CityMap extends PureComponent {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.locations.length) {
      const city = [52.38333, 4.9];
      const icon = leaflet.icon({
        iconUrl: `img/icon-marker.svg`,
        iconSize: [27, 39],
      });
      const zoom = 12;
      const map = leaflet.map(this.containerRef.current, {
        center: city,
        zoom,
        zoomControl: false,
        marker: true
      });
      map.setView(city, zoom);

      leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

      this.props.locations.forEach((location) => {
        leaflet
        .marker(location, {icon})
        .addTo(map);
      });
    }
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

export {CityMap};
