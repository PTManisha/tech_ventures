// // // // src/components/FormComponent.jsx
// // // import { useState } from "react";
// // // import { collection, addDoc } from "firebase/firestore";
// // // import { db } from "../firebase";

// // // const FormComponent = () => {
// // //   const [formData, setFormData] = useState({ name: "", description: "" });

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await addDoc(collection(db, "items"), formData);
// // //       alert("Data added successfully!");
// // //       setFormData({ name: "", description: "" });
// // //     } catch (error) {
// // //       console.error("Error adding document: ", error);
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <input
// // //         type="text"
// // //         name="name"
// // //         placeholder="Name"
// // //         value={formData.name}
// // //         onChange={handleChange}
// // //         required
// // //       />
// // //       <input
// // //         type="text"
// // //         name="description"
// // //         placeholder="Description"
// // //         value={formData.description}
// // //         onChange={handleChange}
// // //         required
// // //       />
// // //       <button type="submit">Submit</button>
// // //     </form>
// // //   );
// // // };

// // // export default FormComponent;

// // import { useState } from "react";
// // import { jsPDF } from "jspdf";  // Import jsPDF

// // const FormComponent = () => {
// //   const [formData, setFormData] = useState({ name: "", description: "" });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Generate the PDF
// //     const doc = new jsPDF();
// //     doc.text("Item Details", 20, 10);
// //     doc.text(`Name: ${formData.name}`, 20, 20);
// //     doc.text(`Description: ${formData.description}`, 20, 30);

// //     // Trigger PDF download
// //     doc.save(`${formData.name}_details.pdf`);

// //     // Clear the form after submission
// //     setFormData({ name: "", description: "" });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input
// //         type="text"
// //         name="name"
// //         placeholder="Name"
// //         value={formData.name}
// //         onChange={handleChange}
// //         required
// //       />
// //       <input
// //         type="text"
// //         name="description"
// //         placeholder="Description"
// //         value={formData.description}
// //         onChange={handleChange}
// //         required
// //       />
// //       <button type="submit">Download PDF</button>
// //     </form>
// //   );
// // };

// // export default FormComponent;


// import { useState } from "react";
// import { jsPDF } from "jspdf";  // Import jsPDF
// import { storage, db } from "../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { collection, addDoc } from "firebase/firestore";

// const FormComponent = () => {
//   const [formData, setFormData] = useState({ name: "", description: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Generate the PDF
//     const doc = new jsPDF();
//     doc.text("Item Details", 20, 10);
//     doc.text(`Name: ${formData.name}`, 20, 20);
//     doc.text(`Description: ${formData.description}`, 20, 30);

//     // Convert the PDF to a Blob
//     const pdfBlob = doc.output("blob");

//     // Create a reference to Firebase Storage where we want to store the file
//     const storageRef = ref(storage, `pdfs/${formData.name}_details.pdf`);

//     // Upload the PDF to Firebase Storage
//     const uploadTask = uploadBytesResumable(storageRef, pdfBlob);

//     // Monitor the upload process
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         // You can monitor the progress here (optional)
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log("Upload is " + progress + "% done");
//       },
//       (error) => {
//         console.error("Error uploading PDF:", error);
//       },
//       async () => {
//         // Once the upload is complete, get the download URL
//         const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

//         // Now, store the file URL in Firestore
//         try {
//           await addDoc(collection(db, "items"), {
//             name: formData.name,
//             description: formData.description,
//             pdfUrl: downloadURL,  // Store the URL in Firestore
//           });

//           alert("Data added and PDF uploaded successfully!");
//           setFormData({ name: "", description: "" });
//         } catch (error) {
//           console.error("Error saving document to Firestore: ", error);
//         }
//       }
//     );
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="description"
//         placeholder="Description"
//         value={formData.description}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">Download and Upload PDF</button>
//     </form>
//   );
// };

// export default FormComponent;


// import { useState } from "react";
// import { jsPDF } from "jspdf";  // Import jsPDF
// import { storage } from "../firebase";  // Import Firebase storage
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";  // Import storage methods
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../firebase";  // Import Firestore

