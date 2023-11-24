import { ref } from 'vue';
import { defineStore } from 'pinia';

import { Photo } from '../interfaces/Photo';

export const usePhotosStore = defineStore('photos', () => {
  const photos = ref<Photo[]>([]);

  const addPhotos = (newPhotos: Photo[]) => {
    photos.value = newPhotos;
  };

  return {
    photos,
    addPhotos,
  };
});
