"use strict"
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import'simplelightbox/dist/simple-lightbox.min.css';

import getPictures from './js/pixabay-api';
import createMurkup from './js/render-functions';
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
    captionsClass: 'imageTitle',
})

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { picture } = event.target.elements;
    const value = picture.value.trim();
    console.log(value);
    gallery.innerHTML = "";
    if (!value || value === " ") {
        iziToast.warning({
            title: "Caution",
            message: "Please add request",
            messageSize: '16px',
            position: 'center',
            color: black
        });
        gallery.innerHTML = "!";
        return
    }
});

loader.classList.remove("hidden");
getPictures(value)
    .then((data) => {
        console.log(data);
        if (!data.hits.length) {
            iziToast.info({
                title: '!',
                message: "Sorry, there are no images matching your search query. Please try again!",
                messageSize: '16px',
                position: 'center',
                backgroundColor: yellow
            });
            
        }
        else {
            list.innerHTML = createMurkup(data.hits);
            lightbox.refresh();
        }
    })
    .catch((error) => {
        console.log(error.message);
        iziToast.error({
            title: "Error",
            message: `${error.message}`,
            messageSize: '16px',
            position: 'center',
            backgroundColor: red
        })
    })
    .finally(() => {
        picture.value = "";
        loader.classList.add("hidden");
    });

