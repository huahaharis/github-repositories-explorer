export const fetchUsersApi = async (username: string, page: number) => {
  const response = await fetch(
    `https://api.github.com/search/users?q=${username}&page=${page}`
  );
  const json = await response.json();  
  return { users: json.items, total: json.total_count };
};
