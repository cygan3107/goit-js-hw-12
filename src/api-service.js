import axios from 'axios';
const PER_PAGE = 40;
const API_KEY = '44883181-49eb7880702be53042c4f854e';
const BASE_URL = 'https://pixabay.com/api/';

export default class ApiService {
  #searchQuery;
  #page;
  #totalHits;

  constructor() {
    this.#searchQuery = '';
    this.#page = 1;
    this.#totalHits = 0;
  }

  addPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }

  isMorePage() {
    return PER_PAGE * (this.#page - 1) < this.#totalHits;
  }

  get totalHits() {
    return this.#totalHits;
  }

  get currentPage() {
    return this.#page;
  }

  set searchQuery(value) {
    this.#searchQuery = value;
  }

  async fetchImage() {
    const responce = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${
        this.#searchQuery
      }&image_type=photo&orientation=horizontal&safesearch=true&per_page=${PER_PAGE}&page=${
        this.#page
      }`
    );
    this.#totalHits = responce.data.totalHits;
    return responce.data;
  }
}