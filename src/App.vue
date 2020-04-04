<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand :to="{name: 'About'}">NavBar</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'Home'}" exact>Home</b-nav-item>
            <b-nav-item :to="{name: 'About'}">About</b-nav-item>
            <b-nav-item :to="{name: 'Grid'}">Grid</b-nav-item>
            <b-nav-item :to="{name: 'Button-cards'}">Button-cards</b-nav-item>
            <b-nav-item :to="{name: 'Form'}">Form</b-nav-item>
            <b-nav-item :to="{name: 'Vuelidate'}">Vuelidate</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>
