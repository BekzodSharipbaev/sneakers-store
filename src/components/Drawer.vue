<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
    <DrawerHead />

    <div v-if="!totalPrice" class="flex h-full items-center">
      <InfoBlock
        title="Корзина пустая"
        description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
        imageUrl="/package-icon.png"
      />
    </div>

    <div v-else>
      <CartListItem />

      <div class="flex flex-col gap-4 my-7">
        <div class="flex gap-2">
          <span>Итого:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ totalPrice }} руб.</b>
        </div>
        <div class="flex gap-2">
          <span>Налог 5%:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ vatPrice }} руб.</b>
        </div>
        <button
          :disabled="buttonDisabled"
          @click="() => emit('createOrder')"
          class="bg-lime-500 w-full rounded-xl py-3 text-white transition cursor-pointer disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

import DrawerHead from "@/components/DrawerHead.vue";
import CartListItem from "@/components/CartListItem.vue";
import InfoBlock from "@/components/InfoBlock.vue";

const emit = defineEmits(["createOrder"]);
defineProps({
  totalPrice: Number,
  vatPrice: Number,
  isCreatingOrder: Boolean,
  buttonDisabled: Boolean,
});
</script>
