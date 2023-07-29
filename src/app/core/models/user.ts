export interface IUser {
  email: string;
  password: string;
  name?: string;
  surname?: string;
  phoneNumber?: string;
  address?: string;
  paymentMethod?: number & { name: string; value: number };
  role?: { name: string; value: number };
}
