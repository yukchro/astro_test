<template>
  <div class="c-modal">
    モーダル
    <span>{{modalData.number}}</span>
  </div>
</template>

<script>
export default {
  props: {
    modalData: Object
  }
}
</script>