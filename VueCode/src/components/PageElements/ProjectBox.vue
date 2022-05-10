<template>
    <div>
        <b-card
            :title="title"
            img-src="https://picsum.photos/600/300/?image=25" 
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 15rem; max-height: 15rem; "
            class="mb-2 overflow-auto"
        >
            <b-card-text>
                {{cardText}}
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
  name: 'ProjectBox',
  props: {
    title: String,
    imgLink: String,
    cardText: String
  },
  components: {

  }
}
</script>

<style>

</style>