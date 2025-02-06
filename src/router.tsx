import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import {
  loader as productsLoader,
  Products,
  action as updateAvailabilityAction,
} from './pages/Products'
import {
  loader as editProductLoader,
  action as editProductAction,
} from './pages/EditProduct'
import { NewProduct, action as newProductAction } from './pages/NewProduct'
import { EditProduct } from './pages/EditProduct'
import { action as deleteProductAction } from './components/ProductDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
        action: updateAvailabilityAction,
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
        action: editProductAction,
      },
      {
        path: 'productos/:id/eliminar',
        action: deleteProductAction,
      },
    ],
  },
])
