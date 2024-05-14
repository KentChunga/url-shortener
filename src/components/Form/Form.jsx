import { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import axios from "../../api/axios";

const Form = () => {
  const [url, setUrl] = useState("");
  const [shortlyURL, setShortlyURL] = useState();

  useEffect(() => {}, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setUrl(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(import.meta.env.VITE_API_KEY);
    try {
      const response = await axios.post("/api/v1/shorten", url);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="relative flex w-full -translate-y-1/2 flex-col gap-4 overflow-hidden rounded-md bg-darkViolet bg-[url('/images/bg-shorten-mobile.svg')] bg-cover bg-left bg-no-repeat  p-5 lg:flex-row lg:bg-[url('/images/bg-shorten-desktop.svg')] lg:px-16 lg:py-12">
      <Input handleChange={handleChange} />
      <Button handleClick={handleSubmit} />
    </form>
  );
};

export default Form;
