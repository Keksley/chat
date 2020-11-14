<template>
  <div class="login">
    <h2>Представимся</h2>
    <form @submit.prevent="handleSubmit($event)">
      <div
        class="login__control"
        v-for="control of controls"
        :key="control.name"
      >
        <div class="login__invalid-message" v-if="!control.valid">
          {{ control.invalidMessage }}
        </div>
        <label :for="control.name">{{ control.label }}</label>
        <input
          type="text"
          :name="control.name"
          :id="control.name"
          :placeholder="control.placeholder"
          @change="handleInput($event, control)"
        />
      </div>
      <button type="submit">
        К сообщениям
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="#fff"
            d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"
          />
        </svg>
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.login {
  &__control {
    display: flex;
    flex-direction: column;
    min-height: 4rem;
    justify-content: space-between;
    margin-bottom: 2rem;
    position: relative;
  }

  &__invalid-message {
    position: absolute;
    color: rgb(255, 92, 92);
    font-size: 0.75rem;
    font-weight: 700;
    bottom: -15px;
  }

  h2 {
    text-align: center;
    margin: 0 auto 3rem;
    font-size: 2rem;
  }

  font-size: 1.5rem;
  background-color: #fff;
  min-width: 500px;
  padding: 2rem;
  min-height: 300px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 1rem;
  }

  input {
    border: none;
    outline: none;
    border-bottom: 1px solid #888;
    padding-bottom: 0.25rem;
  }

  label {
    font-weight: 700;
  }

  button {
    color: #fff;
    background-color: #333;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 3rem;
    padding: 1rem;
    border-radius: 3px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 1rem;
    }

    &:hover {
      background-color: #444;

      &:active {
        background-color: #333;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  * {
    font-size: 14px;
  }
  .login {
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    min-width: 100%;

    form {
      height: 85%;
      width: 100%;
    }
  }
}
</style>

<script lang="ts">
import { Control } from "@/models/control";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  public controls = [
    {
      name: "nick",
      label: "Никнейм",
      placeholder: "Введите никнейм",
      valid: false,
      value: "",
      needValidate: true,
      invalidMessage: "",
      validators: [
        (control: Control): boolean => {
          const minLength = 3;
          const isValid = control.value.length > minLength;
          if (!isValid) {
            control.invalidMessage = "Нужно больше букв";
          }
          return isValid;
        }
      ]
    },
    {
      name: "avatar-image",
      label: "Аватар",
      placeholder: "Вставьте ссылку на изображение",
      needValidate: false,
      valid: true,
      value: ""
    }
  ];

  public handleSubmit() {
    this.$emit("");
  }

  public handleInput(event: any, curControl: Control) {
    this.controls = this.controls.map(control => {
      if (control !== curControl) {
        return control;
      }

      control.value = event.target.value;
      this.validate(control);

      return control;
    });
  }

  private validate(control: Control) {
    if (!control.needValidate) {
      return;
    }

    // Вернёт true если все валидаторы вернут true
    control.valid = control.validators.every(validator => validator(control));
  }
}
</script>
