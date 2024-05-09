
import EntityPage from "./pages/EntityPage";
import EditEntityForm from "./components/EditEntityForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="flex items-center justify-center py-8">
        <h1 className="text-purple-500 text-3xl font-bold">HEADLESS CMS</h1>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EntityPage />} />
          <Route path="/edit" element={<EditEntityForm />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
