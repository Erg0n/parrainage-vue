<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Connectez vous !</h1>

    <div class="form-floating">
      <input type="email" class="form-control" placeholder="name@example.com" v-model="data.username" required>
      <label for="floatingInput">Email </label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" placeholder="Password" v-model="data.password" required>
      <label for="floatingPassword">Password</label>
    </div>

    <button class="btn btn-primary w-100 py-2" type="submit">Connexion</button>
  </form>
</template>

<script lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  name: 'LoginForm',
  setup() {
    const data = reactive({
      username: '',
      password: ''
    });

    const router = useRouter();
    
    async function submit() {
      await fetch(
        'https://127.0.0.1:8000/api/login',
        {
          method: 'POST',
          mode: "cors",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(data) 
        }
      );
        
      await router.push('/');
      console.log(data);
      
      }

    return {
      data,
      submit
    }
  },
}
</script>
