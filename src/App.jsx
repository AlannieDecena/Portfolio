// Import the App.css file to style our App component
import "./App.css";
import "./Cap.css";
import "./Anime.css";
import "./cal-style.css";

// Import the AppRoutes component which contains our application routes
import AppRoutes from "./routes/AppRoutes";
import Footer from "./pages/Footer";
import LineDivider from "./components/LineDivider";
import NavBar from "./pages/NavBar";

// Define our App component
function App() {

  // Render our App component
  return (
    // Create a div with the "App" class
    <div>
      {/* <NavBar/> */}
      <AppRoutes/>
   
      {/* <Footer/> */}

    </div>
  );
}

// Export our App component as the default export of this module
export default App;
