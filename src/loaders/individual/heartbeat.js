const heartbeatLoader = {
  name: 'Heartbeat',
  key: 'heartbeat',
  color: '#9a40a9',
  code: {
    html: `<div class="heartbeatLoader">
  <div class="heartbeatLoader__pulse"></div>
  <div class="heartbeatLoader__pulse"></div>
</div>`,
    css: `.heartbeatLoader {
  width: 4em;
  height: 4em;
  position: relative;
}
.heartbeatLoader .heartbeatLoader__pulse {
  width: 4em;
  height: 4em;
  border-radius: 50%;
  position: absolute;
  background-color: white;
  animation: heartbeatLoaderAnim 1.2s ease-in-out infinite;
  transform: scale(0);
  outline: 1px solid transparent;
}
.heartbeatLoader .heartbeatLoader__pulse:nth-child(2) {
  animation-delay: 0.22s;
}
@keyframes heartbeatLoaderAnim {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}`,
    scss: `$heartbeatLoaderSize: 4em;
$heartbeatLoaderTiming: 1.2s;

.heartbeatLoader {
  width: $heartbeatLoaderSize;
  height: $heartbeatLoaderSize;
  &__pulse {
    width: $heartbeatLoaderSize;
    height: $heartbeatLoaderSize;
    border-radius: 50%;
    position: absolute;
    background-color: white;
    animation: heartbeatLoaderAnim $heartbeatLoaderTiming ease-in-out infinite;
    transform: scale(0);
    outline: 1px solid transparent;
    &:nth-child(2) {
      animation-delay: 0.22s;
    }
  }
}
@keyframes heartbeatLoaderAnim {
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

export default heartbeatLoader