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
      {notify.error && (
        <Toast
          msg={notify.error}
          title={"error"}
          bgColor={"bg-red-600"}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
        />
      )}
      {notify.success && (
        <Toast
          msg={notify.success}
          title={"registered successfully"}
          bgColor={"bg-green-500"}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
        />
      )}
    </>
  );
};

export default Notify;
