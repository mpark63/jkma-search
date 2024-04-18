<script async setup>
import { onMounted, ref } from 'vue';
import { router } from '@/router';
import { SearchIcon } from 'vue-tabler-icons';

const query = ref('');

function search() {
  if (query.value) {
    router.push('/search/' + query.value);
  }
}

onMounted(() => {
  window.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      search(query.value);
    }
  });
});
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!-- searchbar -->
  <!-- ---------------------------------------------- -->
  <v-text-field v-model="query" persistent-placeholder placeholder="Search" color="primary" variant="outlined" hide-details>
    <template v-slot:append-inner>
      <v-btn color="lightsecondary" icon rounded="sm" variant="flat" size="small" class="text-secondary SearchSetting">
        <SearchIcon stroke-width="1.5" size="17" class="text-lightText SearchIcon" @click="search()" @keyup.enter="search()" />
      </v-btn>
    </template>
  </v-text-field>
</template>
