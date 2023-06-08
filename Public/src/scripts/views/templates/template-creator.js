import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL.replace('<pictureId>', restaurant.pictureId)}" crossorigin="anonymous" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    <h3>Menu</h3>
      <h4>Food</h4>
      <ul>
        ${restaurant.menus && restaurant.menus.foods
    ? restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')
    : ''}
      </ul>
      <h4>Drink</h4>
      <ul>
        ${restaurant.menus && restaurant.menus.drinks
    ? restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')
    : ''}
      </ul>
  <div class="restaurant__reviews">
    <h3>Customer Reviews</h3>
    <ul>
      ${restaurant.customerReviews
    ? restaurant.customerReviews
      .map((review) => `<li><b>${review.name}</b>: ${review.review}</li>`)
      .join('')
    : ''}
    </ul>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-image">
    <img class="restaurant-picture" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL.replace('<pictureId>', restaurant.pictureId)}" crossorigin="anonymous" loading="lazy" /> 
    </div>
    <div class="restaurant-content">
      <h3 class="restaurant-name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p class="restaurant-description">${restaurant.description}</p>
      <div class="restaurant-info">
        <p class="restaurant-city">${restaurant.city}</p>
        <p class="restaurant-rating">⭐️ ${restaurant.rating}</p>
      </div>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
