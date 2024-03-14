<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
    <DrawerHead />

    <div v-if="!totalPrice || orderId" class="flex h-full items-center">
      <InfoBlock
        v-if="!totalPrice && !orderId"
        title="Корзина пустая"
        description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
        imageUrl="/package-icon.png"
      />

      <InfoBlock
        v-if="orderId"
        title="Заказ оформлен"
        :description="`Ваш заказ #${orderId} скоро будет передан курьерской доставке.`"
        imageUrl="/order-success-icon.png"
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
          @click="createOrder"
          class="bg-lime-500 w-full rounded-xl py-3 text-white transition cursor-pointer disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, inject } from "vue";
import axios from "axios";

import DrawerHead from "@/components/DrawerHead.vue";
import CartListItem from "@/components/CartListItem.vue";
import InfoBlock from "@/components/InfoBlock.vue";

const isCreatingOrder = ref(false);
const orderId = ref(null);

const { cart, closeDrawer } = inject("cart");

const props = defineProps({
  totalPrice: Number,
  vatPrice: Number,
});

const createOrder = async () => {
  try {
    isCreatingOrder.value = true;
    const { data } = await axios.post(
      `https://1ca4ffd92060745f.mokky.dev/orders`,
      {
        items: cart.value,
        totalPrice: props.totalPrice.value,
      }
    );
    cart.value = [];

    orderId.value = data.id;
  } catch (err) {
    console.log(err);
  } finally {
    isCreatingOrder.value = false;
  }
};

const cartIsEmpty = computed(() => cart.value.length === 0);

const buttonDisabled = computed(
  () => isCreatingOrder.value || cartIsEmpty.value
);
</script>
