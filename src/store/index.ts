import { User } from "@/models/user";
import { Dialog } from "@/models/dialog";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const mockUser: User = {
  name: "Иван Иванов",
  avatarLink:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToVZMOqi-H-_ECG9I_2pA_yf94xGcFsj2tuQ&usqp=CAU",
  dialogs: []
};

const mockDialog: Dialog = {
  messages: [
    {
      user: mockUser,
      text: "хай, давно тебя здесь не видел"
    }
  ],
  users: [mockUser],
  name: mockUser.name
};
mockUser.dialogs.push(mockDialog);

export default new Vuex.Store({
  state: {
    curentUser: {
      dialogs: [mockDialog] as Dialog[],
      name: "" as string,
      avatarLink: "" as string
    },

    mockUser: mockUser
  },
  mutations: {
    login(state, user: User) {
      state.curentUser.name = user.name;
      state.curentUser.avatarLink = user.avatarLink
        ? user.avatarLink
        : "https://i.pinimg.com/564x/39/b2/a6/39b2a66a178a99028c194e204b1e2402.jpg";
    }
  },
  actions: {},
  modules: {}
});
