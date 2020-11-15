<template>
  <div class="dialogs"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Dialogs extends Vue {
  @Prop() private list!: Dialogs[];
}
</script>

<style scoped lang="scss"></style>
