// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import MoreProjects from './components/MoreProjects';
import MoreCertifications from './components/MoreCertifications';
import BlogPage from './components/BlogPage';

const router = createHashRouter([
  {
    path: '/',               // layout route
    element: <App />,        // this renders your Navbar + an <Outlet/>
    children: [
      { index: true,         // index route “/”
        element: (
          <>
            <App.Sections />  {/* Renders the home-page sections */}
          </>
        )
      },
      { path: 'more-projects',       element: <MoreProjects /> },
      { path: 'more-certifications', element: <MoreCertifications /> },
      { path: 'blog',                element: <BlogPage /> },
      // Add a wildcard route for handling 404
      { path: '*', element: <div>Page Not Found</div> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
