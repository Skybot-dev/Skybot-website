<template>
  <b-navbar fixed-top centered type="is-primary">
    <template #brand>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/dashboard' }">
        <b-tooltip label="Dashboard" position="is-right" type="is-dark">
          <b-icon icon="account-cog" size="is-medium"></b-icon>
        </b-tooltip>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#" tag="nuxt-link" :to="{ path: '/' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/team' }">
        Team
      </b-navbar-item>

      <b-navbar-item
        href="https://discord.gg/7fPv2uY2Tf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Support
      </b-navbar-item>
      <b-navbar-item v-if="admin" tag="nuxt-link" :to="{ path: '/admin' }">
        Admin
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item
        v-if="!$auth.loggedIn"
        tag="nuxt-link"
        :to="{ path: '/login' }"
      >
        <b-tooltip label="Login" position="is-left" type="is-dark">
          <b-icon icon="login" size="is-medium"> </b-icon>
        </b-tooltip>
      </b-navbar-item>
      <b-navbar-item v-if="$auth.loggedIn" tag="a" @click="$logout()">
        <b-tooltip label="Logout" position="is-left" type="is-dark">
          <b-icon icon="logout" size="is-medium"> </b-icon>
        </b-tooltip>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  data() {
    return {
      admin: false,
    }
  },
  mounted() {
    if (this.$auth.loggedIn) {
      this.admin = process.env.admins.includes(this.$auth.user.id)
    }
  },
}
</script>
<style lang="scss"></style>
