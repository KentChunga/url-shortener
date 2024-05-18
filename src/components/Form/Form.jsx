import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import axios from "../../api/axios";
import useUrls from "../../hooks/useUrls";

const Form = () => {
  const [urls, setUrls] = useState({ url: "" });
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const { shortUrls, setShortUrls } = useUrls();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue(value);
    setUrls((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const exists = shortUrls.find((url) => url.longurl === inputValue);

    if (exists) {
      setError("The URL has already been shortened, scroll down to copy it.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/shorten", urls);

      if (!response.error) {
        const { short_url } = response.data;

        console.log(response.data);
        setCleanuri({ cleanuri: short_url });
        const savedUrls =
          JSON.parse(localStorage.getItem("shortly-urls")) || [];
        savedUrls.push({
          longurl: inputValue,
          cleanuri: short_url,
        });
        setShortUrls((prevUrls) => [
          ...prevUrls,
          { longurl: inputValue, cleanuri: short_url },
        ]);
        localStorage.setItem("shortly-urls", JSON.stringify(savedUrls));
        setUrls({});
        setInputValue("");
        setError("");
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`absolute -top-[4.5rem] flex w-full  flex-col gap-4 overflow-hidden rounded-md bg-veryDarkViolet bg-[url('/images/bg-shorten-mobile.svg')] bg-cover bg-left bg-no-repeat  p-5  lg:bg-[url('/images/bg-shorten-desktop.svg')] lg:px-16  ${error || loading ? "mb-8 pt-8 lg:pb-6" : "lg:py-12"}`}
    >
      <form
        className={`flex flex-col gap-4 lg:flex-row `}
        onSubmit={handleSubmit}
      >
        <Input handleChange={handleChange} value={inputValue} error={error} />
        <Button />
      </form>
      {loading && <div className="font-bold text-cyan">Shortening....</div>}
    </div>
  );
};

export default Form;
