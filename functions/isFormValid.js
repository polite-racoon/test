export const isFormValid = (formData, image, setErrorObj) => {
  const errors = {};

  if (!formData.title) {
    errors.title = true;
  }

  if (!formData.price) {
    errors.price = true;
  }

  if (!image) {
    errors.image = true;
  }

  if (Object.values(errors).includes(true)) {
    setErrorObj(errors);
    return false;
  } else {
    return true;
  }
};
