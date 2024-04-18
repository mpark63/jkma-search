<script setup lang="ts">
import UiParentCard from '@/components/shared/UiParentCard.vue';
import TitleBar from '@/components/shared/TitleBar.vue';
</script>

<template>
  <v-row class="d-flex justify-center align-center">
    <v-col cols="12" md="8">
      <TitleBar title="Home"></TitleBar>
      <UiParentCard title="About" class="mb-2">
        This website is an unofficial search engine for the Journal of Korean Medical Association. It is to help with topic development for
        Cross Lingual Information Retrieval research under Dr. Kenton Murray and Dr. Eugene Yang. We received permission from the Korean
        Medical Association to use their data for research purposes.
      </UiParentCard>
      <UiParentCard title="Getting started" class="mb-2">
        You can start by searching for a keyword in the search bar above. The search engine will return a list of articles that contain the
        most relevant information. You can click on an article in the search results and view the most relevant page of the article. For
        more instructions on the topic development task, please refer to the
        <a href="https://docs.google.com/document/d/1daMyY1Ez7BuLse2A5AY75PFurxLn_h225-SekkKg_7Y/edit?usp=sharing" target="_blank">
          Korean-English Topic Development Official Guide
        </a>
        .
      </UiParentCard>
      <UiParentCard title="Questions?">
        Feel free to contact <a href="mailto:mpark63@jh.edu">mpark63@jh.edu</a> with any questions.
      </UiParentCard>
    </v-col>
  </v-row>
</template>
