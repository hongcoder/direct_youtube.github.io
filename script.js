$(document).ready(function () {

  var API_KEY = 'AIzaSyA_i06R75sxZyNTBbxmoUtAQx-x7yoSKn0'
  $("#form").submit(function (e) {
    e.preventDefault()


    let search = $("#search").val()
    let video = '';
    // let videos = $('#video')

    videoSearch(API_KEY, search, 15)
  })

  function videoSearch(key, search, maxResults) {

    $.get("https://www.googleapis.com/youtube/v3/search?key=" + key +
      "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,
      function (data) {
        console.log(data)

        data.items.forEach(item => {
          video = `
        <iframe width="420" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
      `

          $("#videos").append(video)
        })
      })
  }
})