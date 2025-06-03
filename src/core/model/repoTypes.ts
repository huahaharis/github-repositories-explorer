export interface RepoState {
  repos: any[];
  urlRepo: string
  total: number;
  currentPage: number;
  loading: boolean;
  error: string | null;
}