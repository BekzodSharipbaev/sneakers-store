<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :isFavorite="item.isFavorite"
      :onClickFavorite="() => emit('addToFavorite', item)"
    />
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";

defineProps({
  items: Array,
});

const emit = defineEmits(["addToFavorite"]);
</script>
