import { Layout } from "@/feature/transversal/components";


export const OrderDateil = () => {
  return <div>
    <Layout>
      {/* <div className="bg-image" style={{backgroundImage: `url('https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,   backgroundRepeat: "no-repeat",height:"80vh"}}>

        
      </div> */}

<div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      {/* <!-- Encabezado de la factura --> */}
      <h2>Factura</h2>
      <table className="table">
        <tr>
          <th>Código del Pedido:</th>
          <td>12345</td>
        </tr>
        <tr>
          <th>Cliente:</th>
          <td>Juan Pérez</td>
        </tr>
        <tr>
          <th>Dirección de Entrega:</th>
          <td>Calle 123, Ciudad, País</td>
        </tr>
        <tr>
          <th>Estado del Pedido:</th>
          <td>En Proceso</td>
        </tr>
        <tr>
          <th>Fecha Estimada de Entrega:</th>
          <td>2023-10-12</td>
        </tr>
      </table>
    </div>
  </div>

  {/* <!-- Tabla de productos --> */}
  <div className="row">
    <div className="col-md-12">
      <h3>Productos</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Referencia</th>
            <th>Descripción</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PROD001</td>
            <td>Producto 1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>PROD002</td>
            <td>Producto 2</td>
            <td>3</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</div>
    </Layout>
  </div>;
};
