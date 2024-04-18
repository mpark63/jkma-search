<script setup lang="ts">
import { ref } from 'vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import TitleBar from '@/components/shared/TitleBar.vue';

const page = ref({ title: 'View PDF' });
</script>

<template>
  <TitleBar :title="page.title"></TitleBar>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="Simple Title">
        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
        minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
        reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui
        officiate descent molls anim id est labours.
      </UiParentCard>
    </v-col>
  </v-row>
</template>
