import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import CreateParty from './routes/CreateParty/CreateParty.jsx'
import Party from './routes/Party/Party.jsx'
import EditParty from './routes/EditParty/EditParty.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/party/new',
        element: <CreateParty />,
      },
      {
        path: '/party/:id',
        element: <Party />,
      },
      {
        path: '/party/edit/:id',
        element: <EditParty />,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
