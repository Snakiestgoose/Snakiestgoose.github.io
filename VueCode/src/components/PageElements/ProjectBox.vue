<template>
    <div>
        <div class="m-3">
            <b-card
                :sub-title="title"
                tag="article"
                style="width: 13rem; height: 15rem; "
                class="mb-2 mt-4 m-auto"
            >
                <b-card-img
                    
                    :src="'./assets/ProjectImages/' + imgLink" 
                    alt="Image"
                    top
                    style="height:90px;width:auto;max-width: 10rem;"
                >
                </b-card-img>
                
                <b-card-text class="mt-3 mb-1">
                    {{cardText}}
                </b-card-text>

                <b-button 
                    @click="openModal" 
                    v-b-modal.modal-1 
                    variant="primary">
                    Learn more...
                </b-button>
            </b-card>
        </div>
        
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