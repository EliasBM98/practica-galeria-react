import { apiRest } from "../api/apiRest";

export const getPhotos = async (category) => {
    if (!category) return;

    const url = `${import.meta.env.VITE_URL_BASE}search?query=${category}&per_page=5`

    const { photos } = await apiRest(url);

    const images = photos.map((image)=>({
        id: image.id,
        photographer: image.photographer,
        photographer_url: image.photographer_url,
        alt: image.alt,
        src: image.src.small
    }));

    return images
   
};