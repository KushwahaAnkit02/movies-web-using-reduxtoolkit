
const headers = {
    method: 'GET',
    'X-RapidAPI-Key': '5c44d40016mshe9ad34bcf18989fp1bf9fejsnb5b0abe06921',
}


export const getData = async (data) => {
    try {
        const response = await fetch(`https://moviesverse1.p.rapidapi.com/${data}`, { headers })
        return response
    } catch (error) {
        console.log(error.message);
    }
}