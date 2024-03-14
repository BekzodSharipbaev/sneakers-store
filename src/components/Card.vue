<template>
  <div>
    <div
      class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <img
        v-if="onClickFavorite"
        class="absolute top-8 left-8"
        :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
        alt="Like 1"
        @click="onClickFavorite"
      />
      <img :src="imageUrl" alt="Sneakers" />
      <p>{{ title }}</p>
      <div class="flex justify-between">
        <div class="flex flex-col">
          <span class="text-slate-400">Цена:</span>
          <b>{{ price }} руб.</b>
        </div>
        <img
          v-if="onClickFavorite"
          @click="onClickAdd"
          :src="!isAdded ? '/plus.svg' : '/checked.svg'"
          alt="Plus"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function,
});
</script>
