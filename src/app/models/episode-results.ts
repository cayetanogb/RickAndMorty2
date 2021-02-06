import { Episode } from './episode';

export interface EpisodeResults {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  },

  results: Episode[];
}
