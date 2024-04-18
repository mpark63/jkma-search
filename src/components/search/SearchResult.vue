<script setup lang="ts">
import { router } from '@/router';

const props = defineProps({
  pdfName: String,
  link: String,
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
      <div class="d-sm-flex align-center justify-space-between cursor-pointer" @click="viewPdf">
        <v-card-title>{{ props.pdfName }}</v-card-title>
        <v-card-title class="text-caption">{{ props.link }}</v-card-title>
      </div>
    </v-card-item>
    <v-divider></v-divider>
    <v-card-text>
      {{ props.snippet }}
    </v-card-text>
  </v-card>
</template>
