import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (role) => {
    setSelectedRole(role);
    alert(`You selected: ${role}`);
  };

  return (
    <div className="user-page">
      <header className="header">
        <h2>Login - Choose Your Role</h2>
      </header>
      <div className="cards-container">
        <div className="role-card admin-card" onClick={() => handleCardClick("Admin")}>
          <h3>Admin</h3>
        </div>
        <div className="role-card delivery-card" onClick={() => handleCardClick("Delivery")}>
          <h3>Delivery</h3>
        </div>
        <div className="role-card warehouse-card" onClick={() => handleCardClick("Warehouse")}>
          <h3>Warehouse</h3>
        </div>
        <div className="role-card user-card" onClick={() => navigate("/form")}>
          <h3>User</h3>
        </div>
      </div>

      <style>{`
        /* Google Font */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

        .user-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: linear-gradient(to bottom, #f0f0f0, #d9d9d9);
          font-family: 'Poppins', sans-serif;
        }

        .header {
          text-align: center;
          margin-bottom: 30px;
        }

        h2 {
          font-size: 28px;
          color: #333;
          font-weight: 600;
        }

        .cards-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          max-width: 600px;
          width: 100%;
          padding: 20px;
        }

        .role-card {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 15px;
          border-radius: 15px;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
          height: 160px;
          font-size: 22px;
          font-weight: 600;
          color: white;
        }

        .role-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .admin-card {
          background-color: #8e44ad;
        }

        .delivery-card {
          background-color: #3498db;
        }

        .warehouse-card {
          background-color: #27ae60;
        }

        .user-card {
          background-color: #f39c12;
        }

        /* Responsive */
        @media (max-width: 600px) {
          .cards-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default UserPage;

