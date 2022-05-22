import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import InputTrait from './utils/InputTrait';
import Landing from './utils/Landing';

function App() {

  return (
    <div>
      <Router>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/trait' element={<InputTrait />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
