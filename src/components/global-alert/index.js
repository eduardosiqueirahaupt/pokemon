import { Snackbar } from "@mui/material";
import { useRecoilState } from "recoil";
import { alertStore } from "../../store/alert";

export default function GlobalAlert() {
  const [alert, setAlert] = useRecoilState(alertStore)

  const closeAlert = () => setAlert({
    isOpen: false,
    message: ''
  });

  return (
    <Snackbar
      open={alert.isOpen}
      autoHideDuration={3000}
      onClose={closeAlert}
      message={alert.message}
    />
  )
}

