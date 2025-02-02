

// import React from 'react';

// const MapEmbed = () => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7774.774513629938!2d80.233841!3d13.010993400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679f95f8606b%3A0xe1f0081f73a3c0bc!2sAnna%20University%2C%20Kotturpuram%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1738417863950!5m2!1sen!2sin"
//         width="400"
//         height="300"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         title="Map Location"
//       ></iframe>
//     </div>
//   );
// };

// export default MapEmbed;



import React from "react";

const categories = [
  { name: "Electronics", icon: "https://img.icons8.com/ios-filled/50/ffffff/laptop.png" },
  { name: "Clothing", icon: "https://img.icons8.com/ios-filled/50/ffffff/t-shirt.png" },
  { name: "Furniture", icon: "https://img.icons8.com/ios-filled/50/ffffff/chair.png" },
  { name: "Books", icon: "https://img.icons8.com/ios-filled/50/ffffff/book.png" },
  { name: "Footwear", icon: "https://img.icons8.com/ios-filled/50/ffffff/sneakers.png" },
  { name: "Cosmetics", icon: "https://img.icons8.com/ios-filled/50/ffffff/lipstick.png" },
  { name: "Accessories", icon: "https://img.icons8.com/ios-filled/50/ffffff/necklace.png" },
  { name: "Sports Equipment", icon: "https://img.icons8.com/ios-filled/50/ffffff/basketball.png" },
  { name: "Toys", icon: "https://img.icons8.com/ios-filled/50/ffffff/teddy-bear.png" },
  { name: "Kitchenware", icon: "https://img.icons8.com/ios-filled/50/ffffff/cooking-pot.png" },
];

export default function CategorySelection({ onSelectCategory }) {
  return (
    <div style={styles.container}>
      <StyleInject />
      <h2 style={styles.heading}>Select a Category</h2>
      <div style={styles.cardContainer}>
        {categories.map((category) => (
          <div
            key={category.name}
            className="card"
            style={styles.card}
            onClick={() => onSelectCategory(category.name)}
          >
            <img src={category.icon} alt={category.name} style={styles.icon} />
            <span style={styles.cardText}>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#fff",
    padding: "50px 20px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "'Roboto', sans-serif",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#333",
    marginBottom: "30px",
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#578FCA",
    borderRadius: "12px",
    padding: "30px 40px",
    minWidth: "200px",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "15px",
  },
  icon: {
    width: "50px",
    height: "50px",
  },
};

const StyleInject = () => (
  <style>
    {`
      .card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }
      .card {
        animation: fadeIn 0.8s ease-in-out;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
  </style>
);

export { CategorySelection };
