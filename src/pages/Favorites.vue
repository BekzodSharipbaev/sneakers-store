<template>
  <h1>Мои закладки</h1>

  <CardList :items="favorites" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import CardList from "@/components/CardList.vue";

const favorites = ref([]);

onMounted(async () => {
  try {
    const { data } = await axios.get(
      "https://1ca4ffd92060745f.mokky.dev/favorites?_relations=items"
    );
    favorites.value = data.map((obj) => obj.item);
  } catch (error) {
    console.log(error);
  }
});
</script>
