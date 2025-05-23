import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 4.60971, // Coordenadas ejemplo (Bogotá)
  lng: -74.08175,
};

function Map() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d67208.9947942713!2d-75.186176!3d4.440064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sco!4v1747972523536!5m2!1ses!2sco"
        width="450"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación en Google Maps"
      ></iframe>
    </div>
  );
}

export default Map;
