import firebase from '../firebase/client';

export const imageUplodaer = (
  image,
  landscapeImg,
  formData,
  setLoading,
  setImage,
  setLandscapeImage,
  setFormData
) => {
  setLoading(true);
  const db = firebase.firestore();

  if (landscapeImg) {
    console.log('landscape');
    const storageRef = firebase
      .storage()
      .ref(`/fotosDeProductos/${Date.now() + landscapeImg.name}`);

    const task = storageRef.put(landscapeImg);

    task.on(
      'state_changed',
      (snapshot) => {
        console.log('snapshot landscape: ', snapshot);
      },
      (error) => {
        console.log('error guardando landscape: ', error.message);
        setLoading(false);
      },
      () => {
        task.snapshot.ref.getDownloadURL().then((landscapeURL) => {
          upload(
            db,
            image,
            formData,
            setLoading,
            setImage,
            setLandscapeImage,
            setFormData,
            landscapeURL
          );
        });
      }
    );
  } else {
    upload(
      db,
      image,
      formData,
      setLoading,
      setImage,
      setLandscapeImage,
      setFormData,
      ''
    );
  }
};

const upload = (
  db,
  image,
  formData,
  setLoading,
  setImage,
  setLandscapeImage,
  setFormData,
  landscapeURL
) => {
  // sube imagen a firebase storage y devuelve url
  const storageRef = firebase
    .storage()
    .ref(`/fotosDeProductos/${Date.now() + image.name}`);

  const task = storageRef.put(image);

  task.on(
    'state_changed',
    (snapshot) => {
      console.log('snapshot: ', snapshot);
    },
    (error) => {
      console.log('error guardando la imagen: ', error.message);
      setLoading(false);
    },
    () => {
      task.snapshot.ref.getDownloadURL().then((downloadURL) => {
        const doc = {
          ...formData,
          price: Number(formData.price),
          imageUrl: downloadURL,
          landscapeImgUrl: landscapeURL,
          sold: false,
          date: Date.now(),
        };

        db.collection('productos')
          .add(doc)
          .then(() => {
            setFormData({ title: '', description: '', price: '', tipo: '' });
            setImage(null);
            setLandscapeImage(null);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      });
    }
  );
};
