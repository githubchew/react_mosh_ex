import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register } = useForm();
  console.log(register("name"));
};
export default Form;
