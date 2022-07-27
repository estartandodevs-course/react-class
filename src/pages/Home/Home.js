import React, { useEffect, useState } from "react";
import ListJobs from "../../components/ListJobs/ListJobs";
import Pagination from "../../components/Pagination/Pagination";
import { API_URL } from "../../service/constants";
import "./Home.css";

const Home = () => {
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setJobs(data));
  }, []);

  const deleteJob = (id) => {
    fetch(`${API_URL}/id/${id}`, {method: 'DELETE'})
      .then(res => res.json())
      .then(data => setJobs(data));
  }

  return (
    <main className='home-page'>
      <h1 className='home-title'>Vagas de Emprego diretamente do Devs</h1>
      <ListJobs list={jobs} />
      <Pagination page={page} setPage={setPage} maximumPages={2} />
    </main>
  )
}

export default Home;
