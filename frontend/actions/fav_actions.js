import * as FavUtil from '../util/fav_util';

export const RECEIVE_FAV = 'RECEIVE_FAV';

export const createFav = (fav) => (dispatch) =>
  FavUtil.createFav(fav).then((res) => console.log(res));

export const fetchFav = (id) => (dispatch) =>
  FavUtil.fetchFav(id).then((res) => console.log(res));
