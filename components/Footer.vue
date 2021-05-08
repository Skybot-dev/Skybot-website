<template>
  <footer class="footer-custom">
    <div class="columns is-centered">
      <div class="column has-text-centered">
        <b-tooltip label="Twitter" type="is-dark">
          <a href="https://twitter.com/TSS_RL" target="_blank">
            <b-icon icon="twitter" size="is-large" type="is-info"></b-icon>
          </a>
        </b-tooltip>
      </div>
      <div class="column has-text-centered">
        <b-tooltip label="Youtube" type="is-dark">
          <a
            href="https://www.youtube.com/channel/UCjEDx0ZJMCJ9nMnKamgZ17Q"
            target="_blank"
          >
            <b-icon icon="youtube" size="is-large" style="color: red"></b-icon>
          </a>
        </b-tooltip>
      </div>
      <div class="column has-text-centered">
        <b-tooltip label="Discord" type="is-dark">
          <a href="https://discord.gg/BsrK8KngDC" target="_blank">
            <b-icon
              icon="discord"
              size="is-large"
              style="color: #7289d9"
            ></b-icon>
          </a>
        </b-tooltip>
      </div>
      <div class="column">
        <b-tooltip label="Gamertransfer" type="is-dark">
          <a href="https://gamertransfer.com/" target="_blank"
            ><img
              src="https://gamertransfer.com/banner/logo_v5.svg"
              alt="clans"
              border="0"
          /></a>
        </b-tooltip>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer-custom {
  position: relative;
  background-color: transparent;
  margin: 5vh 30vh 5vh 30vh;
}
</style>
