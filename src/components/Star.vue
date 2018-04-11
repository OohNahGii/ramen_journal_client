<template>
  <svg class='star' width='25' height='25' viewBox='0 0 25 25'>
    <defs>
      <linearGradient id='fill0'>
        <stop offset='0' stop-color='#D7D7D7'/>
        <stop offset='100%' stop-color='#D7D7D7'/>
      </linearGradient>
      <linearGradient id='fill10'>
        <stop offset='0' stop-color='#202020'/>
        <stop offset='10%' stop-color='#202020'/>
        <stop offset='10%' stop-color='#D7D7D7'/>
        <stop offset='100%' stop-color='#D7D7D7'/>
      </linearGradient>
      <linearGradient id='fill20'>
        <stop offset='0' stop-color='#202020'/>
        <stop offset='20%' stop-color='#202020'/>
        <stop offset='20%' stop-color='#D7D7D7'/>
        <stop offset='100%' stop-color='#D7D7D7'/>
      </linearGradient>
      <linearGradient id='fill30'>
        <stop offset='0' stop-color='#202020'/>
        <stop offset='30%' stop-color='#202020'/>
        <stop offset='30%' stop-color='#D7D7D7'/>
        <stop offset='100%' stop-color='#D7D7D7'/>
      </linearGradient>
      <linearGradient id='fill40'>
        <stop offset='0' stop-color='#202020'/>
        <stop offset='40%' stop-color='#202020'/>
        <stop offset='40%' stop-color='#D7D7D7'/>
        <stop offset='100%' stop-color='#D7D7D7'/>
      </linearGradient>
      <linearGradient id='fill50'>
        <stop offset='0' stop-color='#202020'/>
        <stop offset='50%' stop-color='#202020'/>
        <stop offset='50%' stop-color='#D7D7D7'/>
        <stop offset='100%' stop-color='#D7D7D7'/>
      </linearGradient>
      <linearGradient id='fill60'>
        <stop offset='0' stop-color='#202020'/>
        <stop offset='60%' stop-color='#202020'/>
        <stop offset='60%' stop-color='#D7D7D7'/>
        <stop offset='100%' stop-color='#D7D7D7'/>
      </linearGradient>
      <linearGradient id='fill70'>
        <stop offset='0' stop-color='#202020'/>
        <stop offset='70%' stop-color='#202020'/>
        <stop offset='70%' stop-color='#D7D7D7'/>
        <stop offset='100%' stop-color='#D7D7D7'/>
      </linearGradient>
      <linearGradient id='fill80'>
        <stop offset='0' stop-color='#202020'/>
        <stop offset='80%' stop-color='#202020'/>
        <stop offset='80%' stop-color='#D7D7D7'/>
        <stop offset='100%' stop-color='#D7D7D7'/>
      </linearGradient>
      <linearGradient id='fill90'>
        <stop offset='0' stop-color='#202020'/>
        <stop offset='90%' stop-color='#202020'/>
        <stop offset='90%' stop-color='#D7D7D7'/>
        <stop offset='100%' stop-color='#D7D7D7'/>
      </linearGradient>
      <linearGradient id='fill100'>
        <stop offset='0' stop-color='#202020'/>
        <stop offset='100%' stop-color='#202020'/>
      </linearGradient>
    </defs>
    <g v-bind:fill='fill'> 
      <path class='star-outline' d='M12.486,1l2.792,8.657l9.096,-0.02l-7.371,5.331l2.83,8.645l-7.347,-5.363l-7.347,5.363l2.829,-8.645l-7.37,-5.331l9.096,0.02l2.792,-8.657Z'/>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Star',
  props: {
    percentage: {
      type: Number,
      default: 0
    }
  },
  computed: {
    fill() {
      return 'url(#fill' + this.percentage + ')';
    }
  }
}
</script>

<style lang='scss'>
.star {
  clip-rule: evenodd;
  fill-rule: evenodd;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 1.5;

  .star-outline {
    stroke: #202020;
    stroke-width: 0.5px;
  }
}
</style>