import { StringMap } from "@/types/contact";
import { ZodError } from "zod";

export function convertZodErrors(error: ZodError): StringMap {
  return error.issues.reduce((acc: { [key: string]: string }, issue) => {
    acc[issue.path[0]] = issue.message;
    return acc;
  }, {});
}
