export const getPlants = async () => {

      const resp = await fetch('https://localhost:3001');
      const data = await resp.json();

      if(!resp.ok) {
        throw new Error('No Plants Found!');
      } else {
        return data;
      }
   
}