<template>
  <router-link class='next' :class='dynamicNextClasses' :to='nextEntryUrl'>
    <svg class='next-icon' viewBox="0 0 30 40">
      <path d="M0.952,39.01c0,0 22.755,-15.434 27.241,-18.476c0.171,-0.117 0.274,-0.31 0.274,-0.517c0,-0.208 -0.103,-0.401 -0.275,-0.517c-4.493,-3.044 -27.306,-18.497 -27.306,-18.497"></path>
    </svg>
  </router-link>
</template>

<script>
let unsubscribeRight = null;

export default {
  name: 'Next',
  props: {
    nextEntryUrl: {
      type: String,
      required: true
    }
  },
  mounted() {
    unsubscribeRight = this.$store.subscribeAction((action, state) => {
      if (action.type === 'rightPress' && !this.isHidden()) {
        this.$router.push(this.nextEntryUrl);
      }
    });
  },
  beforeDestroy() {
    if (unsubscribeRight) {
      unsubscribeRight();
      unsubscribeRight = null;
    }
  },
  computed: {
    dynamicNextClasses: function () {
      return {
        hidden: this.isHidden()
      }
    }
  },
  methods: {
    isHidden() {
      return this.nextEntryUrl === '#';
    }
  }
}
</script>

<style lang='scss'>
.next {
  display: inline-block;
  height: 600px;
  margin: 20px 0 0 0;
  padding: 330px 30px 330px 30px;
  vertical-align: top;
  z-index: 3;

  .next-icon {
    clip-rule: evenodd;
    fill-rule: evenodd;
    height: 40px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 1.5;
    width: 30px;

    path {
      fill: none;
      stroke: #AAAAAA;
      stroke-width: 4px;
    }
  }
}

.hidden {
  visibility: hidden;
}

@media only screen and (min-device-width: 219px) and (max-device-width: 735px) {
  .next {
    display: none;
  }
}
</style>