<template>
  <div class="auth-container">
    <div class="overlay"></div>
    <div class="loginBox">
      <div class="inner">
        <div class="signIn">
          <div class="top">
            <img class="logo" src="https://res.cloudinary.com/dc3c8nrut/image/upload/v1685298768/logo-placeholder_l3yodl.png" />
            <div class="title">Sign in</div>
            <div class="subtitle">
              Don't have an account?
              <router-link to="/pages/register" class="subtitle-action">Create Account</router-link>
            </div>
          </div>

          <form @submit.prevent="handleLogin">
            <div class="form">
              <input required type="email" class="w100" v-model="email.value" placeholder="Email" />
              <input required type="password" class="w100" v-model="password.value" placeholder="Password" />
            </div>
            <button type="submit" class="action" :class="{ 'action-disabled': !loginValid }">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const email = ref({ value: '', error: false })
const password = ref({ value: '', error: false })

const loginValid = computed(() => email.value.value && password.value.value)

const handleLogin = () => {
  if (loginValid.value) {
    console.log('Login successful:', email.value.value, password.value.value)
  }
}
</script>

<style scoped>
.auth-container {
  background: url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.overlay {
  position: absolute;
  background-color: rgba(0, 0, 50, 0.4);
  width: 100%;
  height: 100%;
  z-index: 1;
}
.loginBox {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  z-index: 2;
  width: 400px;
}
.logo {
  width: 80px;
  margin-bottom: 10px;
}
.title {
  font-size: 24px;
  font-weight: bold;
}
.subtitle {
  font-size: 14px;
  margin-bottom: 20px;
}
.subtitle-action {
  color: #007bff;
  text-decoration: none;
  margin-left: 4px;
}
.w100 {
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.action {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  width: 100%;
  font-weight: bold;
}
.action-disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
