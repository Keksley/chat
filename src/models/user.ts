import { Dialog } from "./dialog";

export interface User {
  dialogs: Dialog[];
  name: string;
  avatarLink?: string;
  id: number;
}
