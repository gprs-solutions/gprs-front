<template>
  <header id="header" class="bg-primary p-5">
    <div>
      <ul class="d-flex justify-end">
        <li><a>Home</a></li>
        <li>
          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="plain" append-icon="mdi-menu-down" v-bind="props">
                About me
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>Experiences</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </li>
        <li><a>Contact</a></li>
      </ul>
    </div>
  </header>
</template>
<script setup></script>
