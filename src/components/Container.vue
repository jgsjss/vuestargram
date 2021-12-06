<template>
  <div v-if="step == 0">
    <Post :instarData="instarData[i]" v-for="(a, i) in instarData" :key="a" />
  </div>

  <!-- 필터선택페이지 -->
  <div v-if="step == 1">
    <div
      :class="clickFilter"
      class="upload-image"
      :style="`background-image: url(${photos})`"
    ></div>
    <div class="filters">
      <FilterBox
        :filter="filter"
        :photos="photos"
        v-for="filter in filterName"
        :key="filter"
      >
        <slot>{{ filter }}</slot>
      </FilterBox>
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-if="step == 2">
    <div
      :class="clickFilter"
      class="upload-image"
      :style="`background-image: url(${photos})`"
    ></div>
    <div class="write">
      <textarea @input="$emit('write', $event.target.value)" class="write-box">
write!</textarea
      >
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
  data() {
    return {
      filterName: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
      clickFilter: "",
    };
  },
  mounted() {
    this.emitter.on("clickBox", (a) => {
      this.clickFilter = a;
    });
  },
  props: {
    instarData: Array,
    step: Number,
    photos: String,
  },
  components: {
    Post,
    FilterBox,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>