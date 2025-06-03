export interface RepoState {
  repos: any[];
  username: string
  total: number;
  currentPage: number;
  loading: boolean;
  error: string | null;
}