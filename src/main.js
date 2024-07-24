// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Opcjonalny import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';
// Opisany w dokumentacji
import iziToast from 'izitoast';
// Opcjonalny import stylów
import 'izitoast/dist/css/iziToast.min.css';
import ApiService from './api-service';

const formRef = document.getElementById('search-form');
const imageContainerRef = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: '250',
  overlayOpacity: 0.8,
});
formRef.addEventListener('submit', submitForm);
loadMoreBtn.addEventListener('click', loadMoreImages);
let page = 1;
let currentQuery = '';

function submitForm(event) {
  event.preventDefault();
  imageContainerRef.innerHTML = '';
  currentQuery = event.target.elements.query.value.trim();
  if (!currentQuery) {
    iziToast.error({
      message:
        'Sorry, you have to type something in the search field. Please try again!',
      position: 'topRight',
    });
    return;
  }
  page = 1;
  fetchImagesAndRender(currentQuery, page);
  formRef.reset();
}

async function fetchImagesAndRender(query, page) {
  showLoader();

  try {
    const images = await fetchImages(query, page);
    hideLoader();

    if (images.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    renderGallery(images.hits);
    if (!lightBox) {
      lightBox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    } else {
      lightBox.refresh();
    }

    if (images.hits.length < 40) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      loadMoreBtn.classList.add('hidden');
    } else {
      loadMoreBtn.classList.remove('hidden');
    }

    const { height: cardHeight } =
      imageContainerRef.firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    hideLoader();
    iziToast.error();
  }
}
function renderGallery(array) {
  const markup = array
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card">
        <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>
                ${likes}
              </p>
              <p class="info-item">
                <b>Views</b>
                ${views}
              </p>
              <p class="info-item">
                <b>Comments</b>
                ${comments}
              </p>
              <p class="info-item">
                <b>Downloads</b>
                ${downloads}
              </p>
            </div></a>
          </div>`;
      }
    )
    .join('');
  imageContainerRef.insertAdjacentHTML('beforeend', markup);
}
function loadMoreImages() {
  page += 1;
  fetchImagesAndRender(currentQuery, page);
}
