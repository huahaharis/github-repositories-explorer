export interface UserState {
  users: any[];
  username: string
  total: number;
  currentPage: number;
  loading: boolean;
  error: string | null;
}