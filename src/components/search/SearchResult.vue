<script setup lang="ts">
import { router } from '@/router';

const props = defineProps({
  title: String,
  author: String,
  pdfName: String,
  snippet: String
});

function viewPdf() {
  router.push('/view/' + props.pdfName);
}
</script>

// ===============================|| Ui Parent Card||=============================== //
<template>
  <v-card variant="flat" class="mb-2">
    <v-card-item>
      <div class="d-sm-flex align-center cursor-pointer" @click="viewPdf">
        <div class="d-flex flex-column">
          <v-card-title>{{ props.title || props.pdfName }}</v-card-title>
          <v-card-title class="text-caption">Authors: {{ props.author }}</v-card-title>
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
