import { API_URL } from "./constants";

export const getJobs = async (limit, offset) => {
  const jobs = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`)
    .then(res => res.json())
    .then(data => data);

  return jobs;
}

export const getCountOfJobs = async () => {
  const count = fetch(`${API_URL}/count`)
    .then(res => res.json())
    .then(({ rows }) => rows);

  return count;
}

export const deleteJob = async (id) => {
  const deletedRows = await fetch(`${API_URL}/id/${id}`, {method: 'DELETE'})
    .then(res => res.json())
    .then(({deleted}) => deleted);

  return deletedRows
}
