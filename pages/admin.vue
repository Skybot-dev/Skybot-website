<template>
  <p v-if="!fetched" class="has-text-centered">Lädt Daten Herunter...</p>
  <div v-else class="dialog">
    <section class="hero has-text-centered">
      <div class="hero-body">
        <p class="title">Admin</p>
      </div>
    </section>
    <!-- <section>
      <b-tabs v-model="activeTab" :animated="false" position="is-centered">
        <b-tab-item label="Teams">
          <b-table
            v-if="teams.length > 0"
            :data="teams"
            striped
            style="margin-left: 5vh; margin-right: 5vh"
          >
            <b-table-column v-slot="props" field="name" label="Name">
              {{ props.row.name }}
            </b-table-column>
            <b-table-column
              v-slot="props"
              field="description"
              label="Beschreibung"
            >
              <b-input
                type="textarea"
                :value="props.row.description"
                disabled
              ></b-input>
            </b-table-column>
            <b-table-column v-slot="props" field="rank" label="Rang">
              {{ ranks[props.row.rank] }}
            </b-table-column>
            <b-table-column v-slot="props" field="recruiting" label="Wirbt an">
              {{ props.row.recruiting ? 'Ja' : 'Nein' }}
            </b-table-column>
            <b-table-column v-slot="props" field="confirmed" label="Bestätigt">
              {{ props.row.confirmed ? 'Ja' : 'Nein' }}
              <a v-if="!props.row.confirmed" @click="confirmTeam(props.row)"
                >(Jetzt Freigeben)</a
              >
            </b-table-column>
            <b-table-column v-slot="props" label="Löschen">
              <b-icon
                icon="delete"
                style="cursor: pointer"
                @click.native="deleteTeam(props.row)"
              ></b-icon>
            </b-table-column>
          </b-table>
          <p v-else class="has-text-centered">Not Teams found</p>
        </b-tab-item>

        <b-tab-item label="Members">
          <b-table
            v-if="users.length > 0"
            :data="users"
            style="margin-left: 5vh; margin-right: 5vh"
          >
            <b-table-column v-slot="props" label="Name">
              {{ getDiscordMember(props.row).user.tag }}
              {{
                props.row.settings.nickname.length > 0
                  ? '(' + props.row.settings.nickname + ')'
                  : ''
              }}
            </b-table-column>
            <b-table-column
              v-slot="props"
              field="settings.bio"
              label="Biographie"
            >
              <b-input
                type="textarea"
                :value="props.row.settings.bio"
                disabled
              ></b-input>
            </b-table-column>
            <b-table-column v-slot="props" field="settings.rank" label="Rang">
              {{
                props.row.settings.rank != ''
                  ? ranks[props.row.settings.rank]
                  : 'Nicht Verfügbar'
              }}
            </b-table-column>
            <b-table-column
              v-slot="props"
              field="settings.platform"
              label="Plattform"
            >
              {{
                props.row.settings.platform != ''
                  ? platforms[props.row.settings.platform]
                  : 'Nicht Verfügbar'
              }}
            </b-table-column>
            <b-table-column
              v-slot="props"
              field="settings.nationality"
              label="Nationalität"
            >
              <div
                v-if="
                  getCountryById(props.row.settings.nationality) !== undefined
                "
              >
                {{ getCountryById(props.row.settings.nationality).name }}
              </div>
              <div v-else>Nicht Verfügbar</div>
            </b-table-column>
            <b-table-column v-slot="props" label="Löschen">
              <b-icon
                icon="delete"
                style="cursor: pointer"
                @click.native="deleteUser(props.row.userID)"
              ></b-icon>
            </b-table-column>
          </b-table>
          <p v-else class="has-text-centered">Not Teams found</p></b-tab-item
        >
      </b-tabs>
    </section> -->
  </div>
</template>
<script>
export default {
  middleware: ['admin'],
  asyncData(context) {
    return {}
  },
  data() {
    return {
      fetched: false,
      members: null,
      activeTab: 0,
    }
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="scss"></style>
