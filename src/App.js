import './App.css';
import Header from './components/Header/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Resume from './pages/Resume/Resume.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Work from './pages/Work/Work.jsx';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Header title="Jackson Cimino" buttons={[
        {label: "Resume", onClick: () => navigate('/resume')},
        {label: "Projects", onClick: () => navigate('/projects')},
        {label: "Work",  onClick: () => navigate('/work')},
      ]} />
      <button className="name-button" onClick={() => navigate('/')}/>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/work" element={<Work/>} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
