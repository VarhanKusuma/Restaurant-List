const { I } = inject();
const assert = require('assert');

Feature('Liking Restaurants');

Before(() => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', () => {
  I.seeElement('#restaurants');
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async () => {
  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item__not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant-name a');

  const firstResto = locate('.restaurant-name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedRestoTitle = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one restaurant', async () => {
  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item__not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant-name a');

  const firstResto = locate('.restaurant-name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedRestoTitle = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
  

  I.seeElement('.restaurant-name a');

  const firstRestoLiked = locate('.restaurant-name a').first();
  I.click(firstRestoLiked);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item__not__found');

});