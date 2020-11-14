<template>
  <div class="login">
    <h2>Представимся</h2>
    <form>
      <div class="login__control">
        <label for="nickname">Ник</label>
        <input
          type="text"
          name="nickname"
          id="nickname"
          placeholder="Никнейм"
        />
      </div>
      <div class="login__control">
        <label for="avatar-link">Ссылка на аватар</label>
        <input
          type="text"
          name="avatar-link"
          id="avatar-link"
          placeholder="Вставьте ссылку на изображение"
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
