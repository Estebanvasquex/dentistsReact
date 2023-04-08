import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBarLayoutContainer from "./components/layout/navbar/NavBarLayoutContainer";
import DentistsContainer from "./components/pages/dentists/DentistsContainer";
import DentistFavoriteContainer from "./components/pages/favorite/DentistFavoriteContainer";
import UserContactContainer from "./components/pages/contact/UserContactContainer";
import DentistDetailContainer from "./components/pages/dentist/DentistDetailContainer";
import ContextDentistsProvider from './context/ContextUsers'
function App() {
  return (
    <BrowserRouter>
      <ContextDentistsProvider>
        <Routes>
          <Route element={<NavBarLayoutContainer />}>
            <Route path="/" element={<h1>BIENVENIDO</h1>} />
            <Route path="/dentists" element={<DentistsContainer />} />
            <Route path="/dentist/:id" element={<DentistDetailContainer />} />
            <Route path="/favorite" element={<DentistFavoriteContainer />} />
            <Route path="/contact" element={<UserContactContainer />} />
          </Route>
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </ContextDentistsProvider>
    </BrowserRouter>
  );
}

export default App;
