import Validator from 'validator';
import isEmpty from './isEmpty';

const validateLoginInputs = (data) => {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  
  if(Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
      errors,
      isValid: isEmpty(errors)
  }
}

export default validateLoginInputs;