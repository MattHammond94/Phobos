import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

// Pages:
import HomePage from './pages/HomePage';

import NeptunePage from '../src/pages/NeptunePage';

import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/neptune" element={<NeptunePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
