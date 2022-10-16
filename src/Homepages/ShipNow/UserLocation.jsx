import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

class UserLocation extends Component {
    constructor(props) {
        super();
        this.state = {
            name: "React"
        };
    }

    componentDidMount() {
        if ("geolocation" in navigator) {
            console.log("Available");
        } else {
            console.log("Not Available");
        }
        navigator.geolocation.getCurrentPosition(
            function(position) {
              console.log(position);
            },
            function(error) {
              console.error("Error Code = " + error.code + " - " + error.message);
            }
          );
    }
    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: 'YOUR_LATITUDE',
                        lng: ' YOUR_LONGITUDE'
                    }}
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'This is test name'}
                    />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'API_KEY'
})(UserLocation);