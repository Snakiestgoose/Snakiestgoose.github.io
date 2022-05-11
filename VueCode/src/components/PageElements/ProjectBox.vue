<template>
    <div>
        <b-card
            :sub-title="title"
            tag="article"
            style="max-width: 15rem; max-height: 15rem; "
            class="mb-2 mt-4 overflow-auto"
        >
            <b-card-img
                
                :src="'./assets/ProjectImages/' + imgLink" 
                alt="Image"
                top
                style="max-height:100px;width:auto;"
            >
                
            </b-card-img>
            <b-card-text>
                {{cardText}}
            </b-card-text>

            <b-button 
                @click="openModal" 
                v-b-modal.modal-1 
                variant="primary">
                Go somewhere
            </b-button>
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

  },
  methods: {
      openModal() {
        this.$emit("set-modal-values", this.title)
      }
  }
}
</script>

<style>

</style>