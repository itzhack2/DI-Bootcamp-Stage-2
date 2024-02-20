// Step 1: Create a class named Video
class Video {

    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
 
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
  }
  
  const video1 = new Video("The Shawshank Redemption", "ben", "120 minutes");
  video1.watch();
  
  const video2 = new Video("Inception", "Adam", "180 minutes");
  video2.watch();
  

  const videoDataArray = [
    { title: "The Dark Knight", uploader: "Itzhack", time: "150 minutes"},
    { title: "Pulp Fiction", uploader: "Moffi", time: "200 minutes"},
    { title: "Forrest Gump", uploader: "Li", time:" 90 minutes"},
    { title: "The Matrix", uploader: "Loffy", time: "240 minutes" },
    { title: "The Godfather", uploader: "Zoro", time: "170 minutes"},
  ];
  

  const videoInstances = [];
  for (const data of videoDataArray) {
    const video = new Video(data.title, data.uploader, data.time);
    videoInstances.push(video);
  }
  

  for (const videoInstance of videoInstances) {
    videoInstance.watch();
  }
  