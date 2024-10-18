<script setup>
import { useContactStore } from "~/stores/useContactStore";

const contactStore = useContactStore();
const email = computed({
  get() {
    return contactStore.getEmail;
  },
  set(v) {
    contactStore.setEmail(v);
  },
});
const name = computed({
  get() {
    return contactStore.getName;
  },
  set(v) {
    contactStore.setName(v);
  },
});
const message = computed({
  get() {
    return contactStore.getMessage;
  },
  set(v) {
    contactStore.setMessage(v);
  },
});

const emailRules = [
  (value) => !!value || "Email é obrigatório.",
  (value) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
    "Digite um email válido.",
];
const nameRules = [(value) => !!value || "Nome é obrigatório."];
const messageRules = [(value) => !!value || "Mensagem é obrigatória."];

const isFormValid = ref(false);
</script>
<template>
  <section id="contact">
    <div class="title text-center pa-2">
      <h2>Fale comigo hoje mesmo!</h2>
      <p>Entre em contato via este formulário</p>
    </div>
    <v-row class="pa-0 ma-0">
      <v-col cols="1" sm="3" md="4" lg="4"></v-col>
      <v-col cols="10" sm="6" md="4" lg="4">
        <v-card class="pa-8">
          <v-form v-model="isFormValid">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              class="mb-2"
              label="Nome"
              placeholder="Digite seu nome"
            >
            </v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              class="mb-2"
              label="Email"
              placeholder="Digite seu email"
            >
            </v-text-field>
            <v-textarea
              v-model="message"
              :rules="messageRules"
              class="mb-2"
              label="Mensagem"
              placeholder="Escreva uma mensagem"
            >
            </v-textarea>

            <v-btn color="success" block> Entrar em contato </v-btn>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="1" sm="3" md="4" lg="4"></v-col>
    </v-row>
  </section>
</template>
