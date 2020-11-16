<template>
  <div class="dialogs">
    <button class="dialogs__show-btn" @click="showDialog = !showDialog">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </button>
    <div class="dialogs__list" v-if="user" :class="dialogsClassName">
      <div
        class="dialogs__dialog-card"
        v-for="dialog of user.dialogs"
        :key="dialog.name"
        @click="openDialog(dialog)"
        :class="curDialog === dialog ? 'active' : ''"
      >
        <div
          class="dialogs__avatar"
          :style="`background-image: url(${getAvatarUrl(dialog, user)})`"
        ></div>
        {{ getDialogName(dialog, user) }}
      </div>
    </div>
    <div class="dialogs__current" :class="currentDialogClassName">
      <CurrentDialog :dialog="curDialog" v-if="curDialog" :currentUser="user" />
      <div class="empty" v-else>
        Выберите с кем общаться
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Dialog } from "@/models/dialog";
import { User } from "@/models/user";
import { Component, Prop, Vue } from "vue-property-decorator";
import CurrentDialog from "./CurrentDialog.vue";

@Component({
  components: {
    CurrentDialog
  }
})
export default class Dialogs extends Vue {
  public curDialog!: Dialog | null;

  @Prop() private user!: User;
  public showDialog = true;

  constructor() {
    super();
    this.curDialog = null;
  }

  public get currentDialogClassName() {
    return this.showDialog ? "collapsed" : "visible";
  }

  public get dialogsClassName() {
    return this.showDialog ? "visible" : "collapsed";
  }

  public openDialog(dialog: Dialog) {
    this.showDialog = false;
    this.curDialog = dialog;
  }

  public getAvatarUrl(dialog: Dialog, curUser: User) {
    const notCurUser = this.getNotCurUser(dialog, curUser);

    if (notCurUser) {
      return notCurUser.avatarLink;
    } else {
      return curUser.avatarLink;
    }
  }

  public getDialogName(dialog: Dialog, curUser: User) {
    const notCurUser = this.getNotCurUser(dialog, curUser);
    if (notCurUser) {
      return notCurUser.name;
    } else {
      return curUser.name;
    }
  }

  private getNotCurUser(dialog: Dialog, curUser: User) {
    return dialog.users.find(user => user.id !== curUser.id);
  }
}
</script>

<style scoped lang="scss">
.empty {
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #888;
}

.dialogs {
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative;

  &__show-btn {
    display: none;
    background-color: transparent;
    border: none;
    outline: none;
    position: absolute;
    top: 1rem;
    left: 1rem;
    cursor: pointer;

    svg {
      width: 32px;
      height: 32px;

      path:last-child {
        fill: #333;

        &:hover {
          fill: #444;
        }
      }
    }
  }

  &__current {
    width: 100%;
  }

  &__list {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding-top: 4rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
  }

  &__dialog-card {
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;
    min-width: 320px;
    min-height: 70px;
    background-color: #fff;
    border-bottom: 1px solid #888;
    cursor: pointer;

    &.active {
      background-color: #333;
      color: #fff;
    }
  }

  &__avatar {
    width: 40px;
    height: 40px;
    background-position: center;
    background-size: cover;
    border-radius: 40px;
    margin-right: 1rem;
  }
}

@media screen and (max-width: 800px) {
  .dialogs__show-btn {
    display: block;
  }

  .visible {
    width: 100%;
  }

  .collapsed {
    display: none;
  }
}
</style>
