import axios from 'axios';
import { getApiHost } from '../../json_server/utils';

export class FilmsService {

    async getFilmTitles() {
        try {
            const response = await axios.get(`${getApiHost()}/api/films`);
            return response.data.map(film => film.title);
        } catch (error) {
            console.error("Error getting film titles:", error);
            return [];
        }
    }
}