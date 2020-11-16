<template>
  <div class="current-dialog">
    <div class="current-dialog__list" v-if="messages.length">
      <div
        class="message"
        v-for="msg of messages"
        :key="msg.id"
        :class="getMessageClass(msg)"
      >
        <div
          class="message__avatar"
          :style="`background-image: url(${msg.user.avatarLink})`"
        ></div>
        <div class="message__text">
          <span> {{ msg.user.name }} {{ msg.time }} </span>
          <p>{{ msg.text }}</p>
        </div>
      </div>
    </div>
    <div class="empty" v-else>
      Список сообщений пуст
    </div>
    <div class="new-message">
      <textarea
        name="new"
        id="new"
        rows="2"
        v-model="newMessageText"
        @keypress.enter.exact.prevent="send()"
      ></textarea>
      <button class="new-message__send" @click="send()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          viewBox="0 0 24 24"
          width="32"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Dialog } from "@/models/dialog";
import { Message } from "@/models/message";
import { User } from "@/models/user";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CurrentDialog extends Vue {
  @Prop() public dialog!: Dialog;
  @Prop() public currentUser!: User;
  public newMessageText = "";

  public get messages() {
    return this.dialog.messages;
  }

  public getMessageClass(message: Message) {
    return this.currentUser.id === message.user.id ? "current" : "";
  }

  public send() {
    if (this.newMessageText === "") {
      return;
    }
    const now = new Date().toString().slice(16, 21);
    const newMsg = {
      user: this.currentUser,
      text: this.newMessageText,
      time: now,
      id: this.dialog.messages.length
    };
    this.dialog.messages.push(newMsg);

    this.newMessageText = "";
  }
}
</script>

<style scoped lang="scss">
.current-dialog {
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  position: relative;
  height: calc(100% - 4rem);
  max-height: 100vh;

  &__list {
    width: 100%;
    height: calc(100% - 110px);
    overflow: auto;
  }
}

.new-message {
  display: flex;
  height: 110px;
  width: 100%;
  padding: 1rem 5%;

  textarea {
    resize: none;
    border-radius: 5px;
    width: 100%;
    margin-right: 1rem;
    outline: none;
    border: 1px solid #888;
    padding: 1rem;
    min-width: 240px;
  }

  &__send {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    svg path:last-child {
      fill: #333;
    }

    &:hover {
      svg path:last-child {
        fill: #444;
      }
    }
  }
}

.message {
  padding: 1rem;
  display: flex;

  &.current {
    flex-direction: row-reverse;
  }

  &.current &__text {
    background-color: rgb(210, 248, 239);
    display: flex;
    flex-direction: column;
  }

  &__text {
    background-color: #fff;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.25);
    min-height: 70px;
    border-radius: 20px;
    padding: 1rem;
    margin: 0 1rem;
    max-width: 50%;
    min-width: 240px;

    span {
      color: #444;
      font-size: 0.75rem;
    }

    p {
      padding-top: 1rem;
      word-wrap: wrap;
    }
  }

  &__avatar {
    width: 40px;
    height: 40px;
    min-width: 40px;
    background-position: center;
    background-size: cover;
    border-radius: 40px;
  }
}

.empty {
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #ddd;
}
</style>
