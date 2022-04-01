export const TEXT = {
  ERRORS: {
    requiredField: (requiredValue: string) =>
      `Field "${requiredValue}" is required`,

    userDoesntExists: "User not found",
    somethingWentWrong: "Something went wrong",
    incorrectEmailFormat: "Wrong email format",
    userExists: "User already exist",
    incorrectPasswordFormat: "Incorrect password format",
  },
};
export const JOI_ERRORS = {
  "string.email": "Wrong email format",
  "any.required": "Field {{#label}} is required",
};
