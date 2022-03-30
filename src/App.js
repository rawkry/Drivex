
import './App.css';

import Header from './components/Header';
import SecondSectionScreen from './secreen/SecondSectionScreen';
import FirstSectionScreen from './secreen/FirstSectionScreen';
import ThirdSectionScreen from './secreen/ThirdSectionScreen';

function App() {
  return (
    <>
        <Header></Header>
     
      <main style={{paddingTop:"2.5rem"}}>
 <FirstSectionScreen/>
 <SecondSectionScreen/>
 <ThirdSectionScreen/>

      </main>
      </>
  );
}

export default App;
