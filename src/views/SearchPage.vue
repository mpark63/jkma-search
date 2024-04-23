<script setup lang="ts">
import { useRoute } from 'vue-router';
import TitleBar from '@/components/shared/TitleBar.vue';
// import { articles } from '@/utils/helpers/fake-data';
import SearchResult from '@/components/search/SearchResult.vue';
import SearchApplicationClient from '@elastic/search-application-client';
import { onMounted, ref } from 'vue';
// import Client from '@elastic/search-application-client';

const route = useRoute();
const query = route.params.query;
const loading = ref(false);
const results = ref();

console.log(query);
onMounted(async () => {
  loading.value = true;
  const request = SearchApplicationClient(
    'jkma-api', // search application name
    'https://corsproxy.io/?https://df3eda039ead43488344961c75152714.us-central1.gcp.cloud.es.io:443', // url-host
    'RF9SR0NJOEJJN0pMSC1jV3BFU2o6ZVRBM0l6cndTYlc0X0dPQnFIbUZGZw==',
    {},
    { headers: { mode: 'no-cors', 'Content-Type': 'application/json' } }
  );
  const response = await request()
    .query(query as string)
    .search();

  results.value = response.hits.hits;
  loading.value = false;
});
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
    </v-col>
  </v-row>
</template>
