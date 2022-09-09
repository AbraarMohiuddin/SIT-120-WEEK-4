const app = new Vue({
  el: '#app',
  data: {
      title: 'This is my first Vue App'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
      message: 'This page was accessed on ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    message: "Week 4 Task 3",
  },
  methods: {
    changeMessage: function () {
      this.message = "Hope you liked it!";
    },
  },
});