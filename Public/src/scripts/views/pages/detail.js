import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant">
        <img class="restaurant__detail__image" src="" alt="Restaurant Image">
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await TheRestaurantDbSource.getDetailRestaurant(url.id);
      const restaurantDetailContainer = document.querySelector('#restaurant');
      restaurantDetailContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);
      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.restaurant.id,
          name: restaurant.restaurant.name,
          description: restaurant.restaurant.description,
          pictureId: restaurant.restaurant.pictureId,
          rating: restaurant.restaurant.rating,
          city: restaurant.restaurant.city,
        },
      });
    } catch (error) {
      console.error(error);
    }
  },
};

export default Detail;
