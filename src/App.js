import { Route, Routes } from 'react-router-dom';
//import HomePage from './pages/HomePage/HomePage';
import TweetPage from './pages/TweetPage/TweetPage';
import { RestrictedRoute } from '../src/utils/RestrictedRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TweetPage />} />
        {/* <Route path="/tweets-pr/tweets" element={<TweetPage />} /> */}
        <Route path="*" element={<RestrictedRoute redirectTo="/" />} />
      </Routes>
    </>
  );
}

export default App;
