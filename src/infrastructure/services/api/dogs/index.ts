import axios from 'axios';

type Breed = {
    breed: {};
}

type getBreedsResponse = {
    data: Breed;
}
async function getAllBreeds() {
    try {
        const { data } = await axios.get<getBreedsResponse>('https://dog.ceo/api/breeds/list/all', {
            headers: {
                Accept: 'application/json',
            },
        });
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {

            return error.message;
        } else {

            return 'An unexpected error occurred';
        }

    }
}

export async function getBreedImages(breed: string) {
    try {
        const { data } = await axios.get<getBreedsResponse>(`https://dog.ceo/api/breed/${breed}/images/random`, {
            headers: {
                Accept: 'application/json',
            },
        });
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {

            return error.message;
        } else {
            return 'An unexpected error occurred';
        }

    }
}
export default getAllBreeds;
