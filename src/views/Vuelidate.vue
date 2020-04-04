<template>
  <div class="mt-5">
    <h1>Vuelidate</h1>
        <!-- 
          v-model="$v.email.$model"  => Uso normal del v-model, el mensaje de error aparece sin esperar a que el usuario termine de escribir los datos en el input, en este caso: 'email'.
          v-model.lazy="$v.email.$model"  => 'lazy' se usa para mostrar el mensaje de error de un campo solo cuando el usuario da clic en otro campo, es decir, cuando el input pierde el enfoque.
        
        -->
    <form @submit.prevent="send">
      <input type="email" class="form-control my-3" placeholder="Insert your email"
        v-model.lazy="$v.email.$model"
        :class="{'is-invalid': $v.email.$invalid}"
      >
      <p v-text="'Email is incorrect'" v-if="!$v.email.email" class="text-danger"></p>
      <p v-text="'Email is required'" v-if="!$v.email.required" class="text-danger"></p>

      <input type="password" class="form-control my-3" placeholder="Insert your password"
        v-model.trim="$v.password.$model"
        :class="{'is-invalid': $v.password.$invalid}"
      >
      <p v-text="`Password must have at leat ${$v.password.$params.minLength.min} caracteres`" 
        v-if="!$v.password.minLength" class="text-danger"></p>
      <p v-text="'Password is required'" v-if="!$v.password.required" class="text-danger"></p>

      <input type="password" class="form-control my-3" placeholder="Confirm your password"
        v-model.trim="$v.confirmPassword.$model"
        :class="{'is-invalid': $v.confirmPassword.$invalid}"
      >
      <p v-text="'Password must be identical'" v-if="!$v.confirmPassword.sameAsPassword" class="text-danger"></p>

      <b-button type="submit" variant="primary" :disabled="$v.$invalid">Send</b-button>
    </form>

    <p>Invalid: <span v-text="$v.$invalid"></span></p>

  </div>
</template>

<script>
  import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'
  export default {
    name: 'Vuelidate',
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    validations: {
      email: { required, email },
      password: {
        required,
        minLength: minLength(6)
      },
      confirmPassword: {
        sameAsPassword: sameAs('password')
      }
    },
    methods: {
      send() {
        console.log('send');
        this.$v.$touch()
        if(this.$v.$invalid) {
          console.log('Faltan datos');
        } else {
          setTimeout( () => {
            console.log(`Los datos: ${this.$v.email.$model} - ${this.$v.password.$model} han sido enviados`);
            }, 1000);
          console.log('Emviando datos...');
        } 
      }
    }
  }
</script>