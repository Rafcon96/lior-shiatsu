import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

import './map.css'



const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const GoogleMap = ({
  location,
  zoomLevel,
  heading = "Come Visit Us At Our Clinic",
  locale = "he",
}) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  const hasApiKey = Boolean(apiKey)

  return (
    <div className="map">
      {heading ? (
        <h2 className="map-h2">{heading}</h2>
      ) : null}

      <div className="google-map">
        {hasApiKey ? (
          <GoogleMapReact
            defaultCenter={location}
            defaultZoom={zoomLevel}
            bootstrapURLKeys={{ key: apiKey, language: locale }}
            yesIWantToUseGoogleMapApiInternals
          >
            <LocationPin
              lat={location?.lat}
              lng={location?.lng}
              text={location?.address}
            />
          </GoogleMapReact>
        ) : (
          <div className="map-error">
            <p>
              כדי להציג את המפה יש להגדיר מפתח Google Maps (REACT_APP_GOOGLE_MAPS_API_KEY).
            </p>
            <p>
              Please configure a valid Google Maps API key to display the map.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default GoogleMap