import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async getHomePageRestaurants() {
    const response = await fetch(API_ENDPOINT.HOMEPAGE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheRestaurantDbSource;
