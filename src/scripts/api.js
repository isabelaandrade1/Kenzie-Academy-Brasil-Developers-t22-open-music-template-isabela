// api.js
export async function fetchAlbums() {
    try {
      const response = await fetch('https://openmusic-fake-api.onrender.com/api/musics');
      if (!response.ok) {
        throw new Error('Erro ao buscar os dados da API');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro na requisição:', error);
      return [];
    }
  }
  