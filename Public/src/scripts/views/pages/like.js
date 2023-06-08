import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Restaurant</h2>
        <div id="restaurants" class="restaurants">
          <div class="restaurant-item__not__found">Tidak ada resto untuk ditampilkan</div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    const notFoundElement = document.querySelector('.restaurant-item__not__found');

    if (restaurants.length > 0) {
      notFoundElement.style.display = 'none';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      notFoundElement.style.display = 'block';
    }
  },
};

export default Like;
