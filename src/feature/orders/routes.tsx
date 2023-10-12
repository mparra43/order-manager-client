import { Route, Routes } from 'react-router-dom'
import { OrderDateil } from './pages'


export const OrdersRoutes = () => {
  return (
    <Routes>
      <Route path='detail/:id' element={<OrderDateil/>} />
    </Routes>
  )
}
