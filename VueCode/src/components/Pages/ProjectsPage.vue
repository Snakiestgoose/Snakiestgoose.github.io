<template>
    <div>
        <p>PROJECTS</p>
         <b-button-group class="mb-5">
          <b-button 
            :pressed="projectType == 'work'" 
            @click="projectType = 'work'" 
            class="padding-width">Work
          </b-button>
          <b-button 
            :pressed="projectType == 'personal'" 
            @click="projectType = 'personal'" 
            class="padding-width">Personal
          </b-button>
          <b-button 
            :pressed="projectType == 'school'" 
            @click="projectType = 'school'" 
            class="padding-width">School
          </b-button>
        </b-button-group>
        <b-container class="bv-example-row">
        <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
          <b-row v-if="projectType == 'personal'">
            <b-col cols="6" md="4">
              <ProjectBox 
                v-bind:title="'Title'"
                v-bind:cardText="'Message'"
              ></ProjectBox>
            </b-col>
            <b-col cols="6" md="4">
              <ProjectBox 
                v-bind:title="'Title'"
                v-bind:cardText="'Message'"
              ></ProjectBox>
            </b-col>
            <b-col cols="6" md="4">
              <ProjectBox 
                v-bind:title="'Title'"
                v-bind:cardText="'Message'"
              ></ProjectBox>
            </b-col>
          </b-row>
          <b-row v-if="projectType == 'work'">
            <b-col cols="6" md="4">
              <ProjectBox 
                v-bind:title="'Title'"
                v-bind:cardText="'Message'"
              ></ProjectBox>
            </b-col>
          </b-row>
          <b-row v-if="projectType == 'school'">
            <b-col cols="6" md="4">
              <ProjectBox 
                v-bind:title="'Title'"
                v-bind:cardText="'Message'"
              ></ProjectBox>
            </b-col>
            <b-col cols="6" md="4">
              <ProjectBox 
                v-bind:title="'Title'"
                v-bind:cardText="'Message'"
              ></ProjectBox>
            </b-col>
          </b-row>
        </b-container>
    </div>
</template>

<script>
import ProjectBox from '../PageElements/ProjectBox.vue'

export default {
  name: 'ProjectsPage',
  props: {
    
  },
  components: {
    ProjectBox
  },
  data() {
      return {
          projectType: "personal"
      }
  }
}
</script>

<style>
.padding-width {
  padding: 5px 30px;
}
</style>