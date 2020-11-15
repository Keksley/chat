import { Message } from "./message";
import { User } from "./user";

export interface Dialog {
  messages: Message[];
  users: User[];
}