// const FormComponent = () => {
//   const [formData, setFormData] = useState({ name: "", description: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Generate the PDF using jsPDF
//     const doc = new jsPDF();
//     doc.text("Item Details", 20, 10);
//     doc.text(`Name: ${formData.name}`, 20, 20);
//     doc.text(`Description: ${formData.description}`, 20, 30);

//     // Convert the PDF to a Blob
//     const pdfBlob = doc.output("blob");

//     // Create a reference to Firebase Storage where the PDF will be uploaded
//     const pdfRef = ref(storage, `pdfs/${formData.name}_details.pdf`);

//     try {
//       // Upload the PDF to Firebase Storage
//       const uploadResult = await uploadBytes(pdfRef, pdfBlob);
//       console.log("PDF uploaded successfully");

//       // Get the download URL of the uploaded PDF
//       const pdfURL = await getDownloadURL(uploadResult.ref);

//       // Save the form data and the PDF URL to Firestore
//       await addDoc(collection(db, "items"), {
//         name: formData.name,
//         description: formData.description,
//         pdfUrl: pdfURL,  // Save the URL to access the PDF later
//       });

//       alert("Data and PDF uploaded successfully!");

//       // Clear the form after submission
//       setFormData({ name: "", description: "" });
//     } catch (error) {
//       console.error("Error uploading document: ", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="description"
//         placeholder="Description"
//         value={formData.description}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">Generate and Upload PDF</button>
//     </form>
//   );
// };

// export default FormComponent;


import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { jsPDF } from "jspdf";
import { FaComment } from "react-icons/fa"; // Import chat icon from react-icons
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./FormComponent.css";
import React from "react";

const FormComponent = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const [formData, setFormData] = useState({
    name: "",
    productName: "",
    issueType: "",
    Details: "",
    productCondition: "Good",
    location: "",
  });

  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doc = new jsPDF();
    doc.text(`name: ${formData.name}`, 10, 10);
    doc.text(`Product Name: ${formData.productName}`, 10, 20);
    doc.text(`Issue Type: ${formData.issueType}`, 10, 30);
    doc.text(`Details: ${formData.Details}`, 10, 40);
    doc.text(`Product Condition: ${formData.productCondition}`, 10, 50);
    doc.text(`Location: ${formData.location}`, 10, 60);

    const pdfBase64 = doc.output("datauristring");

    try {
      await addDoc(collection(db, "items"), {
        pdf: pdfBase64,
        ...formData,
        imageUrl: file ? URL.createObjectURL(file) : "",
      });

      alert("Data submitted successfully!");
      setFormData({
        name: "",
        productName: "",
        issueType: "",
        Details: "",
        productCondition: "Good",
        location: "",
      });
      setFile(null);
      setImagePreview("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-card">
        <h2 className="form-title">Submit Product Issue</h2>
        
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-field"
        />
  
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={formData.productName}
          onChange={handleChange}
          required
          className="input-field"
        />
  
        <input
          type="text"
          name="issueType"
          placeholder="Describe the Issue"
          value={formData.issueType}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="text"
          name="Details"
          placeholder="Details of Damage"
          value={formData.Details}
          onChange={handleChange}
          required
          className="input-field"
        />
  
        <select
          name="productCondition"
          value={formData.productCondition}
          onChange={handleChange}
          className="input-field"
        >
          <option value="Good">Good</option>
          <option value="Bad">Bad</option>
        </select>
  
        <input
          type="text"
          name="location"
          placeholder="Your Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="input-field"
        />
  
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="input-field file-input"
        />
  
        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
          </div>
        )}
  
        <button type="submit" className="submit-button">Submit</button>
        <div className="support-container">
  <button
    type="button"
    className="customer-support-button"
    onClick={() => navigate("/Chat")}
  >
    Need Help? Chat with Support
  </button>
</div>

      </form>
  
      {/* 🔹 Customer Support Button - Placed Below the Form */}
      <div className="chat" onClick={() => navigate("/Chatbot")}>
        <FaComment className="chat-logo" />
      </div>
{/* Customer Support Button - Positioned at Right End Below Form */}

    </div>
  );
}  
export default FormComponent;