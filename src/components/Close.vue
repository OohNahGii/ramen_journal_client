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

  #close-icon {
    clip-rule: evenodd;
    fill-rule: evenodd;
    height: 40px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 3;
    width: 40px;

    path {
      fill: none;
      stroke: #EDEDED;
      stroke-width: 3px;
    }
  }
}
</style>