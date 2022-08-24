const pulseLoader = {
  name: 'Pulse',
  key: 'pulse',
  color: '#62af65',
  code: {
    html: `<div class='pulseLoader'></div>
    `,
    css: `.pulseLoader {
  width: 4em;
  height: 4em;
  border-radius: 4em;
  background-color: white;
  outline: 1px solid transparent;
  animation: pulseLoaderAnim 1.2s ease-in-out infinite;
}
@keyframes pulseLoaderAnim {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}`,
    scss: `$pulseLoaderSize: 4em;
$pulseLoaderTiming: 1.2s;

.pulseLoader {
  width: $pulseLoaderSize;
  height: $pulseLoaderSize;
  border-radius: $pulseLoaderSize;
  background-color: white;
  outline: 1px solid transparent;
  animation: pulseLoaderAnim $pulseLoaderTiming ease-in-out infinite;
}
@keyframes pulseLoaderAnim {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}`
  }
}

export default pulseLoader