export const getImageNameFromImageUrl = (imageUrl) => {
  const imageName = imageUrl
    .split(
      'https://firebasestorage.googleapis.com/v0/b/sweet-cookie-boutique.appspot.com/o/fotosDeProductos%2F'
    )[1]
    .split('?')[0];
  return imageName;
};
