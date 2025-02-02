// import React from "react";

// const categories = [
//   { name: "Return Analysis", icon: "https://cdn-icons-png.flaticon.com/128/11153/11153363.png" },
//   { name: "Route Optimization", icon: "https://cdn-icons-png.flaticon.com/128/10794/10794242.png" },
  
// ];

// export default function firstpage({ onSelectCategory }) {
//   return (
//     <div style={styles.container}>
//       <StyleInject />
//       <h2 style={styles.heading}>Select a Category</h2>
//       <div style={styles.cardContainer}>
//         {categories.map((category) => (
//           <div
//             key={category.name}
//             className="card"
//             style={styles.card}
//             onClick={() => onSelectCategory(category.name)}
//           >
//             <img src={category.icon} alt={category.name} style={styles.icon} />
//             <span style={styles.cardText}>{category.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     backgroundColor: "#fff",
//     padding: "50px 20px",
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     fontFamily: "'Roboto', sans-serif",
//   },
//   heading: {
//     fontSize: "36px",
//     fontWeight: "700",
//     color: "#333",
//     marginBottom: "30px",
//     textAlign: "center",
//   },
//   cardContainer: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "20px",
//     justifyContent: "center",
//   },
//   card: {
//     backgroundColor: "#578FCA",
//     borderRadius: "12px",
//     padding: "30px 40px",
//     minWidth: "350px",
//     textAlign: "center",
//     cursor: "pointer",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     minHeight:"300px"
//   },
//   cardText: {
//     color: "#fff",
//     fontSize: "30px",
//     fontWeight: "600",
//     marginTop: "15px",
//   },
//   icon: {
//     width: "100px",
//     height: "100px",
//   },
// };

// const StyleInject = () => (
//   <style>
//     {`
//       .card:hover {
//         transform: scale(1.05);
//         box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//       }
//       .card {
//         animation: fadeIn 0.8s ease-in-out;
//       }
//       @keyframes fadeIn {
//         from {
//           opacity: 0;
//           transform: translateY(20px);
//         }
//         to {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       }
//     `}
//   </style>
// );

// export { firstpage };
import React from "react";

const categories = [
  { name: "Return Analysis", icon: "https://cdn-icons-png.flaticon.com/128/11153/11153363.png" },
  { name: "Route Optimization", icon: "https://cdn-icons-png.flaticon.com/128/10794/10794242.png" },
];

export default function FirstPage({ onSelectCategory }) {
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
            onClick={() => {
              // Handle category selection and navigate
              if (category.name === "Return Analysis") {
                onSelectCategory("Return Analysis");
              } else if (category.name === "Route Optimization") {
                onSelectCategory("Route Optimization");
              }
            }}
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
    minWidth: "350px",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "300px",
  },
  cardText: {
    color: "#fff",
    fontSize: "30px",
    fontWeight: "600",
    marginTop: "15px",
  },
  icon: {
    width: "100px",
    height: "100px",
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
