<template>
  <div class="container has-text-centered is-centered">
    <section class="hero">
      <div class="hero-body">
        <p class="title">Anmelden</p>
        <p class="subtitle">
          Jetzt Einloggen um eigenes Team zu erstellen und zu verwalten
        </p>
      </div>
    </section>
    <b-button
      icon-left="discord"
      style="color: #7289d9"
      type="is-dark"
      @click="login()"
      >Mit Discord Einloggen</b-button
    >
  </div>
</template>
<script>
export default {
  mounted() {
    if (this.$auth.loggedIn) {
      this.$router.replace('/')
    }
  },
  methods: {
    login() {
      this.$auth.loginWith('discord')
    },
  },
}
</script>
<style lang="scss"></style>
