import { SyntheticEvent, FormEvent, useState } from "react";
import ApplicationDetails from "../types/ApplicationDetail";
import { previewSatReport } from "../services/previewsService";

export const useCreatApplication = () => {
  const [details, setDetails] = useState<ApplicationDetails>({
    appId: "",
    appName: "",
    projectOwnerName: "",
    satTicketId: "",
    requestDate: "",
    release: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("app id : ", details?.appId);
    console.log("appName : ", details?.appName);
    console.log("satTicketId : ", details?.satTicketId);
    console.log("requestDate : ", details?.requestDate);
    console.log("Release : ", details?.release);
  };

  const handleField = (e: SyntheticEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendDataToPreview = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const {
    //   appId,
    //   appName,
    //   projectOwnerName,
    //   satTicketId,
    //   requestDate,
    //   release,
    // } = details;

    try {
      // Send the data to the backend API without using 'params'
      const response = await previewSatReport(details);

      console.log(response.data); // Assuming the response contains the data you need
    } catch (error) {
      console.log(error);
    }
  };

  return { details, handleField, handleSubmit, sendDataToPreview };
};
