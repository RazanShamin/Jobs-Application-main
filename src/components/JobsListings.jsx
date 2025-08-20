import React, { useEffect, useState } from "react";
import Job from "./Job";
import Spinner from "./Spinner";

const JobsListings = ({ isHome = false }) => {
  // const recentJobs = isHome ? jobs.slice(0, 3) : jobs;
  const [serverJobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(
          "https://6742c465b7464b1c2a62a611.mockapi.io/Jobs"
        );
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  const recentJobs = isHome ? serverJobs.slice(0, 3) : serverJobs;

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
          Browse Jobs
        </h2>

        {/* <Job /> */}
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentJobs.map((job, index) => (
              <Job key={index} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsListings;
