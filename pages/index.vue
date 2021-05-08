<template>
  <div class="container has-text-centered">
    <div>
      <client-only>
        <section class="hero">
          <div class="hero-body">
            <p class="title">Skybot</p>
            <p class="subtitle">Hypixel Skyblock Discord Bot</p>
          </div>
        </section>
        <div class="container">
          <b-carousel
            v-model="slide"
            :interval="3"
            :pause-info="false"
            :pause-hover="false"
            :indicator="false"
            :arrow="false"
          >
            <b-carousel-item
              v-for="(carousel, i) in carousels"
              :key="i"
              :name="i + 1"
            >
              <video
                :src="carousel.src"
                autoplay
                muted
                loop
                class="videos"
                preload
              ></video>
            </b-carousel-item>
          </b-carousel>
        </div>
        <div class="content introduction">
          <h2>Willkommen auf der offiziellen Website unseres Teams!</h2>
          <p>
            Wir sind „The Speedy Schumachers (TSS)“ und bilden ein kleines
            Rocket League Team mit Begeisterung und Leidenschaft. Wir versuchen
            uns stetig weiterzubilden und uns in Richtung professioneller
            E-Sport Szene zu etablieren. Zwar stehen wir noch am Anfang,
            allerdings fängt jeder mal klein an und mit etwas Geduld und
            Leidenschaft ist ja bekanntlich vieles zu schaffen. Begleitet uns
            auf unserer Reise und seht wie wir uns mit viel Elan in die Rocket
            League Szene einspielen werden und verbreitet unseren Siegeswillen
            #getSpeedy
          </p>
          <nuxt-link to="/members"><p>Zu den Mitgliedern</p></nuxt-link>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      carousels: [],
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss">
.introduction {
  padding-top: 4vh;
  padding-left: 10vh;
  padding-right: 10vh;
  padding-bottom: 4vh;
  color: rgb(196, 196, 196);
}

.videos {
  padding: 0;
  border: 5px solid;
  border-image: linear-gradient(45deg, rgb(4, 51, 112), rgb(3, 4, 65)) 1;
}
</style>
