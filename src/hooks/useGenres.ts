import genres from "../static_data/genre";

export interface Genre {
    id: number,
    name:string
    image_background: string
}

const useGenres = () => ({data: genres, isLoading:false, error:null});


export default useGenres