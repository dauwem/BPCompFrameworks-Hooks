var CountMixin = {
  data() {
    return {
      count: 0
    };
  },
  computed: {
    increaseCount: {
      set: function(value) {
        this.count = this.count + value;
      },
      get: function() {
        return this.count;
      }
    },
    decreaseCount: {
      set: function(value) {
        if (this.count !== 0) {
          this.count = this.count - value;
        }
      },
      get: function() {
        return this.count;
      }
    }
    /* increaseCount: function() {
      console.log('increase');
      return this.count++;
    },
    decreaseCount: function() {
      return this.count === 0 ? 0 : this.count--;
    } */
  }
};

export default CountMixin;
