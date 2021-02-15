export interface TokenResponse {
  object: {
    success: boolean,
    expires_at: string,
    request_token: string,
  };
}

export interface MovieListResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  homepage?: string;
  genres?: {id: number, name: string}[];
  production_companies?: {id: number, name: string, logo_path: string, origin_country: string}[];
  production_countries?: {iso_3166_1: string, name: string}[];
}

export interface Environment {
  production: boolean;
  services: {[key: string]: string};
}
