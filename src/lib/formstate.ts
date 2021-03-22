import { useState } from "react";

export const useFormState = <S>(
    initialState: S
  ): [S, (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void] => {
    const [contact, setContact] = useState<S>(initialState);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setContact({ ...contact, [event.target.name]: event.target.value });
    };
  
    return [contact, handleChange];
  };