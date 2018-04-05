<template>
  <router-link id='close' to='/'>
    <svg id='close-icon' viewBox="0 0 40 40">
      <path d="M1,1l38.003,38"/>
      <path d="M1,39l38,-38"/>
    </svg>
  </router-link>
</template>

<style lang='scss'>
#close {
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 3;

  #close-icon {
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
  #close {
    right: 10px;
    top: 10px;
  }
}
</style>