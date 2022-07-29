import React from 'react'

const JobItem = (props) => {
  const {companyName, salaryRange, techs, title} = props.job
  return (
    <div>
      <h2>{title}</h2>
      <p>Empresa: {companyName}</p>
      <p>Range Salarial: {salaryRange}</p>
      <p>Tech Stack: {techs}</p>
    </div>
  )
};

const ListJobs = (props) => {
  const { list } = props;
  return (
    <div>
      {list.map(job => (
        <JobItem key={job.title} job={job} />
      ))}
    </div>
  )
}

export default ListJobs