
import './App.css';

import Header from './components/Header';
import SecondSectionScreen from './secreen/SecondSectionScreen';
import FirstSectionScreen from './secreen/FirstSectionScreen';
import ThirdSectionScreen from './secreen/ThirdSectionScreen';
import FourthSectionScreen from './secreen/FourthSectionScreen';
import { Container } from '@mui/material';
import { padding } from '@mui/system';

function App() {
  return (
    <>
        <Header></Header>
     
      <main style={{paddingTop:"2.5rem"}}>
        
        <FirstSectionScreen/>
 <SecondSectionScreen/>
 <ThirdSectionScreen/>
 <FourthSectionScreen/>
        
  

      </main>
      </>
  );
}

export default App;
