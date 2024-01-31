
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Firstpage from './pages/Firstpage';
import Secondpage from './pages/Secondpage';

const App = () => {
  return (
    <Routes>
      <Route path="/secondpage/:id" element={<Secondpage />} />
      <Route path="/" element={<Firstpage />} />
    </Routes>
  );
};

export default App;
