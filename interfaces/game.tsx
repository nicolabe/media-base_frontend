export interface IGame {
  _id: string;
  title: string;
  creator: string;
}

export interface GQLGameQuery {
  getGames: IGame[];
}
