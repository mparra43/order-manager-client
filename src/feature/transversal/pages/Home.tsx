import { OrderSearchForm } from "@/feature/orders/components";
import { Layout } from "../components";

export const Home = () => {
  return (
    <div>
      <Layout>
        <div
          className="bg-image"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            backgroundRepeat: "no-repeat",
            height: "80vh",
          }}
        >
          <OrderSearchForm />
        </div>
      </Layout>
    </div>
  );
};
