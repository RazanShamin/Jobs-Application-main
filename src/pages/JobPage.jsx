import React from "react";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";

const JobPage = ({ deleteJob }) => {
  const [job, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

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

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-red-100 p-2 font-bold break-all">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-red-100 p-2 font-bold">
                  {job.company.contactPhone}
                </p>
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
                  onClick={() => confirmDeleteJob(job.id)}
                >
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
