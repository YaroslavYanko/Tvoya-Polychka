import { LineImages } from "@app/common/components/line-images/line-images";
import {
  useGetCustomerDataQuery,
  useUpdateCustomerDataMutation,
} from "@app/core/types";
import { UpdateInfoLoading } from "../components/update-info/update-info-loading";
import { UpdateInfo } from "../components/update-info/update-info.components";
import { UserOrders } from "../components/user_orders/user-orders.component";
import styles from "./profile-page.module.css";

export const ProfilePage = () => {
  const { data, loading: profileDataLoading } = useGetCustomerDataQuery();
  const [updateCustomerData, { loading: isProfileUpdating }] =
    useUpdateCustomerDataMutation();

  const onSubmitCallback = async (values) => {
    await updateCustomerData({
      variables: {
        id: data?.customers[0].id,
        name: values.name || data?.customers[0].name,
        surname: values.surname || data?.customers[0].surname,
        address: values.address || data?.customers[0].address,
      },
    });
  };

  if (profileDataLoading) {
    return <UpdateInfoLoading />;
  }

  return (
    <div>
      <LineImages />

      <div className={styles.container}>
        <UpdateInfo
          initialValues={data.customers[0]}
          onSubmitCallback={onSubmitCallback}
          isProfileUpdating={isProfileUpdating}
        />
        <UserOrders />
      </div>
    </div>
  );
};
