const images = [
    "https://picsum.photos/id/1015/300/200",
    "https://picsum.photos/id/1020/300/200",
    "https://picsum.photos/id/1025/300/200"
  ];
  
  
  let currentIndex = 0;
  
  function showImage(index) {
    document.getElementById("carouselImage").src = images[index];
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(res => res.json())
      .then(data => {
        document.getElementById("jokeText").textContent = data.setup + " " + data.punchline;
      });
  }
  