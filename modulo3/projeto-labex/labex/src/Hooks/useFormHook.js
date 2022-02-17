import { useState } from "react";

 const useFormHook = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChangeForm = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return { form, onChangeForm };
};

export default useFormHook;