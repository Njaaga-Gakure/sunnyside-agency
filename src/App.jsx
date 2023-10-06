import { About, Footer, Hero, ImageGrid, Testimonials } from "./components";
import { useState } from "react";
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Hero toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <About />
      <Testimonials />
      <ImageGrid />
      <Footer />
    </>
  );
};

export default App;
