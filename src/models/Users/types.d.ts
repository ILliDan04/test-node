
export interface IUser {
    email: string;
    hashedPassword: string;
    validatePassword: (password: string) => boolean;
    generateAccessToken: () => string;
    createdAt: string;
    updatedAt: string;
  }