import axios from 'axios';
//upload image and return image url
export const imageUpload = async imagData => {
  const formData = new FormData();
  formData.append('image', imagData);
  //send image data to imgbb server
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ING_API_KEY}`,
    formData
  );
  return data.data.display_url;
};
