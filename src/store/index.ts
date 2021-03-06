import { User } from "@/models/user";
import { Dialog } from "@/models/dialog";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const mockUser: User = {
  name: "Иван Иванов",
  avatarLink:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToVZMOqi-H-_ECG9I_2pA_yf94xGcFsj2tuQ&usqp=CAU",
  dialogs: [],
  id: 1
};

const mockDialog: Dialog = {
  messages: [],
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
      if (!state.currentUser.name.length) {
        state.currentUser.dialogs.push({
          messages: [],
          users: [state.currentUser]
        });
      }
      state.currentUser.name = user.name;
      state.currentUser.avatarLink = user.avatarLink
        ? user.avatarLink
        : "https://i.pinimg.com/564x/39/b2/a6/39b2a66a178a99028c194e204b1e2402.jpg";
      mockDialog.users.push(state.currentUser);
    }
  }
});
