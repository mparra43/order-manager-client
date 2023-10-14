import { Button, Table } from '@/shared/components';
import { Order } from '../types';
import { Customer } from '../types/index';

interface OrderDateilProps {
  order: Order
  handleOrder :()=>void;
}



export const OrderDateil = ({ order, handleOrder }: OrderDateilProps) => {

  const rows = order.orderProducts.map((({quantity, product})=> { return {name:product.name, ref:product.reference, quantity}}))
  return (
    <div className='container btn-light w-75 p-4 rounded-3'>
      {order.id && <>
            <h4 className='text-center mb-4 '>Orden de envió</h4>
        <div className='row '>
          <div className='col-md-8 rounded-3'>
            <table className='table '>
              <tr>
                <th>Código del Pedido:</th>
                <td>{order.id}</td>
              </tr>
              <tr>
                <th>Cliente:</th>
                <td>{order?.customer?.name}</td>
              </tr>
              <tr>
                <th>Dirección de Entrega:</th>
                <td>{order.address}</td>
              </tr>
              <tr>
                <th>Estado del Pedido:</th>
                <td>{order.state}</td>
              </tr>
              <tr>
                <th>Fecha Estimada de Entrega:</th>
                <td>{order.estimatedDeliveryDate}</td>
              </tr>
            </table>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <Table classNameTable='bg-light table border border-4 rounded-3' headers={['Nombre del producto', 'Ref.', 'Cantidad']} rows={rows} columns={['name','ref', 'quantity']}/>
          </div>
        </div>

      </>}

      <div className='row'>
          <div className='col-md-12 d-flex justify-content-end align-items-center my-1'>
            <Button className='btn btn-outline-primary active mr-2'label='Nueva consulta' onClick={handleOrder}/>
            <Button className='btn btn-outline-danger'label='Cerrar'  onClick={handleOrder}/>
          </div>
        </div>

    </div>

  )
};
