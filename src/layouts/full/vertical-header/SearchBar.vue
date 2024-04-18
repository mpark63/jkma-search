<script setup>
import { ref } from 'vue';
import { router } from '@/router';
import { SearchIcon } from 'vue-tabler-icons';

const query = ref('');

function search(query) {
  if (query) {
    router.push('/search/' + query);
  }
}
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!-- searchbar -->
  <!-- ---------------------------------------------- -->
  <v-text-field v-model="query" persistent-placeholder placeholder="Search" color="primary" variant="outlined" hide-details>
    <template v-slot:append-inner>
      <v-btn color="lightsecondary" icon rounded="sm" variant="flat" size="small" class="text-secondary SearchSetting">
        <SearchIcon stroke-width="1.5" size="17" class="text-lightText SearchIcon" @click="search(query)" />
      </v-btn>
    </template>
  </v-text-field>
</template>
