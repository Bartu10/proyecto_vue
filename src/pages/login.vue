<template>
  <div class="register">
    <h1 class="title">Sign Up</h1>
    <form action class="form" @submit.prevent="validator">
      <label class="form-label" for="#email">Email:</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      >
      <label class="form-label" for="#password">Password:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        placeholder="Password"
      >
      <label class="form-label" for="#password-repeat">Repite la contraeña:</label>
      <input
        v-model="passwordRepeat"
        class="form-input"
        type="password"
        id="password-repeat"
        placeholder="Password"
      >
      <input class="form-submit" type="submit" value="Sign Up">
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
    passwordRepeat: "",
    error: ""
  }),
  methods: {
    register() {
      console.log(this.email);
      console.log(this.password);
      console.log(this.passwordRepeat);
    },
    validator() { 
      if (this.email.length === 0 || !(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(this.email))) 
      {this.error = "El correo es incorrecto"}
      if (this.password.length === 0 || !(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/).test(this.password))
      {this.error = "El password es incorrecto"}
      if (this.password !== this.passwordRepeat)
      {this.error = "El "}
    }
    
  }
};
</script>

<style lang="scss" scoped>
.register {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: white;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: black;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid black;
  color: black;
  &:focus {
    outline: 0;
    border-color: red;
  }
}
.form-submit {
  background: red;
  border: none;
  color: black;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: red;
  }
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>