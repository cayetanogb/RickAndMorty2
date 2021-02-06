import { Location } from './location';

export interface LocationResults {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };

  results: Location[];
}
