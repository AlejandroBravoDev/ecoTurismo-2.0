import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

//marco los limites a risaralda
const RISARALDA_CENTER = [4.815, -75.69];
const RISARALDA_BOUNDS = [
  // coords
  [4.6, -76.2],
  [5.8, -75.4],
];

function MapaRisaralda() {
  const position = [4.815, -75.69];
  const zoomLevel = 9;

  useEffect(() => {
    const DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={zoomLevel}
      scrollWheelZoom={true}
      maxBounds={RISARALDA_BOUNDS} //LLamo mi constante
      minZoom={8} //Evita que el usuario se mueva por fuera de Risaralda
      maxZoom={18} //Pongo un zoom maximo
      style={{
        height: "800px",
        width: "100%",
        borderRadius: "8px",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default MapaRisaralda;
