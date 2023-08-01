<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Enregistrez vous !</h1>

    <div class="form-floating">
      <input type="text" class="form-control" placeholder="nom" v-model="data.nom" required>
      <label for="floatingInput">Nom </label>
    </div>

    <div class="form-floating">
      <input type="text" class="form-control" placeholder="prenom" v-model="data.prenom" required>
      <label for="floatingInput">Prenom </label>
    </div>

    <div class="form-floating">
      <input type="email" class="form-control" placeholder="name@example.com" v-model="data.email" required>
      <label for="floatingInput">Email </label>
    </div>

    <div class="form-floating">
      <input type="password" class="form-control" placeholder="Password" v-model="data.password" required>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-floating">
      <input type="text" class="form-control" placeholder="contact" v-model="data.contact" required>
      <label for="floatingInput">contact </label>
    </div>
    
    <div class="form-floating">
      <input type="text" class="form-control" placeholder="codeparrain" v-model="data.codeParrain">
      <label for="floatingInput">Code du parrain </label>
    </div>

    <button class="btn btn-primary w-100 py-2" type="submit">S'enregistrer</button>

  </form>
</template>

<script lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  name: 'RegisterForm',
  setup() {
    const data = reactive({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        contact: '',
        codeParrain: ''
    })

    const router = useRouter()

    const submit = async () => {
      await fetch(
        'http://127.0.0.1:8000/api/post',
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(data)
        }
      )

      await router.push('/login')
    }

    return {
      data,
      submit
    }
  },
}
</script>