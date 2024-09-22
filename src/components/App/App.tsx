import NavBar from '@components/NavBar';
import Experience from '@pages/Experience';
import Home from '@pages/Home';
import Resume from '@pages/Resume';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
