import { UserInputProfile } from "@app/common/components/user-profile/user-input-profile";
import { useGetCustomerOrdersQuery } from "@app/core/types";
import { UserOrdersTable } from "../user-order-table/user-orders-table.component";


export const UserOrders = () => {

   const {data,loading} = useGetCustomerOrdersQuery()

  return (
    <UserInputProfile title="Ваші замовлення">
     {data?.orders.length?( <UserOrdersTable data={data.orders} orderStatus={data.order_status} />):(<h1>У вас ще нема замовлень</h1>)}
    </UserInputProfile>
  );
};
