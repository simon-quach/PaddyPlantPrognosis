import { useState, useEffect } from 'react'

import axios from 'axios'

const Diagnose = () => {
  // STATES
  const [select, setSelect] = useState('none'); // State for the sample image select value
  const [image, setImage] = useState(null); // State for user uploaded image
  const [imageData, setImageData] = useState(null); // State for user uploaded image

  // EFFECTS
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 256;
          canvas.height = 256;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 256, 256);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          setImageData(imageData);
        };
      };
      reader.readAsDataURL(image);
    }
  }, [image]); // Activates every time image is updated

  // FUNCTIONS

  // Sends a POST request to the server
  const handleSubmit = (e) => { 
    e.preventDefault();
    // still working on it LOL
  }

  // Updates the image state every time the select input changes
  const updateSelect = (e) => { 
    setSelect(e.target.value);

    const img = new Image();
    img.src = `/sample-paddies/${e.target.value}.jpg`;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          const file = new File([blob], 'image.jpg', {type: 'image/jpeg'});
          setImage(file);
        },
        'image/jpeg',
        1,
      );
    };
  };

  // Updates the image state every time the user uploads an image
  const updateUserImage = (e) => {
    if (e.target.files[0]) {
      // Resize the image to 300x300
      setImage(e.target.files[0]);
    }
  }
  
  return (
    <div className="flex justify-center text-[#2c302e]">
      <form onSubmit={(e) => handleSubmit(e)} action="POST"  className="flex flex-col justify-center mt-[5rem] w-[100rem] px-8">
        <h1 className="text-[32px] font-medium">Diagnose</h1>
        <p className="text-[16px] text-[#666e75] lg:w-[50rem] w[20rem] mt-4">
          This feature allows users to upload images of their paddy plants and uses <span className="font-bold">image recognition technology</span> to detect any signs of disease. 
          It then provides a diagnosis of the disease along with recommended treatment options. 
          This feature is designed to assist farmers in identifying and addressing potential issues with their crops quickly and efficiently.
        </p>
        <p className="text-[16px] mt-10">Upload an image or choose one of our demo images below!</p>

        <select onChange={(e) => updateSelect(e)} value={select} className="mt-6 bg-white border px-4 py-2 w-[4.5rem] rounded-md text-center " ame="paddies" id="paddies">
          <option value="none" selected disabled hidden></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <input 
          onChange={(e) => updateUserImage(e)} 
          type="file" 
          name="userImage" 
          id="userImage" 
          className="mt-6 block w-full text-sm text-[#666e75] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#2c302e] file:text-[#9ae19f] hover:file:bg-[#3b5449]"
        />
        {image && <img src={URL.createObjectURL(image)} alt="image" className="w-[20rem] mt-6 rounded-xl" />}
        
        <button type="submit" className="mt-12 hover:bg-[#b8e4bb] bg-[#9ae19f] w-[6rem] px-4 py-2 rounded-md">Upload</button>
      </form>
    </div>
  )
}

export default Diagnose;