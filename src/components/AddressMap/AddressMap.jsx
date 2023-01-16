import { useCallback, useState, memo } from 'react'
import { GoogleMap, useJsApiLoader, Marker, StandaloneSearchBox } from '@react-google-maps/api'
import { MapNotLoad } from './AddressMap.style'
import API_KEYS from '../../config/public-api-keys'

const containerStyle = {
  width: '400px',
  height: '400px'
}

const startPoint = {
  // Pereiro
  lat: -6.0460626,
  lng: -38.4608898
}

function AddressMap() {

  const [mapDelivery, setMapDelivery] = useState(null)
  const [searchBox, setSearchBox] = useState()
  const [libraries] = useState(['places'])
  const [makerPoint, setMakerPoint] = useState(startPoint)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEYS.GoogleMaps.apiKey,
    libraries,
  })

  const onLoad = useCallback(function callback(map) {

    const bounds = new window.google.maps.LatLngBounds(startPoint);
    map.fitBounds(bounds);

    setMapDelivery(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMapDelivery(null)
  }, [])

  const onLoadSearchBox = ref => setSearchBox(ref)
  const onPlacesChanged = () => {
    let place = searchBox.getPlaces()[0]
    setMakerPoint({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    })

  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={makerPoint}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={
        {
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          overviewMapControl: false,
        }
      }
    >
      <StandaloneSearchBox
        onLoad={onLoadSearchBox}
        onPlacesChanged={
          onPlacesChanged
        }
      >
        <input
          type="text"
          placeholder="Digiteo endereço de entrega"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `320px`,
            height: `40px`,
            padding: `0 12px`,
            borderRadius: `px`,
            boxShadow: `0 1px 2px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            position: "absolute",
            left: "10px",
            top: "10px",
          }}
        />
      </StandaloneSearchBox>
      <Marker
        position={makerPoint}
        animation={window.google.maps.Animation.DROP}
      />
    </GoogleMap>
  ) : <MapNotLoad />
}

export default memo(AddressMap)