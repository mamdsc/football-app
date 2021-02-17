import { ValidationError } from 'yup';

interface IValidationErros {
  [key: string]: string;
}

export default function getValidationError(
  err: ValidationError,
): IValidationErros {
  const validation: IValidationErros = {};
  err.inner.forEach((error) => {
    if (error.path) {
      validation[error.path] = error.message;
    }
  });

  return validation;
}
