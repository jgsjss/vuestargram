<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step--">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
  </div>

  <!-- <h4>안녕 {{ name }}</h4>
  <h4>내 나이는 {{ $store.state.age }}</h4>
  <button @click="$store.commit('changeName')">변경</button>
  <button @click="sumAge()">나이먹기</button> -->
  <h4 @click="step = 3">팔로워보기</h4>
  <Container
    @write="wrote = $event"
    :photos="photos"
    :instarData="instarData"
    :step="step"
  />
  <!-- <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기</button> -->

  <!-- <p>{{ now() }}</p>
  <button @click="counter++">현재시각</button> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import instarData from "./assets/instarData.js";
import axios from "axios";
import { mapMutations, mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      instarData: instarData,
      moresome: 0,
      step: 0,
      photos: "",
      wrote: "",
      clickFilter: "",
      counter: 0,
    };
  },
  mounted() {
    this.emitter.on("clickBox", (a) => {
      this.clickFilter = a;
      console.log(a);
    });
  },
  components: {
    Container,
  },
  computed: {
    ...mapState(["name", "age", "likes"]),
  },
  methods: {
    ...mapMutations(["setMore", "likesUp", "sumAge"]),
    now() {
      return new Date();
    },
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.moresome}.json`)
        .then((result) => {
          this.instarData.push(result.data);
          this.moresome++;
        });
    },
    upload(e) {
      let file = e.target.files;
      console.log(file);
      let url = URL.createObjectURL(file[0]);
      console.log(url);
      this.photos = url;
      this.step++;
    },
    publish() {
      var myInstar = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.photos,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.wrote,
        filter: this.clickFilter,
      };
      this.instarData.unshift(myInstar);
      this.step = 0;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
