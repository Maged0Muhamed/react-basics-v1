export interface userData {
  userName: string;
  email: string;
}
export interface IformInput {
  label: string;
  id: string;
  name: keyof userData;
  type: string;
}
export const formInputsData: IformInput[] = [
  {
    label: "Username:",
    id: "username",
    name: "userName",
    type: "text",
  },
  {
    label: "Email:",
    id: "email",
    name: "email",
    type: "email",
  },
];
