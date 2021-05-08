<template>
  <div id="app" class="Site">
    <navbar style="z-index: 999"></navbar>

    <div class="Site-content">
      <Nuxt />
    </div>

    <client-only>
      <vue-particles
        color="#edda0c"
        :particle-opacity="0.6"
        :particles-number="40"
        shape-type="star"
        :particle-size="6"
        lines-color="#e619c4"
        :lines-width="1"
        :line-linked="false"
        :line-opacity="0.3"
        :lines-distance="150"
        :move-speed="1"
      ></vue-particles>
    </client-only>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: { Navbar },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~@creativebulma/bulma-divider';

$primary: #25b884;
$loading-background: rgb(22, 22, 20);
$box-background-color: #26303f;
$box-color: white;
$table-background-color: #3c8aff;

$colors: mergeColorMaps(
  (
    'primary': (
      $primary,
      $primary-invert,
      $primary-light,
      $primary-dark,
    ),
  ),
  $custom-colors
);
@import '~bulma';
@import '~buefy/src/scss/buefy';

.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.Site-content {
  flex: 1;
  z-index: 998;
}

#app {
  background-image: url('../assets/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#particles-js {
  position: fixed;
  background: rgb(22, 22, 20);
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.title {
  color: rgb(196, 196, 196);
}
.subtitle {
  color: rgb(196, 196, 196);
}
.logo {
  padding-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.main-con {
  padding-top: 0;
}
.content h1 {
  color: rgb(196, 196, 196);
}
.content h2 {
  color: rgb(196, 196, 196);
}
</style>
