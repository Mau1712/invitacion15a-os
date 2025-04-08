import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // 👈
import Home from "./Pages/Home/Home";
import Invitacion from "./Pages/Invitacion/Invitacion";
import PageTransition from "./components/PageTransition"; // 👈 nuestro nuevo envoltorio

const AppRoutes = () => {
  const location = useLocation(); // 👈 Necesitamos la ubicación actual

  return (
    <AnimatePresence mode="wait"> {/* 👈 Activa animaciones entre rutas */}
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          } 
        />
        <Route 
          path="/invitacion" 
          element={
            <PageTransition>
              <Invitacion />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default AppRouter;
