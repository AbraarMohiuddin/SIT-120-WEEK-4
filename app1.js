const app = new Vue({
  el: '#app',
  data: {
      title: 'This is my first Vue App'
  }
});

//Second Vue Test
var app2 = new Vue({
  el: '#app-2',
  data: {
      message: 'This page was accessed on ' + new Date().toLocaleString()
  }
});
