export default {
  name: 'Pulse',
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
  animation: pulseanim 1.2s ease-in-out infinite;
}
@keyframes pulseanim {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}`,
    scss: `$pulseSize: 4em;
$pulseTiming: 1.2s;

.pulseLoader {
  width: $pulseSize;
  height: $pulseSize;
  border-radius: $pulseSize;
  background-color: white;
  outline: 1px solid transparent;
  animation: pulseanim $pulseTiming ease-in-out infinite;
}
@keyframes pulseanim {
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