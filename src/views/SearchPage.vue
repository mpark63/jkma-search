<script setup lang="ts">
import { useRoute } from 'vue-router';
import TitleBar from '@/components/shared/TitleBar.vue';
import SearchResult from '@/components/search/SearchResult.vue';
import SearchApplicationClient from '@elastic/search-application-client';
import { onMounted, ref } from 'vue';
import { watch } from 'vue';

const request = SearchApplicationClient(
  'jkma-api', // search application name
  'https://corsproxy.io/?https://df3eda039ead43488344961c75152714.us-central1.gcp.cloud.es.io:443', // url-host
  'RF9SR0NJOEJJN0pMSC1jV3BFU2o6ZVRBM0l6cndTYlc0X0dPQnFIbUZGZw=='
);
const route = useRoute();
const query = ref(route.params.query as string);
const loading = ref(false);
const results = ref();
// const numPages = ref();
// const page = ref(1);

const search = async () => {
  loading.value = true;
  const response = await request()
    .addParameter('query_string', query.value)
    // .setPageSize(10)
    // .setFrom(10 * (page.value - 1))
    .search();

  // numPages.value = Math.ceil(response.hits.total.value / 12);
  results.value = response.hits.hits;
  loading.value = false;
};

onMounted(async () => {
  await search();
});

watch(query, async () => {
  await search();
});

// watch(page, async () => {
//   console.log(page.value);
//   await search();
// });
</script>

<template>
  <v-row class="d-flex justify-center align-center">
    <v-col cols="12" md="8">
      <TitleBar :title="'Search results for: ' + query"></TitleBar>
      <v-progress-linear v-if="loading" indeterminate color="primary"></v-progress-linear>
      <SearchResult
        v-for="result in results"
        :key="result._id"
        :pdfName="result._source.pdf"
        :title="result._source.title"
        :author="result._source.author"
        :snippet="result._source.pages[1].slice(0, 200)"
      />
      <!-- <div class="text-center">
        <v-pagination v-model="page" :length="numPages" next-icon="mdi-menu-right" prev-icon="mdi-menu-left"></v-pagination>
      </div> -->
    </v-col>
  </v-row>
</template>
