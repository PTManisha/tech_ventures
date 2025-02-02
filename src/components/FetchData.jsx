import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const FetchData = () => {
  const [pdfData, setPdfData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPdfData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "items"));
        let pdfURL = null;

        // If there are any documents, get the PDF data (assuming only one document for now)
        querySnapshot.forEach((doc) => {
          console.log(doc.data()); // Debug: check if data is fetched
          if (doc.data().pdf) {
            pdfURL = doc.data().pdf; // Store the first PDF found
          }
        });

        setPdfData(pdfURL);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false); // Set loading state to false when data is fetched
      }
    };

    fetchPdfData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Show loading message while fetching data
      ) : (
        <>
          {pdfData ? (
            <div>
              <h3>Fetched PDF:</h3>
              <iframe
                src={pdfData}
                width="100%"
                height="600px"
                title="PDF Viewer"
              />
            </div>
          ) : (
            <p>No PDF available.</p>
          )}
        </>
      )}
    </div>
  );
};

export default FetchData;
