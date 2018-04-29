<template>
  <router-link class='prev' :class='dynamicPrevClasses' :to='prevEntryUrl'>
    <svg class='prev-icon' viewBox="0 0 30 40">
      <path d="M28.909,0.995c0,0 -22.763,15.422 -27.25,18.462c-0.172,0.116 -0.274,0.31 -0.275,0.517c0,0.207 0.103,0.401 0.274,0.517c4.492,3.046 27.297,18.511 27.297,18.511"></path>
    </svg>
  </router-link>
</template>

<script>
let unsubscribeLeft = null;

export default {
  name: 'Prev',
  props: {
    prevEntryUrl: {
      type: String,
      required: true
    }
  },
  mounted() {
    unsubscribeLeft = this.$store.subscribeAction((action, state) => {
      if (action.type === 'leftPress' && !this.isHidden()) {
        this.$router.push(this.prevEntryUrl);
      }
    });
  },
  beforeDestroy() {
    if (unsubscribeLeft) {
      unsubscribeLeft();
      unsubscribeLeft = null;
    }
  },
  computed: {
    dynamicPrevClasses: function () {
      return {
        hidden: this.isHidden()
      }
    }
  },
  methods: {
    isHidden() {
      return this.prevEntryUrl === '#';
    }
  }
}
</script>

<style lang='scss'>
.prev {
  display: inline-block;
  height: 600px;
  margin: 20px 0 0 0;
  padding: 330px 30px 330px 30px;
  vertical-align: top;
  z-index: 3;

  .prev-icon {
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
  .prev {
    display: none;
  }
}
</style>