export interface IShow {
  id: string;
  name: string
  genres: string[];
  summary: string;
  premiered: string;
  runtime: string;

  image?: {
    medium: string;
  };
}

export interface IShowApi {
  [id: string]: IShow;
}