// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Opcjonalny import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';
// Opisany w dokumentacji
import iziToast from 'izitoast';
// Opcjonalny import stylów
import 'izitoast/dist/css/iziToast.min.css';
import ApiService from './api-service';

const loadMoreBtn = document.querySelector('.load-more');

const formRef = document.getElementById('search-form');
const imageContainerRef = document.querySelector('.gallery');

const search = new ApiService();
const lightBox = new SimpleLightbox('.gallery a');

formRef.addEventListener('submit', submitForm);
loadMoreBtn.addEventListener('click', loadMoreImages);
function submitForm(event) {
  event.preventDefault();
  imageContainerRef.innerHTML = '';
  search.searchQuery = formRef.elements.searchQuery.value;
  formRef.reset();
  addImageAndUpdateUI();
}
async function addImageAndUpdateUI() {
  try {
    const image = await search.fetchImage();
    if (search.currentPage === 1 && search.totalHits !== 0) {
      iziToast.success({
        message: `Hooray! We found ${search.totalHits} images.`,
      });
    }
    renderImage(image.hits);
  } catch {
    iziToast.error({
      message: 'Oops! Something went wrong! Try to reload the page!',
    });
  }
}

function renderImage(array) {
  if (!array.length) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again.',
    });
    return;
  }
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
  lightBox.refresh();
  search.addPage();
}
function loadMoreImages() {
  this.page += 1;
  addImageAndUpdateUI();
}
