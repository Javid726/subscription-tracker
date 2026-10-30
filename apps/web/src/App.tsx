import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardPage from './features/board/BoardPage';
import { SplitFlapLab } from './features/splitFlap/SplitFlapLab';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardPage />} />
        <Route path="/flap-lab" element={<SplitFlapLab />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
