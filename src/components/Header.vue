<template>
  <header
    class="flex justify-between items-center border-b border-slate-200 px-10 py-8"
  >
    <router-link to="/"
      ><div class="flex items-center gap-4">
        <img class="w-10" src="/logo.png" alt="Logo" />
        <div>
          <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
          <p class="text-slate-400">Магазин лучших кроссовок</p>
        </div>
      </div></router-link
    >

    <ul class="flex items-center gap-10">
      <li
        class="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black"
        @click="() => emit('openDrawer')"
      >
        <img src="/cart.svg" alt="Cart" />
        <b>{{ totalPrice }} руб.</b>
      </li>
      <router-link to="/favorites"
        ><li
          class="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black"
        >
          <img src="/heart.svg" alt="Heart" />
          <span>Закладки</span>
        </li></router-link
      >
      <li
        class="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black"
      >
        <img src="/profile.svg" alt="Profile" />
        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>

<script setup>
const emit = defineEmits(["openDrawer"]);

defineProps({
  totalPrice: Number,
});
</script>
