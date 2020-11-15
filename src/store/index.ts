import { User } from "@/models/user";
import { Dialog } from "@/models/dialog";
import Vue from "vue";
import Vuex from "vuex";
import { Message } from "@/models/message";

Vue.use(Vuex);

const mockUser: User = {
  name: "Иван Иванов",
  avatarLink:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToVZMOqi-H-_ECG9I_2pA_yf94xGcFsj2tuQ&usqp=CAU",
  dialogs: [],
  id: 1
};

const now = new Date().toString().slice(16, 21);

const mockDialog: Dialog = {
  messages: [
    {
      user: mockUser,
      text: "хай, давно тебя здесь не видел",
      time: now,
      id: 0
    }
  ],
  users: [mockUser]
};

mockUser.dialogs.push(mockDialog, { messages: [], users: [mockUser] });

export default new Vuex.Store({
  state: {
    currentUser: {
      dialogs: [mockDialog] as Dialog[],
      name: "" as string,
      avatarLink: "" as string,
      id: 0
    },

    mockUser: mockUser
  },
  mutations: {
    login(state, user: User) {
      state.currentUser.name = user.name;
      state.currentUser.avatarLink = user.avatarLink
        ? user.avatarLink
        : "https://i.pinimg.com/564x/39/b2/a6/39b2a66a178a99028c194e204b1e2402.jpg";
      mockDialog.users.push(state.currentUser);
      state.currentUser.dialogs.push({
        messages: [],
        users: [state.currentUser]
      });
    }
  }
});
