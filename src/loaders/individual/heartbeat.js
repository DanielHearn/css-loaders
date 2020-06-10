export default {
  name: 'Heartbeat',
  colour: '#9a40a9',
  code: {
    html: `<div class="heartbeatLoader">
    <div class="pulse"></div>
    <div class="pulse"></div>
  </div>`,
    css: `.heartbeatLoader {
  width: 4em;
  height: 4em;
  }
  .heartbeatLoader .pulse {
  width: 4em;
  height: 4em;
  border-radius: 50%;
  position: absolute;
  background-color: white;
  animation: heartbeatanim 1.2s ease-in-out infinite;
  transform: scale(0);
  outline: 1px solid transparent;
  }
  .heartbeatLoader .pulse:nth-child(2) {
  animation-delay: 0.22s;
  }
  
  @keyframes heartbeatanim {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
  }`,
    scss: `$heartbeatSize: 4em;
  $heartbeatTiming: 1.2s;
  .heartbeatLoader {
  width: $heartbeatSize;
  height: $heartbeatSize;
  .pulse {
    width: $heartbeatSize;
    height: $heartbeatSize;
    border-radius: 50%;
    position: absolute;
    background-color: white;
    animation: heartbeatanim $heartbeatTiming ease-in-out infinite;
    transform: scale(0);
    outline: 1px solid transparent;
    &:nth-child(2) {
      animation-delay: 0.22s;
    }
  }
  }
  @keyframes heartbeatanim {
  0% { transform: scale(0);}
  100% { transform: scale(1); opacity: 0;}
  }`
  }
}