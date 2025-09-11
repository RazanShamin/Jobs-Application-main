import React from "react";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { HomeIcon } from '@heroicons/react/24/outline';






const JobPage = ({ deleteJob }) => {
  const [job, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [copy,setCopy]=useState(false);
  const copyHandler = async () => {
    const textToCopy = `Email: ${job.company.contactEmail}\n Phone: ${job.company.contactPhone}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 2000);
    } catch (err) {
      console.error("error copying", err);
    }
  };
  
  
  
    
  
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(
          `https://6742c465b7464b1c2a62a611.mockapi.io/Jobs/${id}`
        );
        const data = await res.json();
        setJobs(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // const job = useLoaderData();
  const navigate = useNavigate();
  console.log(id);

  const confirmDeleteJob = (jobID) => {
    const confirmState = window.confirm(
      "Are you sure you want to delete this Job?"
    );
    if (!confirmState) return;
    deleteJob(jobID);
    console.log(jobID, "Deleted");
    toast.success("Job Deleted Successfully");

    setTimeout(() => {
      navigate("/jobs");
      // window.location.reload();
    }, 1000);
  };
 

  return loading ? (
    <Spinner />
  ) : (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-red-500 hover:text-red-600 flex items-center"
          >
            <FaArrowLeft className="mr-4" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-red-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left break-all">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 pt-1 mr-1" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-red-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">{job.description}</p>

                <h3 className="text-red-800 text-lg font-bold mb-2">Salary</h3>

                <p className="mb-4">{job.salary}</p>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                <h2 className="text-2xl">{job.company.name}</h2>

                <p className="my-2">{job.company.description}</p>

                <hr className="my-4" />
                 <div className="relative" > 
                 <svg  onClick={copyHandler}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-auto hover:cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                  </svg>
                  {copy && (
                 <span  className="absolute z-50 bg-green-100 text-green-900 text-xs px-2 py-1 rounded shadow right-0  mt-1 "
                   >
                 Copied!
              </span>
            )}
 
                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-red-100 p-2 font-bold break-all">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-red-100 p-2 font-bold">
                  {job.company.contactPhone}
                </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/jobs/edit/${job.id}`}
                  className="bg-red-500 hover:bg-red-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  className="bg-red-500 hover:bg-red text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  onClick={() => confirmDeleteJob(job.id)}>
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async () => {
  const res = await fetch(
    `/https://6742c465b7464b1c2a62a611.mockapi.io/Jobs/${id}`
  );
  const data = await res.json();
  return data;
};
export { JobPage as default, jobLoader };


 
   