import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";

import "./App.css";
import { Container } from "react-bootstrap";

// Exercise: Setting up the CSS layout -> is handled by bootstrap
// Exercise: Styling elements -> is mostly handled by bootstrap

function App() {
  return (
    <>
      <Container fluid>
        <Header />
        <Main />
        <Footer />
      </Container>
    </>
  );
}

export default App;
