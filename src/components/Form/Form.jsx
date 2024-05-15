import { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import axios from "../../api/axios";

const Form = () => {
  const [urls, setUrls] = useState("");
  // const [shortlyURL, setShortlyURL] = useState();

  useEffect(() => {}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUrls((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/shorten", urls);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="absolute -top-[4.5rem] flex w-full  flex-col gap-4 overflow-hidden rounded-md bg-darkViolet bg-[url('/images/bg-shorten-mobile.svg')] bg-cover bg-left bg-no-repeat  p-5 lg:flex-row lg:bg-[url('/images/bg-shorten-desktop.svg')] lg:px-16 lg:py-12"
      onSubmit={handleSubmit}
    >
      <Input handleChange={handleChange} />
      <Button />
    </form>
  );
};

export default Form;
