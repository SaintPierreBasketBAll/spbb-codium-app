 export async function fetchNews() {
    try {
      const response = await fetch('https://api.example.com/news');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des actualités');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  }  
  