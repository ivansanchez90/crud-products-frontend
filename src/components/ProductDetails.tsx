import {
  ActionFunctionArgs,
  Form,
  redirect,
  useFetcher,
  useNavigate,
} from 'react-router-dom'
import { formatCurrency } from '../helpers'
import { Product } from '../types'
import { deleteProduct } from '../services/ProductService'

type Props = {
  product: Product
}

export async function action({ params }: ActionFunctionArgs) {
  if (params.id) {
    await deleteProduct(+params.id)

    return redirect('/')
  }
}

export const ProductDetails = ({ product }: Props) => {
  const fetcher = useFetcher()
  const navigate = useNavigate()
  return (
    <tr className='border-b '>
      <td className='p-3 text-lg text-gray-800'>{product.name}</td>
      <td className='p-3 text-lg text-gray-800'>
        {formatCurrency(product.price)}
      </td>
      <td className='p-3 text-lg text-gray-800'>
        <fetcher.Form method='POST'>
          <button
            type='submit'
            name='id'
            value={product.id}
            className={`${
              product.availability ? 'text-black' : 'text-red-600'
            } rounded-lg text-xs p-2 uppercase font-bold w-full border border-zinc-200 hover:cursor-pointer`}
          >
            {`${product.availability ? 'Disponible' : 'No Disponible'}`}
          </button>
        </fetcher.Form>
      </td>
      <td className='p-3 text-lg text-gray-800 '>
        <div className='flex gap-2 items-center'>
          <button
            className='bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
            onClick={() => navigate(`/productos/${product.id}/editar`)}
          >
            Editar
          </button>
          <Form
            className='w-full'
            method='post'
            onSubmit={(e) => {
              if (!confirm('¿Eliminar?')) {
                e.preventDefault()
              }
            }}
            action={`productos/${product.id}/eliminar`}
          >
            <input
              className='bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
              type='submit'
              value='Eliminar'
            />
          </Form>
        </div>
      </td>
    </tr>
  )
}
