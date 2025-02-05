import { useNavigate } from 'react-router-dom'
import { formatCurrency } from '../helpers'
import { Product } from '../types'

type Props = {
  product: Product
}

export const ProductDetails = ({ product }: Props) => {
  const navigate = useNavigate()
  return (
    <tr className='border-b '>
      <td className='p-3 text-lg text-gray-800'>{product.name}</td>
      <td className='p-3 text-lg text-gray-800'>
        {formatCurrency(product.price)}
      </td>
      <td className='p-3 text-lg text-gray-800'>{`${
        product.availability ? 'Disponible' : 'No Disponible'
      }`}</td>
      <td className='p-3 text-lg text-gray-800 '>
        <div className='flex gap-2 items-center'>
          <button
            className='bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
            onClick={() => navigate(`/productos/${product.id}/editar`)}
          >
            Editar
          </button>
        </div>
      </td>
    </tr>
  )
}
