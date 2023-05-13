import Swal from 'sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';

export const generalAlertSuccessToast = (message) => {
  Swal.fire({
    icon: 'success',
    title: 'Successo',
    toast: true,
    position: 'bottom-right',
    timer: 6000,
    timerProgressBar: true,
    showConfirmButton: false,
    text: message,
  });
};

export const generalAlertSuccess = (message) => {
  Swal.fire({
    icon: 'success',
    title: 'Successo',
    text: message,
  });
};

export const generalAlertError = (message) => {
  Swal.fire({
    icon: 'error',
    title: 'Errore',
    text: message,
  });
};
