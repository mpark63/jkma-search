<script setup lang="ts">
import { useRoute } from 'vue-router';
import TitleBar from '@/components/shared/TitleBar.vue';
import { articles } from '@/utils/helpers/fake-data';
import SearchResult from '@/components/search/SearchResult.vue';

const route = useRoute();
const query = route.params.query;
</script>

<template>
  <v-row class="d-flex justify-center align-center">
    <v-col cols="12" md="8">
      <TitleBar :title="'Search results for: ' + query"></TitleBar>
      <SearchResult
        v-for="article in articles"
        :key="article.link"
        :pdfName="article.pdfName"
        :link="article.link"
        :snippet="article.snippet"
      />
    </v-col>
  </v-row>
</template>
