const video = document.getElementById('video')

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models'),

]).then(startVideo)


//have webcam display
function startVideo() {
    navigator.getUserMedia(
        { video: {}},
        //grabbing video object
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}
//call function
//
video.addEventListener('play', () => {
    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video,
            new faceapi.TinyFaceDetectorOptions()).withFaceLandMarks
        ()
    }, 100)
})