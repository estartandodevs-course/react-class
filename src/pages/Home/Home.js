import React, { useEffect, useState } from "react";
import ListJobs from "../../components/ListJobs/ListJobs";
import Pagination from "../../components/Pagination/Pagination";
import { ITEMS_PER_PAGE } from "../../config/pagination";
import { getJobs, getCountOfJobs } from "../../services/listing";
import "./Home.css";

const Home = () => {
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const maximumPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const loadCount = async () => {
    const count = await getCountOfJobs();
    setTotalCount(count);
  }

  const loadJobs = async (page) => {
    const offset = (page - 1) * ITEMS_PER_PAGE;
    const jobs = await getJobs(ITEMS_PER_PAGE, offset);
    setJobs(jobs);
  }

  useEffect(() => {
    loadCount()
  }, [])

  useEffect(() => {
    loadJobs(page);
  }, [page]);

  return (
    <main className='home-page'>
      <h1 className='home-title'>Vagas de Emprego diretamente do Devs</h1>
      <ListJobs list={jobs} />
      <Pagination 
        page={page}
        setPage={setPage}
        maximumPages={maximumPages}
      />
    </main>
  )
}

export default Home;
