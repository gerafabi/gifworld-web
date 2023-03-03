
import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isFull, setIsFull] = useState(true);
    const getImages = async() => {
       const newImages = await getGifs ( category );
        setImages(newImages);
        setIsFull(false);
    }
    useEffect(() => {
        getImages();
    }, []);


  return {
    images,
    isFull: true
  }
}




