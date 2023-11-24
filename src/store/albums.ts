import { ref } from 'vue';
import { defineStore } from 'pinia';

import { Album } from '../interfaces/Album';

export const useAlbumsStore = defineStore('albums', () => {
  const albums = ref<Album[]>([]);

  const addAlbums = (newAlbums: Album[]) => {
    albums.value = newAlbums;
  };

  return {
    addAlbums,
  };
});
