class MovieItem extends HTMLElement {/**/
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    set movie(movie) {/**/
      this._movie = movie;/**/
      this.render();
    }
    render() {
      this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                margin-bottom: 15px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
                background-color: white;
            }
            .fan-art-movie {/**/
                width: 100%;
                max-height: 200px;
                object-fit: cover;
                object-position: center;
            }
            .movie-info {/**/
                padding: 20px;
            }
            .movie-info > h2 {/**/
                font-weight: lighter;
                text-align: center;
                font-size: large;
                font-weight: bold;
            }
            .movie-info > h4 {/**/
              text-align: left;
              text-decoration: underline;
            }
            .movie-info > p {/**/
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10;
            }
        </style>

        <div class="container mt-5">
        <div class="row">
        <div class="col-sm-4">
        <img class="fan-art-movie" src="${this._movie.strMealThumb}" alt="Fan Art">/**/
        <div class="movie-info">/**/
          <h2>${this._movie.strMeal}</h2>/**/
          <h4>${this._movie.strArea}</h4>/**/
          <p>${this._movie.strInstructions}</p> /**/
        </div>
        </div>
        </div>
        </div>
      `;
    }
  }
   
  customElements.define('movie-item', MovieItem);/**/