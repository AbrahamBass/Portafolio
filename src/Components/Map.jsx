import React from 'react'
//Leaflet
import { MapContainer, TileLayer } from 'react-leaflet'

//Style
import 'leaflet/dist/leaflet.css'

// Import Components
import Markers from './Markers'

const Map = () => {
  return (
    <MapContainer 
    center={{lat: '11.232113', lng: '-74.195199'}}
    zoom={13}
    scrollWheelZoom={false}
    >
      <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' 
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers />
    </MapContainer>
  )
}

export default Map