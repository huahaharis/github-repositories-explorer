export const fetchReposApi = async (urlRepo: string) => {
  const response = await fetch(
    `${urlRepo}`
  );  
  const json = await response.json();  
  return { repos: json };
};
