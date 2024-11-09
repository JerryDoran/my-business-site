export type ContactFormState<T> = {
  errors?: StringMap;
  successMessage?: string;
  data?: T;
  blurs?: StringToBooleanMap;
};

export type StringMap = {
  [key: string]: string;
};

export type StringToBooleanMap = {
  [key: string]: boolean;
};
