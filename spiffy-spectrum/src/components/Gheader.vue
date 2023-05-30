<template>
  <header class="l-gheader">
    <button class="l-gheader__button" @click="status = !status">
      <span v-if="status" class="l-gnav-header__menu is-active">Close</span>
      <span v-else class="l-gnav-header__menu">Menu</span>
    </button>
  </header>
</template>

<script>
export default {
  props: {
    status: Boolean
  },
  data() {
    return {
      status: false
    }
  }
}

</script>