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
          <!-- Personal Projects -->
          <b-row v-if="projectType == 'personal'">
            <b-col cols="6" md="4">
              <ProjectBox 
                v-on:set-modal-values="setModalValues"
                v-bind:title="'Personal Website'"
                v-bind:cardText="'VueJs, HTML, CSS, Javascript'"
                v-bind:imgLink="'personal_site.png'"
              ></ProjectBox>
            </b-col>
            <b-col cols="6" md="4">
              <ProjectBox 
                v-bind:title="'Soveriegn_Geese'"
                v-bind:cardText="'C#, MySQL'"
                v-bind:imgLink="'sovereign_goose.jpg'"
              ></ProjectBox>
            </b-col>
            <b-col cols="6" md="4">
              <ProjectBox 
                v-bind:title="'Global Game Jam 2020'"
                v-bind:cardText="'Unity, C#'"
                v-bind:imgLink="'ggj_logo.png'"
              ></ProjectBox>
            </b-col>
            <b-col cols="6" md="4">
              <ProjectBox 
                v-bind:title="'Indie Galactic Space Jam 2019'"
                v-bind:cardText="'Unity, C#'"
                v-bind:imgLink="'space_jam_logo.png'"
              ></ProjectBox>
            </b-col>
          </b-row>
          <!-- Work Projects -->
          <b-row v-if="projectType == 'work'">
            <b-col cols="6" md="4">
              <ProjectBox 
                v-on:set-modal-values="setModalValues"
                v-bind:title="'Auto-Provisioning'"
                v-bind:cardText="'C#, MySQL, Project Mgmt.'"
                v-bind:imgLink="'quaver_ap.png'"
              ></ProjectBox>
            </b-col>
            <b-col cols="6" md="4">
              <ProjectBox 
                v-bind:title="'Thin Common Cartridge Exporter'"
                v-bind:cardText="'C#, MySQL, React'"
                v-bind:imgLink="'tcc_logo.png'"
              ></ProjectBox>
            </b-col>
          </b-row>
          <!-- School Projects -->
          <b-row v-if="projectType == 'school'">
            <b-col cols="6" md="4">
              <ProjectBox 
                v-bind:title="'Space Game'"
                v-bind:cardText="'Unity, C#'"
                v-bind:imgLink="'space_shooter.png'"
              ></ProjectBox>
            </b-col>
            <b-col cols="6" md="4">
              <ProjectBox 
                v-bind:title="'Platformer Game'"
                v-bind:cardText="'Unity, C#'"
                v-bind:imgLink="'platformer_UFO.png'"
              ></ProjectBox>
            </b-col>
            <b-col cols="6" md="4">
              <ProjectBox 
                v-bind:title="'Javascript Games'"
                v-bind:cardText="'Javascript, HTML'"
                v-bind:imgLink="'javascript_games.png'"
              ></ProjectBox>
            </b-col>
          </b-row>
        </b-container>
        
        <b-modal id="modal-1" :title="currentTitle">
            <p class="my-4">{{currentMessage}}</p>
        </b-modal>
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
          projectType: "personal",
          currentTitle: "Project Title",
          currentMessage: "Project Message",
          currentLanguages: ["C#", "Unity"],
          currentLink: "img",
          messageDictionary: {"Personal Website": "This is my Personal Website."}
      }
  },
  methods: {
    setModalValues(title) {
      this.currentTitle = title
      this.currentMessage = this.messageDictionary[title]
    }
  }
}
</script>

<style>
.padding-width {
  padding: 5px 30px;
}
</style>