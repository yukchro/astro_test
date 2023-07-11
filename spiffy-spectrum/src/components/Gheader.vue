<template>
  <header class="l-header">
    <div class="l-header__inner">
      <h1 class="l-header__logo">Astro Demo</h1>
      <button class="l-header__button" @click="status = !status">
        <span v-if="status" class="l-header__menu is-active">Close</span>
        <span v-else class="l-header__menu">Menu</span>
      </button>
    </div>
  </header>
  <transition name="nav">
    <nav v-if="status" class="l-header__nav">
      <a href="">メニュー1</a>
      <a href="">メニュー2</a>
      <a href="">メニュー3</a>
    </nav>
  </transition>
</template>

<script>
export default {
  // props: {
  //   status: Boolean
  // },
  data() {
    return {
      status: false
    }
  }
}

</script>

<style lang="scss">
.l-header {
  position: sticky;
  top: 0;
  width: 100%;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 48px;
  }

  &__nav {
    position: absolute;
    top: 100px;
    right: 0;
    background-color: #eee;
    padding: 20px;
    display: flex;
    column-gap: 1em;
  }
}

</style>