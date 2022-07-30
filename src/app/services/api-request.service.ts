import { Router, UrlSegment } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  // API request fragments >>
  key: string = '6e17bd4768b3f5848c1d3b05fd8cadd9';
  baseImgURL: string = 'https://image.tmdb.org/t/p';
  imgSize: string = '/original';

  // Translation tools >>
  isEnglish: boolean = true;
  arabic: string = 'ar';
  english: string = 'en-US';

  constructor(private http: HttpClient, private _router: Router) {}

  // Popular people and each person details >>
  getTrendingPeople() {
    return this.http
      .get(
        `https://api.themoviedb.org/3/person/popular?api_key=${
          this.key
        }&language=${this.isEnglish ? this.english : this.arabic}&page=1`
      )
      .pipe(
        map((data: any) => data.results),
        map((item) => {
          return item.map((person: any) => {
            return {
              ...person,
              profile_path: `${this.baseImgURL}${this.imgSize}${person.profile_path}`,
            };
          });
        })
      );
  }
  getPersonDetails(id: number) {
    return this.http
      .get(
        `https://api.themoviedb.org/3/person/${id}?api_key=${
          this.key
        }&language=${this.isEnglish ? this.english : this.arabic}`
      )
      .pipe(
        map((person: any) => person),
        map((person) => {
          return {
            ...person,
            profile_path: `${this.baseImgURL}${this.imgSize}${person.profile_path}`,
            backdrop_path: `${this.baseImgURL}${this.imgSize}${person.backdrop_path}`,
          };
        })
      );
  }

  // Popular movies and each movie details >>
  getTrendingMovies() {
    return this.http
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          this.key
        }&language=${this.isEnglish ? this.english : this.arabic}&page=1`
      )
      .pipe(
        map((data: any) => data.results),
        map((item) => {
          return item.map((movie: any) => {
            return {
              ...movie,
              poster_path: `${this.baseImgURL}${this.imgSize}${movie.poster_path}`,
              backdrop_path: `${this.baseImgURL}${this.imgSize}${movie.backdrop_path}`,
            };
          });
        })
      );
  }
  getUpcomingMovies() {
    return this.http
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${
          this.key
        }&language=${this.isEnglish ? this.english : this.arabic}&page=1`
      )
      .pipe(
        map((data: any) => data.results),
        map((item) => {
          return item.map((movie: any) => {
            return {
              ...movie,
              poster_path: `${this.baseImgURL}${this.imgSize}${movie.poster_path}`,
              backdrop_path: `${this.baseImgURL}${this.imgSize}${movie.backdrop_path}`,
            };
          });
        })
      );
  }
  getMovieDetails(id: number) {
    return this.http
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          this.key
        }&language=${this.isEnglish ? this.english : this.arabic}`
      )
      .pipe(
        map((media: any) => media),
        map((media) => {
          return {
            ...media,
            poster_path: `${this.baseImgURL}${this.imgSize}${media.poster_path}`,
            backdrop_path: `${this.baseImgURL}${this.imgSize}${media.backdrop_path}`,
          };
        })
      );
  }

  // Popular TV series and each tv details >>
  getTrendingTV() {
    return this.http
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${this.key}&language=${
          this.isEnglish ? this.english : this.arabic
        }&page=1`
      )
      .pipe(
        map((data: any) => data.results),
        map((item) => {
          return item.map((tv: any) => {
            return {
              ...tv,
              poster_path: `${this.baseImgURL}${this.imgSize}${tv.poster_path}`,
            };
          });
        })
      );
  }
  getUpcomingTV() {
    return this.http
      .get(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${
          this.key
        }&language=${this.isEnglish ? this.english : this.arabic}&page=1`
      )
      .pipe(
        map((data: any) => data.results),
        map((item) => {
          return item.map((tv: any) => {
            return {
              ...tv,
              poster_path: `${this.baseImgURL}${this.imgSize}${tv.poster_path}`,
              backdrop_path: `${this.baseImgURL}${this.imgSize}${tv.backdrop_path}`,
            };
          });
        })
      );
  }
  getTVDetails(id: number) {
    return this.http
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${this.key}&language=${
          this.isEnglish ? this.english : this.arabic
        }`
      )
      .pipe(
        map((tv: any) => tv),
        map((tv) => {
          return {
            ...tv,
            poster_path: `${this.baseImgURL}${this.imgSize}${tv.poster_path}`,
            backdrop_path: `${this.baseImgURL}${this.imgSize}${tv.backdrop_path}`,
          };
        })
      );
  }

  // Search feature >>
  getSearch(query: string) {
    return this.http
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${
          this.key
        }&language=${
          this.isEnglish ? this.english : this.arabic
        }&page=1&include_adult=false&query=${this.modifyQuery(query)}`
      )
      .pipe(
        map((data: any) => data.results),
        map((item) => {
          return item.map((search: any) => {
            return {
              ...search,
              poster_path: `${this.baseImgURL}${this.imgSize}${search.poster_path}`,
              backdrop_path: `${this.baseImgURL}${this.imgSize}${search.backdrop_path}`,
            };
          });
        }),
        map((list) => {
          return list.filter((item: any) => item.media_type !== 'person');
        })
      );
  }
  modifyQuery(string: string) {
    return string.trim().replace(' ', '-');
  }

  // Change language feature >>
  setLanguageArabic(): void {
    this.isEnglish = false;
  }
  setLanguageEnglish(): void {
    this.isEnglish = true;
  }
  reNavigate() {
    let currentUrl = this._router.url;
    this._router
      .navigateByUrl('details', { skipLocationChange: true })
      .then(() => {
        this._router.navigate([currentUrl]);
      });
  }
}

// Multiple routes for the same component >>
export function matchingURL(url: UrlSegment[]) {
  if (url.length >= 1) {
    const path = url[1].path;
    if (path == 'movie' || path == 'tv' || path == 'person') {
      return {
        consumed: url,
      };
    }
  }
  return null;
}
