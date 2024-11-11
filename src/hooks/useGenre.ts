import useGenres from "./useGenres";

const usePlatform = (selectedGenreId?:number) => {
    const{data, error}=useGenres();

    return data.results.find((p)=>p.id === selectedGenreId);
   }

export default usePlatform;

    