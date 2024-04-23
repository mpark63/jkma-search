<script setup lang="ts">
import TitleBar from '@/components/shared/TitleBar.vue';
import { onMounted, ref, shallowRef, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const fileName = route.params.id;
const pageNumber = route.query.page;
const url = shallowRef('https://corsproxy.io/?' + encodeURIComponent('https://www.jkma.org/upload/pdf/' + fileName));
const loading = ref(true);
const embedElement = ref();

onMounted(() => {
  embedElement.value = document.getElementById('pdf-viewer');
});

// watch works directly on a ref
watch(embedElement, async () => {
  if (embedElement.value) {
    embedElement.value.addEventListener('load', function () {
      // Operate upon the SVG DOM here
      loading.value = false;
    });
  }
});
</script>

<template>
  <v-row class="d-flex justify-center align-center">
    <v-col cols="12" md="8">
      <TitleBar title="View PDF"></TitleBar>
      <v-progress-linear v-if="loading" indeterminate color="primary"></v-progress-linear>
      <!-- <embed id="pdf-viewer" :src="url" width="100%" height="800" type="application/pdf" /> -->
      <object id="pdf-viewer" type="application/pdf" :data="url + '#page=' + pageNumber" width="100%" height="800"></object>
    </v-col>
  </v-row>
</template>
