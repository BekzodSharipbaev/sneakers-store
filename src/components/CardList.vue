<template>
  <div class="grid grid-cols-4 gap-5" v-auto-animate>
    <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :isFavorite="item.isFavorite"
      :onClickFavorite="isFavorite ? null : () => emit('addToFavorite', item)"
      :onClickAdd="isFavorite ? null : () => emit('addToCart', item)"
      :isAdded="item.isAdded"
    />
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";

defineProps({
  items: Array,
  isFavorite: Boolean,
});

const emit = defineEmits(["addToFavorite", "addToCart"]);
</script>
