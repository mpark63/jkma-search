<script setup lang="ts">
// Icon Imports
import { HistoryIcon } from 'vue-tabler-icons';

// dropdown imports
import Searchbar from './SearchBar.vue';
import SearchHistory from './SearchHistory.vue';
</script>

<template>
  <v-app-bar elevation="0" height="80">
    <!-- ---------------------------------------------- -->
    <!-- Search part -->
    <!-- ---------------------------------------------- -->
    <v-sheet class="mx-3 v-col-10">
      <Searchbar />
    </v-sheet>

    <v-spacer />
    <!-- ---------------------------------------------- -->
    <!-- Search history -->
    <!-- ---------------------------------------------- -->
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn class="profileBtn text-primary" color="lightprimary" variant="flat" rounded="pill" v-bind="props">
          <HistoryIcon stroke-width="1.5" />
        </v-btn>
      </template>
      <v-sheet rounded="md" width="330" elevation="12">
        <SearchHistory />
      </v-sheet>
    </v-menu>
  </v-app-bar>
</template>
