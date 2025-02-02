// import React, { useState } from "react";
// import CategorySelection from "./components/CategorySelection";
// import ClothingReturnForm from "./components/clothing";
// import ElectronicsReturnForm from "./components/ReturnForm";
// import FurnitureReturnForm from "./components/Furniture";
// import ChatbotIcon from "./components/ChatbotIcon";
// import firstpage from "./components/firstpage";

// const App = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   return (
//     <div className="App">
//       {selectedCategory ? (
//         selectedCategory === "Clothing" ? (
//           <ClothingReturnForm onBack={() => setSelectedCategory(null)} />
//         ) : selectedCategory === "Electronics" ? (
//           <ElectronicsReturnForm onBack={() => setSelectedCategory(null)} />
//         ) : (
//           <FurnitureReturnForm onBack={() => setSelectedCategory(null)} />
//         )
//       ) : (
//         <CategorySelection onSelectCategory={setSelectedCategory} />
//       )}
//       <ChatbotIcon/>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
import CategorySelection from "./components/CategorySelection";
import ClothingReturnForm from "./components/clothing";
import ElectronicsReturnForm from "./components/ReturnForm";
import FurnitureReturnForm from "./components/Furniture";
import ChatbotIcon from "./components/ChatbotIcon";
import FirstPage from "./components/firstpage"; // Importing firstpage

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="App">
      {selectedCategory === null ? (
        // Show the first page
        <FirstPage onSelectCategory={setSelectedCategory} />
      ) : selectedCategory === "Return Analysis" ? (
        <CategorySelection onSelectCategory={setSelectedCategory} />
      ) : selectedCategory === "Route Optimization" ? (
        // Show Route Optimization page (you can create this component)
        <div></div>
      ) : selectedCategory === "Clothing" ? (
        <ClothingReturnForm onBack={() => setSelectedCategory(null)} />
      ) : selectedCategory === "Electronics" ? (
        <ElectronicsReturnForm onBack={() => setSelectedCategory(null)} />
      ) : (
        <FurnitureReturnForm onBack={() => setSelectedCategory(null)} />
      )}
      <ChatbotIcon />
    </div>
  );
};

export default App;
