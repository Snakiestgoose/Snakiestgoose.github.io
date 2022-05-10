<template>
    <div>
        <p>RESUME</p>

        <b-container>
          <b-row>
            <b-col>
              <a download href="/assets/2022_Resume.pdf">
                <img alt="Resume Download" 
                  class=""
                  style="width:30px;"
                  src="../../assets/file-arrow-down-solid.svg">
              </a>
              <p>Download</p>
            </b-col>
            <b-col>
              <a target="_blank" 
                href="https://drive.google.com/file/d/1jYnphSat8tGfvfPKMfJLLZI3o6yTV4dh/view?usp=sharing"
                > 
                <img alt="Resume Download" 
                  class=""
                  style="width:30px;"
                  src="../../assets/google-drive-brands.svg">
              </a>
              <p>Drive</p>
            </b-col>
            <b-col>
              <a target="_blank" 
                href="https://github.com/Snakiestgoose/Snakiestgoose.github.io/blob/master/VueCode/src/assets/2022_Resume.pdf"
                >
                <img alt="Resume Download" 
                  class=""
                  style="width:30px;"
                  src="../../assets/github-brands.svg">
              </a>
              <p>GitHub</p>
            </b-col>
          </b-row>
        </b-container>

        <!-- src="../../assets/2022_Resume.pdf" -->
        
        
        
        
        <div class="m-5">
          <pdf src="/assets/2022_Resume.pdf" :page="1" />
        </div>
    </div>
</template>

<script>
import pdf from 'pdfvuer'

export default {
  name: 'ResumePage',
  props: {
    
  },
  components: {
		pdf,
	},
}
</script>

<style>

</style>