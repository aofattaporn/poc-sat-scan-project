import { SyntheticEvent, FormEvent, useState } from "react";
import ApplicationDetails from "../types/ApplicationDetail";

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

  return { details, handleField, handleSubmit };
};
