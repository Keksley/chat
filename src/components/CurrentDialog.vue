<template>
  <div class="curent-dialog">
    <div class="current-dialog__list" v-if="messages.length">
      <div
        class="message"
        v-for="msg of messages"
        :key="msg.text"
        :class="getMessageClass(msg)"
      >
        <div
          class="message__avatar"
          :style="`background-image: url(${msg.user.avatarLink})`"
        ></div>
        <div class="message__text">{{ msg.text }}</div>
      </div>
    </div>
    <div class="empty" v-else>
      Список сообщений пуст
    </div>
    <div class="new-message">
      <textarea name="new" id="new" rows="2"></textarea>
      <button class="new-message__send">
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
  @Prop() messages!: Message[];
  @Prop() currentUser!: User;

  getMessageClass(message: Message) {
    return this.currentUser.id === message.user.id ? "current" : "";
  }
}
</script>

<style scoped lang="scss">
.new-message {
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  padding: 1rem 20%;

  textarea {
    resize: none;
    border-radius: 5px;
    width: 100%;
    margin-right: 1rem;
    outline: none;
    border: 1px solid #888;
    padding: 1rem;
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

.curent-dialog {
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  position: relative;
  height: 100%;

  &__list {
    width: 100%;
    height: 100%;
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
  }

  &__text {
    background-color: #fff;
    box-shadow: 2px 2px 12px #333;
    min-height: 70px;
    border-radius: 20px;
    padding: 1rem;
    margin: 0 1rem;
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
