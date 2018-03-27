<template>
  <div class='rating'>
    <!-- https://codepen.io/brianknapp/pen/JEotD/ -->
    <!-- TODO fill based on rating -->
    <svg height="25" width="23" class="star">
      <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/>
    </svg>
    <svg height="25" width="23" class="star">
      <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/>
    </svg>
    <svg height="25" width="23" class="star">
      <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/>
    </svg>
    <svg height="25" width="23" class="star">
      <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/>
    </svg>
    <svg height="25" width="23" class="star unfill">
      <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/>
    </svg>
    <h3 class='overall_rating'>{{ rating }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    rating: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang='scss'>
.rating {
  align-items: center;
  display: flex;
}

.unfill polygon {
  fill: #D7D7D7;
}

.overall_rating {
  display: inline-block;
  margin: 0 0 0 5px;
}
</style>