import { User } from "./user";

export interface Message {
  user: User;
  text: string;
  time: string;
  id: number;
}
