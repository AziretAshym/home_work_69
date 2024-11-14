export interface iShow {
  id: string;
  name: string
  genres: string[];
  summary: string;
}

export interface IShowApi {
  [id: string]: iShow;
}