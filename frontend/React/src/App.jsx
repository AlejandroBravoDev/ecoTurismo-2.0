import React, { Suspense } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
const LazyMapaRisaralda = React.lazy(() =>
  import("./components/mapa/mapaRisaralda")
);

function App() {
  return (
    <div className="app">
      <Header />
      <div style={{ padding: "28px", height: "600px" }}>
        <Suspense fallback={<div>Cargando mapa...</div>}>
          <LazyMapaRisaralda />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
