import Stream from 'node-rtsp-stream';
export const STREAMRTSP = new Stream({
  name: 'name',
  streamUrl: 'rtsp://admin:Egzul22corP@192.168.0.19:554',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})
console.log("rtsp streamer")