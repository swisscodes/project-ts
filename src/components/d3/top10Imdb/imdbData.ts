export type TmovieData = {
  name:string,
  contentRating:string,
  duration:number,
  starRating:number,
  votes:number,
  gross:number
}

export type TmovieDataArray = TmovieData[]

export const movieData:TmovieDataArray = [
  {
    name: 'Avengers: Endgame',
    contentRating: '12a-rated',
    duration: 181, // in minutes
    starRating: 8.4, // out of 10
    votes: 747374,
    gross: 858 // USD million
  },
  {
    name: 'The Lion King',
    contentRating: 'pg-rated',
    duration: 118,
    starRating: 6.9,
    votes: 198014,
    gross: 544
  },
  {
    name: 'Star Wars: The Rise of Skywalker',
    contentRating: '12a-rated',
    duration: 141,
    starRating: 6.6,
    votes: 343828,
    gross: 515
  },
  {
    name: 'Frozen 2',
    contentRating: 'u-rated',
    duration: 103,
    starRating: 6.9,
    votes: 120859,
    gross: 477
  },
  {
    name: 'Toy Story 4',
    contentRating: 'u-rated',
    duration: 100,
    starRating: 7.8,
    votes: 187391,
    gross: 434
  },
  {
    name: 'Captain Marvel',
    contentRating: '12a-rated',
    duration: 123,
    starRating: 6.9,
    votes: 420459,
    gross: 427
  },
  {
    name: 'Spider-Man: Far From Home',
    contentRating: '12a-rated',
    duration: 129,
    starRating: 7.5,
    votes: 301963,
    gross: 391
  },
  {
    name: 'Aladdin',
    contentRating: 'pg-rated',
    duration: 128,
    starRating: 7.0,
    votes: 213479,
    gross: 356
  },
  {
    name: 'Joker',
    contentRating: '15-rated',
    duration: 122,
    starRating: 8.5,
    votes: 840556,
    gross: 335
  },
  {
    name: 'Jumanji: The Next Level',
    contentRating: '12a-rated',
    duration: 123,
    starRating: 6.7,
    votes: 163288,
    gross: 317
  },
];