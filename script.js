console.log("this");

$.ajax({
  'url' : 'https://pixabay.com/api/Your_API_Here',
  'type' : 'GET',
  'success' : function(data) {
    console.log(data);
   },
});
