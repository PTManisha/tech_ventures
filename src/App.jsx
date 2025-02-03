// // src/App.jsx
// import React from "react";
// import FormComponent from "./components/FormComponent";
// //import FetchData from "./components/FetchData";

// function App() {
//   return (
//     <div className="App">
//       <h1>Firestore Demo</h1>
//       <h2>Submit Item Details</h2>
//       <FormComponent />
//       <hr />
//       {/* <h2>Fetched Data</h2> */}
//       {/* <FetchData /> Ensure this is rendered */}
//       {/* <h2>Fetched Data</h2>
//       <FetchData /> */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import Chat from "./components/Chat";
import Chatbot from "./components/chatbot";
import Login from "./components/login";
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/form" element={<FormComponent />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
};

export default App;
