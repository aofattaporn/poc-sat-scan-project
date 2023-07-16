import React from "react";
import { useCreatApplication } from "../libs/useApplicationDetails";
function UploadPage() {
  // adding custom hook just handeler
  const { details, handleField, handleSubmit, sendDataToPreview } = useCreatApplication();

  return (
    <div className="bg-main-white mx-4 md:mx-60 my-10 p-20 shadow-md">
      <form onSubmit={sendDataToPreview}>
        <h1 className="text-lg font-bold text-black-primary mb-8">
          Application Details
        </h1>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              App ID*
            </label>
            <input
              type="text"
              id="app_id"
              onChange={handleField}
              value={details.appId}
              name="appId"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="AP1416"
              //required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              App Name*
            </label>
            <input
              type="text"
              id="app_name"
              onChange={handleField}
              value={details.appName}
              name="appName"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Fast Easy"
              //required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              SAT Ticket ID*
            </label>
            <input
              type="text"
              id="sat_ticket_id"
              onChange={handleField}
              value={details.satTicketId}
              name="satTicketId"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="SAT2023_00261"
              //required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Project owner name*
            </label>
            <input
              type="text"
              id="project_owner_name"
              onChange={handleField}
              value={details.projectOwnerName}
              name="projectOwnerName"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Anchalee Limumpai"
              //required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Request Date*
            </label>
            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </div>
              <input
                type="date"
                onChange={handleField}
                value={details.requestDate}
                name="requestDate"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
                //required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Release*
            </label>
            <div className="relative max-w-sm">
              <input
                type="month"
                onChange={handleField}
                value={details.release}
                name="release"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
                //required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-full">
            preview data
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadPage;
