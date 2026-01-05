export const movieTypesList = [
  'Movie',
  'TV Series',
  'Short',
  'TV Episode',
  'TV Special',
  'TV Short'
] as const

export type MovieTypes = (typeof movieTypesList)[number]

export const movieGenresList = [
  'Action',
  'Adventure',
  'Animation',
  'Biography',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'Film-Noir',
  'Game show',
  'History',
  'Horror',
  'Music',
  'Musical',
  'Mystery',
  'News',
  'Reality-TV',
  'Romance',
  'Sci-Fi',
  'Short',
  'Talk-Show',
  'Thriller',
  'War',
  'Western'
]

export type MovieGenres = (typeof movieGenresList)[number]
