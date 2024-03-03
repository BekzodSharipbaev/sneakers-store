<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :onClickAdd="onClickAdd"
      :isFavorite="item.isFavorite"
    />
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";

defineProps({
  items: Array,
});

const onClickAdd = () => {
  alert("CLICK!");
};
</script>
