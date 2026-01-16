import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

import style from "./Form.module.css";

interface FormProps {
  onSubmit: (query: string) => void;
}

export default function Form({ onSubmit }: FormProps) {
  console.log(onSubmit);
  const handleSubmit = (formData: FormData) => {
    const query = formData.get("search") as string;
    if (!query.trim()) {
      toast.error("Ooops... something went wrong");
      return;
    }
    onSubmit(query.trim());
  };

  return (
    <form action={handleSubmit} className={style.form}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />

      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
}
