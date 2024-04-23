<script setup lang="ts">
import { router } from '@/router';
import { computed } from 'vue';

const props = defineProps({
  title: String,
  author: String,
  pdfName: String,
  snippet: String,
  pageNumber: Number
});

function viewPdf() {
  router.push({ path: '/view/' + props.pdfName, query: { page: props.pageNumber } });
}

const title = computed(() => {
  if (props.title === '' || props.title?.includes('cid')) {
    return props.pdfName;
  } else {
    return props.title;
  }
});
</script>

<template>
  <v-card variant="flat" class="mb-2">
    <v-card-item>
      <div class="d-sm-flex align-center cursor-pointer" @click="viewPdf">
        <div class="d-flex flex-column">
          <v-card-title
            >{{ title }} <v-chip color="primary" class="ml-2" size="small"> {{ 'Page ' + pageNumber }} </v-chip>
          </v-card-title>
          <v-card-title v-if="props.author" class="text-caption">Authors: {{ props.author }}</v-card-title>
          <!-- <v-card-title class="text-caption">PDF name: {{ props.pdfName }}</v-card-title> -->
        </div>
      </div>
    </v-card-item>
    <v-divider></v-divider>
    <v-card-text>
      {{ props.snippet }}
    </v-card-text>
  </v-card>
</template>
