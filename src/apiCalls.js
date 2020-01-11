export const getPlants = async () => {

      const resp = await fetch('http://localhost:3001');
      const data = await resp.json();

      if (!resp.ok) {
        const error = await resp.json();
        throw new Error(error.message);
      }

      return data;
   
}