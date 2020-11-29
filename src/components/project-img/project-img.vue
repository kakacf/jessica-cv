<template>
  <div>
    <b-container fluid>
      <div>
        <h2
          class="title"
          v-once
        >{{itemTitle}}</h2>
      </div>
      <div>
        <div v-if="projectName === 'travobook'">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://player.vimeo.com/video/193508926"
            allowfullscreen
          ></b-embed>
        </div>
        <b-card-group columns>
          <b-card v-for="(item, index) in imageItems" :key="index">
            <!-- :width="item.width" :height="item.height" -->
            <b-card-img-lazy :src="require(`../../assets/image/${projectName}/${item}`)" blank-src="wait...." alt="Responsive image"></b-card-img-lazy>
            <!-- <b-card-text>
              This is a wider card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </b-card-text> -->
          </b-card>
        </b-card-group>
      </div>
    </b-container>

    <!-- <div>
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://player.vimeo.com/video/193508926"
        allowfullscreen
      ></b-embed>
    </div> -->

    <contact class="margin-top-10"></contact>

  </div>

</template>

<script>
import contact from "../../components/contact/contact.vue";
import * as data from "../../data/data";


export default {
  name: "ProjectImg",
  components: {
    contact,
  },
  props: {},
  data() {
    return {
      itemTitle: String,
      projectName: String,
      imageItems: [],
    };
  },
  methods: {},
  created() {
    this.itemTitle = data.project.items[this.$route.params.projectIndex].projectName;
    
    let projectIndexArray = ['homedical', 'dialysis', 'papaLewis', 'ismartboss', 'travobook', 'instagrom'];
    this.projectName = projectIndexArray[this.$route.params.projectIndex]
    this.imageItems = data.projectImg.imageItems[this.projectName];

    console.log('itemTitle', this.itemTitle);
    console.log('imageItems', this.imageItems);



  },
  mounted() {
  

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  position: relative;
  margin-top: 56px;
  padding: 10px !important;
}

.title {
  margin-left: 40px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.1em;
}

.card-body {
  padding: 5px;

}

.card {
  transform-origin: 65% 75%;
  transition: transform 1s, filter .5s ease-out;
}
.card:hover {
  transform: scale(1.2);
  z-index: 9999;
}

/* .card-columns {
  column-count: 3;
}*/


</style>
