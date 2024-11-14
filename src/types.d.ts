export interface IShow {
  id: string;
  name: string
  genres: string[];
  summary: string;
  image?: {
    medium: string;
  };
}

export interface IShowApi {
  [id: string]: IShow;
}