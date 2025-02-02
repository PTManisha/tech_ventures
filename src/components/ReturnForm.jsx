import React, { useState } from "react";

// Global styles that apply the provided background image
const GlobalStyle = () => (
  <style>
    {`
      body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        background: url("https://media.istockphoto.com/id/1304090862/video/abstract-background.jpg?s=640x640&k=20&c=Jfb9RLrp8cUYX_6rmqUeItfqUCuLDT60NvwR8ZXBsTw=")
          no-repeat center center fixed;
        background-size: cover;
      }
    `}
  </style>
);

// Keyframe animation for fade in/up
const FadeInAnimation = () => (
  <style>
    {`
      @keyframes fadeInUp {
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

export default function ElectronicsReturnForm({ category, onBack }) {
  const [formData, setFormData] = useState({
    productID: "",
    productName: "",
    customerName: "",
    orderNumber: "",
    dateOfDelivery: "",
    images: [],
    condition: "",
    issues: [],
    malfunctioningParts: "",
    damageRating: "",
    functionalImpairments: "",
    powerOn: "",
    internalDamage: "",
    waterDamage: "",
    repairable: "",
    repairDescription: "",
    additionalComments: "",
    functionalImpairmentsDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...e.target.files],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div style={styles.wrapper}>
      <GlobalStyle />
      <FadeInAnimation />
      <div style={styles.container}>
        <h2 style={styles.heading}>{category} Return Form</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Product ID:</label>
            <input
              type="text"
              name="productID"
              value={formData.productID}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Product Name:</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Customer Name:</label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Order Number:</label>
            <input
              type="text"
              name="orderNumber"
              value={formData.orderNumber}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Date of Delivery:</label>
            <input
              type="date"
              name="dateOfDelivery"
              value={formData.dateOfDelivery}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Upload Product Images:</label>
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              accept="image/*"
              style={styles.fileInput}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Condition:</label>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              style={styles.select}
              required
            >
              <option value="">Select</option>
              <option value="New">New</option>
              <option value="Like New">Like New</option>
              <option value="Used">Used</option>
              <option value="Damaged">Damaged</option>
              <option value="Defective">Defective</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              Are there any functional impairments?
            </label>
            <select
              name="functionalImpairments"
              value={formData.functionalImpairments}
              onChange={handleChange}
              style={styles.select}
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {formData.functionalImpairments === "Yes" && (
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Describe functional impairments:
              </label>
              <textarea
                name="functionalImpairmentsDetails"
                value={formData.functionalImpairmentsDetails}
                onChange={handleChange}
                style={styles.textarea}
              />
            </div>
          )}

          <div style={styles.formGroup}>
            <label style={styles.label}>Additional Comments:</label>
            <textarea
              name="additionalComments"
              value={formData.additionalComments}
              onChange={handleChange}
              style={styles.textarea}
            />
          </div>

          <div style={styles.checkboxContainer}>
            <input type="checkbox" required style={styles.checkbox} />
            <label style={styles.checkboxLabel}>
              Confirm that all provided information is accurate
            </label>
          </div>

          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.submitButton}>
              Submit Assessment
            </button>
            <button type="button" onClick={onBack} style={styles.backButton}>
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  container: {
    background: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    padding: "30px 40px",
    maxWidth: "600px",
    width: "100%",
    animation: "fadeInUp 0.8s ease",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#555",
    marginBottom: "5px",
  },
  input: {
    padding: "10px 12px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    transition: "all 0.3s ease",
  },
  select: {
    padding: "10px 12px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    transition: "all 0.3s ease",
  },
  textarea: {
    padding: "10px 12px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    resize: "vertical",
    transition: "all 0.3s ease",
    minHeight: "80px",
  },
  fileInput: {
    fontSize: "14px",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "10px",
  },
  checkbox: {
    width: "16px",
    height: "16px",
  },
  checkboxLabel: {
    fontSize: "12px",
    color: "#555",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  backButton: {
    padding: "10px 20px",
    backgroundColor: "#d9534f",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
};

export { ElectronicsReturnForm };
