import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import AddJobPage from "./pages/AddJobPage.jsx";
import HomePage from "./pages/HomePage.jsx";

import JobsPage from "./pages/JobsPage.jsx";
import EditJobPage from "./pages/EditJobPage.jsx";
import JobPage, { jobLoader } from "./pages/JobPage";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import SignInPage from "./pages/SignInpage.jsx";
function App() {
  const addJob = async (newJob) => {
    const newJobUpload = await fetch(
      "https://6742c465b7464b1c2a62a611.mockapi.io/Jobs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      }
    );
  };
  const EditJob = async (newJob, id) => {
    const editOldJob = await fetch(
      `https://6742c465b7464b1c2a62a611.mockapi.io/Jobs/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      }
    );
  };
  const deleteJob = async (id) => {
    const newJobUpload = await fetch(
      `https://6742c465b7464b1c2a62a611.mockapi.io/Jobs/${id}`,
      {
        method: "DELETE",
      }
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} />
        <Route path="/add-job" element={<AddJobPage addNewJob={addJob} />} />
        <Route
          path="/jobs/edit/:id"
          element={<EditJobPage EditJob={EditJob} />}
        />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/jobs/*" element={<NotFoundPage />} />
        <Route path="/signin" element={<SignInPage/>}/>
      </Route>
    )
  );
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<MainLayout />}>
    //       <Route index element={<HomePage />} />
    //       <Route path="/jobs" element={<JobsPage />} />
    //       <Route path="/add-job" element={<AddJobPage />} />
    //       <Route path="*" element={<NotFoundPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}

export default App;
