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
          <b-row v-if="projectType == 'personal'" class="justify-content-center">
            <b-col lg="4" md="6" sm="12">
              <ProjectBox 
                v-on:set-modal-values="setModalValues"
                v-bind:title="'Personal Website'"
                v-bind:cardText="'VueJs, HTML, CSS'"
                v-bind:imgLink="'personal_site.png'"
              ></ProjectBox>
            </b-col>
            <b-col lg="4" md="6" sm="12">
              <ProjectBox 
                v-on:set-modal-values="setModalValues"
                v-bind:title="'Soveriegn_Geese'"
                v-bind:cardText="'C#, MySQL'"
                v-bind:imgLink="'sovereign_goose.jpg'"
              ></ProjectBox>
            </b-col>
            <b-col lg="4" md="6" sm="12">
              <ProjectBox 
                v-on:set-modal-values="setModalValues"
                v-bind:title="'Melrose Game Jam 2019'"
                v-bind:cardText="'Unity, C#'"
                v-bind:imgLink="'melrose.png'"
              ></ProjectBox>
            </b-col>
            <b-col lg="4" md="6" sm="12">
              <ProjectBox 
                v-on:set-modal-values="setModalValues"
                v-bind:title="'Indie Galactic Space Jam'"
                v-bind:cardText="'Unity, C#'"
                v-bind:imgLink="'space_jam_logo.png'"
              ></ProjectBox>
            </b-col>
          </b-row>
          <!-- Work Projects -->
          <b-row v-if="projectType == 'work'" class="justify-content-center">
            <b-col lg="4" md="6" sm="12">
              <ProjectBox 
                v-on:set-modal-values="setModalValues"
                v-bind:title="'Auto-Provisioning'"
                v-bind:cardText="'C#, MySQL, Proj Mgmt'"
                v-bind:imgLink="'quaver_ap.png'"
              ></ProjectBox>
            </b-col>
            <b-col lg="4" md="6" sm="12">
              <ProjectBox 
                v-on:set-modal-values="setModalValues"
                v-bind:title="'Thin CC'"
                v-bind:cardText="'C#, MySQL, React'"
                v-bind:imgLink="'tcc_logo.png'"
              ></ProjectBox>
            </b-col>
          </b-row>
          <!-- School Projects -->
          <b-row v-if="projectType == 'school'" class="justify-content-center">
            <b-col lg="4" md="6" sm="12">
              <ProjectBox 
                v-on:set-modal-values="setModalValues"
                v-bind:title="'Space Game'"
                v-bind:cardText="'Unity, C#'"
                v-bind:imgLink="'space_shooter.png'"
              ></ProjectBox>
            </b-col>
            <b-col lg="4" md="6" sm="12">
              <ProjectBox 
                v-on:set-modal-values="setModalValues"
                v-bind:title="'Javascript Games'"
                v-bind:cardText="'Javascript, HTML'"
                v-bind:imgLink="'javascript_games.png'"
              ></ProjectBox>
            </b-col>
          </b-row>
        </b-container>
        
        <b-modal id="modal-1" :title="currentTitle">
            <div class="my-4">
              <!-- Personal -->
              <div v-if="currentTitle == 'Personal Website'">
                <span>
                  This project has been recreated a few times, 
                  the current version is the one you are viewing currently that has been 
                  created in VueJs. Development on it begain in May 2022, and is entirely a 
                  front-end project using VueJs, Bootstrap-Vue, HTML, CSS, & Javascript. 
                  To review the code on GitHub, click one of the links below. 
                </span><br><br>
                <p>GitHub Current: 
                  <a href="https://github.com/Snakiestgoose/Snakiestgoose.github.io">
                    Snakiestgoose.github.io
                  </a>
                </p>
                <p>GitHub Older: 
                  <a href="https://github.com/Snakiestgoose/Personal_Site_01">
                    Personal_Site_01
                  </a><br>
                  (No framework, entirely HTML/Javascript/etc.)
                </p>
              </div>
              <div v-else-if="currentTitle == 'Soveriegn_Geese'">
                <span>
                  This project isn't quite about Geese achieving soveriegnty, at least not yet. 
                  This project is one I set up recently to work on with a friend just to mutually 
                  practice our dev skills together. So far we have only configured a VS project that 
                  is capable of connecting to a MySQL server that I setup through API endpoints. <br>
                  I hope to further develop new projects under the combined gamertag name of Soverign Goose 
                  such as discord bots, game jams, and websites. 
                  To review the code on GitHub, click the link below. 
                </span><br><br>
                <p>GitHub: 
                  <a href="https://github.com/Snakiestgoose/SovereignGeese">
                    Soveriegn_Geese
                  </a>
                </p>
              </div>
              <div v-else-if="currentTitle == 'Melrose Game Jam 2019'">
                <span>
                  The Melrose Game Jam of 2019 is one I tackled on my own. 
                  I created a game I called Drifting Away about an office worker 
                  sleeping at their desk, and as they slept a written story would 
                  scroll down the screen spaced out. The player would have to type out these 
                  words before they reached the bottom. After a full 'journal' entry had passed, 
                  the player entered a dream world where the game became a 2D side-scroller and 
                  they could cast spells by typing out unlocked spells. <br>
                  I was ony able to finish enough to have the functionality of each mode playable 
                  in an arcade mode of sorts. Though it was a lot of fun to take on such an ambitious 
                  project and still have anything to show over the course of a weekend. <br>
                  <div class="text-center mt-3">
                    <iframe width="auto" height="auto" 
                      src="https://www.youtube.com/embed/dAUI1ZEhkmY" 
                      title="YouTube video player" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen>
                    </iframe>
                  </div>
                  
                  <br>
                  To review the code on GitHub, click the link below. 
                </span><br><br>
                <p>Itch.io: 
                  <a href="https://itch.io/jam/melrose-game-jam/rate/518321">
                    Drifting Away
                  </a>
                </p>
                <p>GitHub: 
                  <a href="https://github.com/Snakiestgoose/DriftingJam">
                    DriftingJam
                  </a>
                </p>
              </div>
              <div v-else-if="currentTitle == 'Indie Galactic Space Jam'">
                <span>
                  The Indie Galactic Space Jam was my first Game Jam. I worked on a team to create 
                  an upbeat rythm game called Space Robots: The Shape of Love where you ucontrol to rotating pieces 
                  to complete constelations. <br>
                  It was my first time working in Unreal Engine and C++, and I had dove in with the lead programmer 
                  and learned a lot over the weekend of working on the project. The first task I helped set up was 
                  establishing source control for the team using Perforce, and then worked under the lead on supporting 
                  tasks for the rest of the jam. 
                </span><br><br>
                <p>Itchi.io: 
                  <a href="https://soundisme.itch.io/space-robots-the-shape-of-love">
                    Space Robots
                  </a>
                </p>
              </div>
              <!-- School -->
              <div v-else-if="currentTitle == 'Space Game'">
                <span>
                  This is a school project following a Unity tutorial where we were then required to branch 
                  off from the tutorial and add extra functionality. I had created a Galaga styled space shooter 
                  where the player had extra abilities such as a force field and extra game modes.
                </span><br><br>
                <p>GitHub: 
                  <a href="https://github.com/Snakiestgoose/Tutorial-3-Space-Shooter">
                    Soveriegn_Geese
                  </a>
                </p>
              </div>
              <div v-else-if="currentTitle == 'Javascript Games'">
                <span>
                  This is a collection of a few games I created solely with Javascript that are 
                  playable in browser. These include recreations of snake, pong, 
                  a galaga like space shooter, and flappy bird. 
                </span><br><br>
                <p>GitHub: 
                  <a href="https://github.com/Snakiestgoose/Web-Projects/tree/master/Games">
                    Javascript Games
                  </a>
                </p>
              </div>
              <!-- Work -->
              <div v-else-if="currentTitle == 'Auto-Provisioning'">
                <span>
                  This is a project I headed while worked as a developer at QuaverEd. When a user logs in 
                  through Quaver's Single-Sign-On portals, they then had to provision their account to a 
                  Quaver account. This Auto-Provisioning project allowed for districts to either send Roster 
                  info to allow us to automatically create an account under the school they are listed in in their 
                  rosters, or to see a school selection popup and select their schools and then be automatically 
                  connected to a Quaver account. <br>
                  This project was a direct request with a client from a district whomst I worked with and with my 
                  team to deliver the feature to their standards. 
                </span>
              </div>
              <div v-else-if="currentTitle == 'Thin CC'">
                <span>
                  This project was also for QuaverEd, where I built an app to export a district's valid 
                  resources into a Thin Common Cartridge (TCC) that can then be imported into their 
                  Learning Management System (LMS). 'Common Cartridge is a set of open standards that
                  enable interoperability between content and systems.' imsglobal. TCC is the thin version of 
                  Common Cartridge that provides a more lightweight structure and contains only links to the resources 
                  rather that packaging learning resources into the cartridge. <br>
                  The app that exported the cartridge exported the resources into a large xml file called the manifest, 
                  where depending on the TCC version the user wished to download, would either contain all of the resource 
                  tags in the file or would link out to external resource xml files. At the end it is all zipped together 
                  and can then be exported into a LMS such as Schoology. 
                </span><br><br>
                <p>IMSGlobal: 
                  <a href="http://www.imsglobal.org/activity/common-cartridge">
                    Common Cartridge
                  </a>
                </p>
              </div>
              <div v-else>
                <p>Project description hasn't been written yet.</p>
              </div>
            </div>
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
          messageDictionary: {
            "Personal Website": ``,
            
            "Soveriegn_Geese": "This is a goose project.",

            "Global Game Jam 2020": "This is a game jam 2020 project.",
            "Indie Galactic Space Jam 2019": "This is a game jam 2019 project.",
            "Space Game": "This is a school unity arcade project.",
            "Platformer Game": "This is a school unity platformer project.",
            "Javascript Games": "This is a javascript only game project.",
            "Auto-Provisioning": "This is a work provisioning project.",
            "Thin Common Cartridge Exporter": "This is a work TCC project.",
          }
      }
  },
  methods: {
    setModalValues(title) {
      this.currentTitle = title
    }
  }
}
</script>

<style>
.padding-width {
  padding: 5px 30px;
}
</style>