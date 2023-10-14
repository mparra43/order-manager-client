import { OrderDateil, OrderSearchForm } from "@/feature/orders/components";
import { Layout } from "../components";
import { orderApi } from "@/feature/orders/services";
import { FiltersOrder } from "@/feature/orders/types";
import { useState } from "react";


export const Home = () => {
  const [order, setOrder] = useState<null | any>(null)

  const searchOrder = async ({ document, ...res }: FiltersOrder) => {
    const order = await orderApi.getOrder({ document: parseInt(document), ...res });
    order && setOrder(order.order);
  }

  const handleOrder =()=>{
    setOrder(null)
  }

  return (
    <div>
      <Layout>
        <div
          className="bg-image d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            backgroundRepeat: "no-repeat",
            height: "90vh",
          }}
        >
          {!order && <OrderSearchForm service={searchOrder} />}
          {order && <OrderDateil order={order} handleOrder={handleOrder}/>}

        </div>
      </Layout>
    </div>
  );
};
