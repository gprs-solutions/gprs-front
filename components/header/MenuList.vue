<template>
  <v-list class="mt-2 mx-5">
    <v-list-item link href="#experiences">
      <v-list-item-title>{{ $t("Experiences") }}</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title>{{ $t("Skills") }}</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title>{{ $t("Certifications") }}</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title>{{ $t("Projects") }}</v-list-item-title>
    </v-list-item>
    <v-list-item link href="/contact">
      <v-list-item-title>{{ $t("Contact") }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>
