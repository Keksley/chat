<template>
  <div class="dialogs">
    <div class="dialogs__list" v-if="user">
      <div
        class="dialogs__dialog-card"
        v-for="dialog of user.dialogs"
        :key="dialog.name"
      >
        <div
          class="dialogs__avatar"
          :style="`background-image: url(${getAvatarUrl(dialog, user)})`"
        ></div>
        {{ getDialogName(dialog, user) }}
      </div>
    </div>
    <div class="dialogs__current"></div>
  </div>
</template>

<script lang="ts">
import { Dialog } from "@/models/dialog";
import { User } from "@/models/user";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Dialogs extends Vue {
  @Prop() private user!: User;

  constructor() {
    super();
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
.dialogs {
  display: flex;
  height: 100vh;
  width: 100%;

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
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
    cursor: pointer;
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
</style>
