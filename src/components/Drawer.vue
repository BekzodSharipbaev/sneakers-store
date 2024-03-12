<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
    <DrawerHead />
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
    </div>
    <button
      :disabled="buttonDisabled"
      @click="() => emit('createOrder')"
      class="bg-lime-500 w-full rounded-xl py-3 text-white transition cursor-pointer disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700"
    >
      Оформить заказ
    </button>
  </div>
</template>

<script setup>
import DrawerHead from "@/components/DrawerHead.vue";
import CartListItem from "@/components/CartListItem.vue";
import { computed } from "vue";
const emit = defineEmits(["createOrder"]);
const props = defineProps({
  totalPrice: Number,
  vatPrice: Number,
  isCreatingOrder: Boolean,
});

const buttonDisabled = computed(() =>
  props.isCreatingOrder.value ? true : props.totalPrice ? false : true
);
</script>
