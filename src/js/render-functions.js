export default createMurkup; 
function createMurkup(arr) {
    return arr.map((image) =>
     `<li class="gallery">
            <a class="gallery-link" href="${image.largeImageURL}" target="_blank">
                <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
                <div class="image-info">
                    <p class="item"><span class="item-text">Likes:</span class="item-text"> ${image.likes}</p>
                    <p class="item"><span class="item-text">Views:</span class="item-text"> ${image.views}</p>
                    <p class="item"><span class="item-text">Comments:</span class="item-text"> ${image.comments}</p>
                    <p class="item"><span class="item-text">Downloads:</span class="item-text"> ${image.downloads}</p>
                </div>
            </a>
        </li>
    `).join('');
}