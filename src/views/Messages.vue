<template>
  <div class="messages">
    <div class="messages__main" :class="hiddenAdditional ? 'full' : ''">
      <Dialogs v-if="currentUser.name.length" :user="currentUser" />
    </div>
    <div class="messages__additional" :class="hiddenAdditional ? 'hidden' : ''">
      <button
        class="messages__hide-btn"
        @click="hiddenAdditional = !hiddenAdditional"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 8V4l8 8-8 8v-4H4V8z" />
        </svg>
      </button>
      <Dialogs :user="mockUser" v-if="!hiddenAdditional" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.messages {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #fff, $alpha: 0.8);

  &__main {
    width: 50%;

    &.full {
      width: 100%;
    }
  }

  &__hide-btn {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: -20px;
    width: 20px;
    height: 40px;
    border: none;
    outline: none;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    background-color: #333;
    display: flex;
    align-items: center;
    border-radius: 3px 0 0 3px;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }

    svg path:last-child {
      fill: #fff;
    }
  }

  &__additional {
    width: 50%;
    position: relative;

    &.hidden {
      width: 0;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Dialogs from "@/components/Dialogs.vue";
import store from "@/store";
import router from "@/router";

@Component({
  components: {
    Dialogs
  }
})
export default class Home extends Vue {
  public currentUser = store.state.currentUser;
  public mockUser = store.state.mockUser;
  public hiddenAdditional = false;

  constructor() {
    super();
    if (!this.currentUser.name.length) {
      router.push({ path: "/" });
    }
  }
}
</script>
