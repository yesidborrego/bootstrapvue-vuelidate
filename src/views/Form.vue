<template>
  <div class="mt-5">
    <h1>Formularios</h1>
    <b-row>
      <b-col md="3">
        <form>
          <b-form-input
            id="input-live"
            v-model="name"
            :state="validation"
            placeholder="Enter your name"
            trim
          ></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">
            Enter at least 3 letters
          </b-form-invalid-feedback>
        </form>
      </b-col>
      <b-col md="3">
        <b-form-select v-model="selected" :options="cities"></b-form-select>
        <p>Selected: <span v-text="selected"></span></p>
      </b-col>
      <b-col md="3">
        <b-form-radio-group v-model="radio" :options="animals"></b-form-radio-group>
        <p>Selected: <span v-text="radio"></span></p>
      </b-col>
      <b-col md="3">
        <b-form-checkbox-group v-model="check" :options="names"></b-form-checkbox-group>
        <p>Selected: <span v-text="check"></span></p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'Form',
    data() {
      return {
        name: '',
        selected: null,
        cities: [
          {value: null, text: 'Select a city'},
          {value: 'barranquilla', text: 'Barranquilla'},
          {value: 'cartagena', text: 'Cartagena'},
          {value: 'medellín', text: 'Medellín'},
        ],
        radio: null,
        animals: [
          {value: 'dog', text: 'Dog'},
          {value: 'cat', text: 'Cat'},
          {value: 'duck', text: 'Duck'},
        ],
        check: null,
        names: [
          {value: 'yesid', text: 'Yesid'},
          {value: 'isabella', text: 'Isabella'},
          {value: 'dayana', text: 'Dayana'},
        ],
      }
    },
    computed: {
      validation() {
        return this.name.length > 2 ? true : false;
      }
    }
  }
</script>