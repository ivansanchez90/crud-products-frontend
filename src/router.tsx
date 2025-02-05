import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { loader as productsLoader, Products } from './pages/Products'
import { loader as editProductLoader } from './pages/EditProduct'
import { NewProduct, action as newProductAction } from './pages/NewProduct'
import { EditProduct } from './pages/EditProduct'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: 'productos/nuevo',
        element: <NewProduct />,
        action: newProductAction,
      },
      {
        path: 'productos/:id/editar', // ROA Pattern - Rouserce-oriented design
        element: <EditProduct />,
        loader: editProductLoader,
      },
    ],
  },
])
