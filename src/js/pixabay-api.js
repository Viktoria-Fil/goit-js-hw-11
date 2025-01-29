
export default getPictures;

function getPictures(tag) {
    const API_URL = `https://pixabay.com/api//?key=${API_KEY}&q=${encodeURIComponent(tag)}&image_type=photo&orientation=horizontal&safesearch=true`;
    const API_KEY = `48530484-8b1e6b3578d96dabcf99a211e`;
    return fetch(API_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
    })
}

