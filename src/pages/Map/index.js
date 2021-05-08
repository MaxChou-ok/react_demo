import React from 'react'
import './index.css'

export default class Map extends React.Component {
    componentDidMount(){
        var map = new window.BMapGL.Map("container");
        var point = new window.BMapGL.Point(116.404, 39.915);
        map.centerAndZoom(point, 15);
    }
    render(){
        return (
            <div className="map">
                 <div id="container"></div>
            </div>
        )
    }
} 