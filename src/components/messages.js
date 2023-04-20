import { Notify } from 'quasar';

export const success = (message) => {
  Notify.create({
    message: message,
    color: 'primary',
    textColor: 'white',
    position: 'top',
  });
};

export const error = (message) => {
  Notify.create({
    message: message,
    color: 'negative',
    textColor: 'white',
    position: 'top',
  });
};
