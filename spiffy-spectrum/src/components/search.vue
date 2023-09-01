<template>
  <div class="c-search" v-bind:class="{'is-active' : searchActive}">
    <div class="c-search__inner">
      <button class="c-search__toggle" id="js-search-toggle">
        <span class="c-search__toggle-icon">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>
        </span>
      </button>
      <form action="" class="c-search-form">
        <input 
          @focus="onFocus"
          type="text"
          placeholder="なまえ、タイプなどで検索"
          class="c-search-form__input"
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchActive: false
    }
  },

  methods: {
    onFocus: function() {
      console.log('focus');
    }
  }
}
</script>

<style lang="scss">
.c-search {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 8px;
  
  &__inner {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    background-color: #efefef;
    border: 1px solid #aaa;
  }

  &__toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }

  &__toggle-icon {
    
    width: 32px;
    height: 32px;
  }

  svg {
    width: 100%;
    height: auto;
    display: block;
  }
}

.c-search-form {
  width: 100%;

  &__input {
    display: block;
    width: 100%;
    height: 100%;
    padding: 16px;
    font-size: 16px;

    &:focus {
      outline: 0;
    }
  }
}
</style>