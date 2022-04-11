import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const onChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const clearForm = () => {
    setForm(initialState);
  };
  return { form, onChangeForm, clearForm };
};
export default useForm;
