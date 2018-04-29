<template>
  <router-link class='close' to='/'>
    <svg class='close-icon' viewBox="0 0 40 40">
      <path d="M1,1l38.003,38"></path>
      <path d="M1,39l38,-38"></path>
    </svg>
  </router-link>
</template>

<script>
let unsubscribeEsc = null;

export default {
  name: 'Close',
  mounted() {
    unsubscribeEsc = this.$store.subscribeAction((action, state) => {
      if (action.type === 'escPress') {
        this.$router.push('/');
      }
    });
  },
  beforeDestroy() {
    if (unsubscribeEsc) {
      unsubscribeEsc();
      unsubscribeEsc = null;
    }
  }
}
</script>

<style lang='scss'>
.close {
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 4;

  .close-icon {
    clip-rule: evenodd;
    fill-rule: evenodd;
    height: 40px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 1.5;
    width: 40px;

    path {
      fill: none;
      stroke: #AAAAAA;
      stroke-width: 4px;
    }
  }
}

@media only screen and (min-device-width: 219px) and (max-device-width: 735px) {
  .close {
    right: 10px;
    top: 10px;
  }
}
</style>