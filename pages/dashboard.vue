<template>
  <!-- <div class="has-text-centered">
    Noch in der Entwicklung und vorerst nicht verfügbar!
  </div> -->
  <p v-if="!fetched" class="has-text-centered">Lädt Daten Herunter...</p>
  <div v-else class="has-text-centered">
    <section class="hero">
      <div class="hero-body">
        <p class="title">Einstellungen</p>
      </div>
    </section>
    Dashboard {{ user }}#
    {{ team }}
    {{ $auth.user }}
    <!-- <section>
      <b-tabs v-model="activeTab" position="is-centered" :animated="false">
        <b-tab-item label="Allgemein" icon="home"
          ><div class="container has-text-centered">
            <div class="columns">
              <div class="column">
                <b-field label="Nickname" label-position="inside">
                  <b-input
                    v-model="user.settings.nickname"
                    maxlength="32"
                    minlength="1"
                    :placeholder="$auth.user.username"
                    @input="changed = true"
                  ></b-input>
                </b-field>
                <b-field label="Biographie" label-position="inside">
                  <b-input
                    v-model="user.settings.bio"
                    type="textarea"
                    minlength="0"
                    maxlength="1024"
                    placeholder="Name, Alter, Spielstyle, etc."
                    @input="changed = true"
                  ></b-input>
                </b-field>
                <b-field
                  label="
                Plattform Auswählen"
                >
                  <b-select
                    v-model="user.settings.platform"
                    placeholder="Auswählen"
                    @input="changed = true"
                  >
                    <option
                      v-for="(platform, name) in platforms"
                      :key="platform"
                      :value="name"
                    >
                      {{ platform }}
                    </option>
                  </b-select>
                </b-field>
                <b-field
                  label="
                Rang auswählen"
                >
                  <b-select
                    v-model="user.settings.rank"
                    placeholder="Auswählen"
                    @input="changed = true"
                  >
                    <option
                      v-for="(rank, name) in ranks"
                      :key="rank"
                      :value="name"
                    >
                      {{ rank }}
                    </option>
                  </b-select>
                </b-field>
              </div>
            </div>
            <b-button
              :disabled="disableSubmit"
              type="is-success"
              @click="submitChanges()"
              >Speichern</b-button
            >
          </div></b-tab-item
        >
        <b-tab-item label="Dein Team" icon="account">
          <div v-if="team.leaderID === 0" class="container has-text-centered">
            <div class="hero">
              <div class="hero-body">
                <p class="title">Du bist in keinem Team</p>
                <p class="subtitle">
                  <nuxt-link :to="{ path: '/teams' }"
                    >Suche dir ein Team</nuxt-link
                  >
                  <br />
                  oder
                  <br />
                  Erstelle eins:
                </p>
              </div>
            </div>
            <div class="divider">Basics</div>
            <div class="container">
              <b-field label="Team Name" label-position="inside">
                <b-input
                  v-model="team.name"
                  minlength="3"
                  maxlength="50"
                  placeholder="Name des Team"
                ></b-input>
              </b-field>
              <b-field label="Team Beschreibung" label-position="inside">
                <b-input
                  v-model="team.description"
                  type="textarea"
                  minlength="70"
                  maxlength="1024"
                  placeholder="Pläne, Spielstyle, etc."
                ></b-input>
              </b-field>
            </div>
            <div class="divider">Settings</div>
            <b-switch v-model="team.recruiting">Bewerbungen offen?</b-switch>
            <b-field
              label="
                Rang auswählen"
            >
              <b-select v-model="team.rank" placeholder="Auswählen">
                <option v-for="(rank, name) in ranks" :key="rank" :value="name">
                  {{ rank }}
                </option>
              </b-select>
            </b-field>
            <b-field label="Farbe auswählen">
              <v-swatches
                v-model="team.color"
                show-fallback
                fallback-input-type="color"
              ></v-swatches>
            </b-field>

            <div class="divider">Mitglieder</div>
            <b-field label="Suchende Mitglieder"></b-field>
            <b-field
              label="
                (mit STRG mehrer auswählen | Nach dem auswählen können auch die
                Spielerprofile besucht werden)"
            >
              <b-select
                v-model="team.invitedMembers"
                placeholder="Auswählen"
                multiple
                :native-size="
                  membersSearchingAndMember.length < 8
                    ? membersSearchingAndMember.length
                    : 8
                "
              >
                <option
                  v-for="member in membersSearchingAndMember"
                  :key="member.user.id"
                  :value="member.user.id"
                >
                  {{ member.user.tag }}
                </option>
              </b-select>
            </b-field>
            <h1 v-if="team.invitedMembers.length > 0">
              Einladung wird versendet an:
              <div
                v-for="member in membersSearchingAndMember"
                :key="member.user.id"
              >
                <a
                  v-if="team.invitedMembers.includes(member.user.id)"
                  target="_blank"
                  :href="'/user?userID=' + member.user.id"
                >
                  {{ member.user.tag }}
                </a>
              </div>
            </h1>
            <div class="divider">Fertig</div>
            <div class="container">
              <b-button
                :disabled="disableCreateTeam"
                type="is-success"
                @click="createTeam()"
                >Team erstellen</b-button
              >
            </div>
          </div>
          <div v-if="team.leaderID !== 0" class="container has-text-centered">
            <b-message
              v-if="!team.confirmed"
              type="is-danger"
              has-icon
              icon="account"
              style="margin-left: 20vh; margin-right: 20vh"
            >
              Das Team wurde noch nicht von einem Moderator bestätigt!
            </b-message>
            <div class="columns">
              <div class="column">
                <div class="box">
                  <div class="content">
                    <h2>
                      Name:
                      <p>{{ team.name }}</p>
                    </h2>
                    <h2>Beschreibung:</h2>
                    <b-input
                      type="textarea"
                      :value="team.description"
                      disabled
                    ></b-input>
                    <h2>
                      Rang:
                      <p>{{ ranks[team.rank] }}</p>
                    </h2>
                    <h2>
                      Color:
                      <p
                        v-if="team.color.length > 0"
                        :style="{ color: team.color }"
                      >
                        {{ team.color }}
                      </p>
                      <p v-else>No Color Set</p>
                    </h2>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="box">
                  <div class="content">
                    <h2>
                      Anführer:
                      <a
                        v-if="teamLeader.user !== undefined"
                        target="_blank"
                        :href="'/user?userID=' + teamLeader.user.id"
                        >{{ teamLeader.user.tag }}</a
                      >
                    </h2>
                    <h2>Mitglieder ({{ team.members.length }}/10 ):</h2>
                    <ul v-if="team.members.length > 0" style="list-style: none">
                      <li v-for="member in teamMembers" :key="member.user.id">
                        <a
                          :href="'/user?userID=' + member.user.id"
                          target="_blank"
                        >
                          {{ member.user.tag }}
                        </a>
                      </li>
                    </ul>
                    <p v-else>Keine Mitglieder</p>
                    <h2>
                      Eingeladene Mitglieder ({{
                        team.invitedMembers.length
                      }}/{{ 10 - team.members.length }}):
                    </h2>
                    <ul
                      v-if="team.invitedMembers.length > 0"
                      style="list-style: none"
                    >
                      <li
                        v-for="member in teamInvitedMembers"
                        :key="member.user.id"
                      >
                        <a
                          :href="'/user?userID=' + member.user.id"
                          target="_blank"
                        >
                          {{ member.user.tag }}
                        </a>
                      </li>
                    </ul>
                    <p v-else>Keine Eingeladenen Mitglieder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-tab-item>
      </b-tabs>
    </section> -->
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  asyncData(context) {
    return {}
  },
  data() {
    return {
      fetched: false,
      activeTab: 0,
      team: null,
      changed: false,
      disableSubmit: false,
      disableCreateTeam: false,
      members: [],
      teamLeader: null,
    }
  },
  mounted() {},
  methods: {
    submitChanges() {
      if (this.changed) {
        // TODO Database Interaction
        this.toastSuccess(`Changes saved Successfully!`)
        this.changed = false
      } else {
        this.toastDanger(`No Changes!`)
      }
      this.disableSubmit = true
      setTimeout(() => (this.disableSubmit = false), 2000)
    },
    isEmpty(string) {
      return string.length === 0 || !string.trim() || string.length < 2
    },
    toastDanger(message) {
      this.$buefy.toast.open({
        message,
        position: 'is-top',
        type: 'is-danger',
        queue: false,
      })
    },
    toastSuccess(message) {
      this.$buefy.toast.open({
        message,
        position: 'is-top',
        type: 'is-success',
        queue: false,
      })
    },
  },
}
</script>
<style lang="scss"></style>
