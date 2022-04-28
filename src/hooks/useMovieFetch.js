import { useState, useEffect} from "react";
import Api from "../Api";

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);

                const movie = await Api.fetchMealInfo(movieId);

                setState({
                    ...movie,    
                });

                setLoading(false);

            } catch (error) {
                setError(true);
            }
        }

        fetchMovie();
    }, [movieId]);

    return { state, loading, error }
}