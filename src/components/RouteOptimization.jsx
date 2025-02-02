import React, { useState } from "react";

const RouteOptimization = () => {
  const [location, setLocation] = useState("");

  // Placeholder function to simulate finding nearby hubs (could be replaced with real logic)
  const findNearbyHubs = () => {
    alert(`Finding nearby hubs for the location: ${location}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.heading}>Route Optimization for Delivery</h2>
        <p style={styles.subheading}>
          Find the best routes to nearby delivery hubs and improve your efficiency.
        </p>
      </div>
      
      <div style={styles.searchContainer}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your current location"
          style={styles.locationInput}
        />
        <button style={styles.findButton} onClick={findNearbyHubs}>
          Find Nearby Hubs
        </button>
      </div>
      
      <div style={styles.mainContent}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Optimize Delivery Routes</h3>
          <p style={styles.cardDescription}>
            Input your current location, and we'll find the best route to your
            nearest hubs for faster deliveries.
          </p>
          <div style={styles.cardAction}>
            <button style={styles.button}>Get Optimized Route</button>
          </div>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>View Delivery Hub Details</h3>
          <p style={styles.cardDescription}>
            See detailed information about each nearby hub, including operating
            hours, services, and contact info.
          </p>
          <div style={styles.cardAction}>
            <button style={styles.button}>View Hub Details</button>
          </div>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Track Your Deliveries</h3>
          <p style={styles.cardDescription}>
            Keep track of your deliveries in real-time and manage your route
            effectively.
          </p>
          <div style={styles.cardAction}>
            <button style={styles.button}>Track Deliveries</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f4f7f9",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "'Roboto', sans-serif",
    padding: "50px 20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#333",
  },
  subheading: {
    fontSize: "20px",
    fontWeight: "400",
    color: "#555",
    marginTop: "10px",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "40px",
  },
  locationInput: {
    padding: "12px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    width: "300px",
  },
  findButton: {
    backgroundColor: "#578FCA",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  mainContent: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    minWidth: "250px",
    maxWidth: "350px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "280px",
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#2a2a2a",
    marginBottom: "15px",
  },
  cardDescription: {
    fontSize: "16px",
    color: "#777",
    marginBottom: "25px",
  },
  cardAction: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#578FCA",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default RouteOptimization;
