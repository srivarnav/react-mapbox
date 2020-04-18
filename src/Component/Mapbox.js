import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1Ijoic3JpdmFybmF2IiwiYSI6ImNqaTAxejdkYTEwM2sza210ZGhrcmlsOWwifQ.qZxTBwGWgu0oq6-VSfOZxQ';

class Mapbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 28.632307,
            lng: 77.357795,
            zoom: 12
        }
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/dark-v9',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    render() {
        console.log(this.state.lat, this.state.lng);
        return (
            <div>
                <div>
                    <div className="sidebar" >Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div ref={el => this.mapContainer = el} className="mapContainer" style={{ position: 'absolute', top: '0', right: '0', left: '0', bottom: '0' }} />
            </div>
        )
    }
}

export default Mapbox;