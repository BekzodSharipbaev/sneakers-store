<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
      title="Мужские кроссовки Nike Blazer Mid Suede"
      imageUrl="/sneakers/sneakers-1.jpg"
      :price="1205"
      :isAdded="true"
      :onClickAdd="onClickAdd"
    />
  </div>
</template>

<script setup>
import Card from '@/components/Card.vue'

const onClickAdd = () => {
  alert('CLICK!')
}
</script>
