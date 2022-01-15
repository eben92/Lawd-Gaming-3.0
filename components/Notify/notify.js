import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import Loading from "../Loading/Loading";
import Toast from "../toast/toast";

const Notify = () => {
  const [state, dispatch] = useContext(DataContext);
  const { notify } = state;

  return (
    <>
      {notify.loading && <Loading />}
      {notify.error && <Toast />}
      {notify.success && <Toast />}
    </>
  );
};

export default Notify;
