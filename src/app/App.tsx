import React from 'react';
import Header from "../widgets/Header/ui/Header";
import AppRouter from "./providers/router/ui/AppRouter";

function App() {
  return (
    <>
      <Header/>
        <section className="content">
          <AppRouter/>
        </section>
    </>
  );
}

export default App;
