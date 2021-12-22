
import { Box } from '@chakra-ui/react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NavHeader from './components/Navbar/NavHeader';
import Review from './components/Review/Review';
import Skill from './components/Skills/Skill';
import Work from './components/Works/Work';


function App() {
  return (
    <Box>
      <NavHeader />
        <About />
        <Skill />
        <Review />
        <Work />
        <Contact />
      <Footer />
    </Box>
  );
}

export default App;




