<template>
  <div class="messages">
    <Dialogs />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Dialogs from "@/components/Dialogs.vue";

@Component({
  components: {
    Dialogs
  }
})
export default class Home extends Vue {}
</script>
