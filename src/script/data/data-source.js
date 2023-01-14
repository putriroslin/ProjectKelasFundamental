import movies from './movies.js'; /**/

class DataSource {
  static searchMovie(keyword) { /**/
    return fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });    
    }
}
export default DataSource;