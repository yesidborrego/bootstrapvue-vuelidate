<template>
  <div class="mt-5">
    <b-row>
      <b-button variant="primary">Primary</b-button>
      <b-button variant="secondary">Secondary</b-button>
      <b-button variant="success">Success</b-button>
      <b-button variant="danger">Danger</b-button>
      <b-button variant="warning">Warning</b-button>
      <b-button variant="info">Info</b-button>
      <b-button variant="light">Light</b-button>
      <b-button variant="dark">Dark</b-button>
    </b-row>
    <b-row class="mt-3">
      <b-button variant="outline-primary">Primary</b-button>
      <b-button variant="outline-secondary">Secondary</b-button>
      <b-button variant="outline-success">Success</b-button>
      <b-button variant="outline-danger">Danger</b-button>
      <b-button variant="outline-warning">Warning</b-button>
      <b-button variant="outline-info">Info</b-button>
      <b-button variant="outline-light">Light</b-button>
      <b-button variant="outline-dark">Dark</b-button>
    </b-row>
    <b-row class="mt-5">
      <b-col cols="12" md="4">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="image"
          img-top
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facilis voluptates sunt assumenda accusamus. Nam, repellendus quaerat inventore nesciunt minus quae ab autem voluptas repellat, dolores error optio aliquid provident.</p>
          <b-button variant="primary" href="#">Primary</b-button>
        </b-card>
      </b-col>
      <b-col cols="12" md="4">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="image"
          img-top
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis exercitationem necessitatibus fugiat inventore, vitae libero hic, excepturi suscipit vel consequuntur harum illo reprehenderit eum commodi, totam ab blanditiis sequi?
          </p>
          <b-button variant="primary" href="#">Primary</b-button>
        </b-card>
      </b-col>
      <b-col cols="12" md="4">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="image"
          img-top
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis exercitationem necessitatibus fugiat inventore, vitae libero hic, excepturi suscipit vel consequuntur harum illo reprehenderit eum commodi, totam ab blanditiis sequi?
          </p>
          <b-button variant="primary" href="#">Primary</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'Button-cards',
  }
</script>