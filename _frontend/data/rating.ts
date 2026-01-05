export const categoryList = [
  'Story & Script',
  'Acting & Performances',
  'Direction & Filmmaking',
  'Music & Sound',
  'Visuals & Special Effects',
  'Entertainment value',
  'Emotional & Thematic Impact',
  'Overall Enjoyment'
] as const

export type Categories = (typeof categoryList)[number]

export const ratingList = [
  'Storyline',
  'Screenplay',
  'Pacing',
  'Ending',
  'Lead actors',
  'Supporting cast',
  'Chemistry',
  'Editing',
  'Cinematography',
  'Soundtrack',
  'CGI & VFX',
  'Costume Design',
  'Themes & Messages',
  'Personal Enjoyment'
] as const

type Fields = 'storyline' |
  'screenplay' |
  'pacing' |
  'ending' |
  'lead_actors' |
  'supporting_cast' |
  'chemistry' |
  'editing' |
  'cinematography' |
  'soundtrack' |
  'cgi' |
  'costume_design' |
  'themes_and_mesages' |
  'personal_enjoyment' |
  'voice_acting'

export type Ratings = (typeof ratingList)[number]

export type AnimationRatings = Ratings | 'Voice acting'

export interface RatingParams<T extends string = Ratings> {
  text: T
  field: Fields
  category: Categories
  description: string
}

export type AnimationRatingParams = RatingParams<AnimationRatings>

export const advancedRating: RatingParams[] = [
  {
    text: 'Storyline',
    field: 'storyline',
    category: 'Story & Script',
    description: 'Originality, coherence, and engagement'
  },
  {
    text: 'Screenplay',
    field: 'screenplay',
    category: 'Story & Script',
    description: 'Quality of writing, naturalness of conversations'
  },
  {
    text: 'Pacing',
    field: 'pacing',
    category: 'Story & Script',
    description: 'Whether the movie feels too slow or rushed'
  },
  {
    text: 'Ending',
    field: 'ending',
    category: 'Story & Script',
    description: 'Satisfaction with the conclusion'
  },
  {
    text: 'Lead actors',
    field: 'lead_actors',
    category: 'Acting & Performances',
    description: 'Performance of the main characters'
  },
  {
    text: 'Supporting cast',
    field: 'supporting_cast',
    category: 'Acting & Performances',
    description: 'Contribution of secondary characters'
  },
  {
    text: 'Soundtrack',
    field: 'soundtrack',
    category: 'Music & Sound',
    description: 'How well the music enhances the film'
  },
  {
    text: 'CGI & VFX',
    field: 'cgi',
    category: 'Visuals & Special Effects',
    description: 'Realism and integration of visual effects'
  },
  {
    text: 'Costume Design',
    field: 'costume_design',
    category: 'Visuals & Special Effects',
    description: 'Outfits that fit the characters and setting'
  },
  {
    text: 'Themes & Messages',
    field: 'themes_and_mesages',
    category: 'Emotional & Thematic Impact',
    description: 'Depth and relevance of underlying ideas'
  },
  {
    text: 'Personal Enjoyment',
    field: 'personal_enjoyment',
    category: 'Overall Enjoyment',
    description: 'Subjective satisfaction regardless of technical aspects'
  }
]

export const animationAdvancedRating: AnimationRatingParams[] = [
  {
    text: 'Voice acting',
    field: 'voice_acting',
    category: 'Music & Sound',
    description: 'Quality of vocal performances'
  }
]

export type RequestData = {
  [K in Fields]: number
}
