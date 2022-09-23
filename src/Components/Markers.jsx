import React from 'react'

// Leaflet
import {Marker} from 'react-leaflet'

// Import Components
import {IconLocation} from './IconLocation'


const Markers = () => {
  return (
    <Marker position={{lat: '11.232113', lng: '-74.195199'}} icon={IconLocation}/>
  )
}

export default Markers