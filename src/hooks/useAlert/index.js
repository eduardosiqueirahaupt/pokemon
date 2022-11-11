import { useSetRecoilState } from "recoil"
import { alertStore } from "store/alert";

const useAlert = () => {
  const setAlert = useSetRecoilState(alertStore);

  const showAlert = (message) => setAlert({
    isOpen: true,
    message: message
  })

  return {
    showAlert,
  }
}

export default useAlert;