const singleOrbitLoader = {
  name: 'Single Orbit',
  key: 'single_orbit',
  color: '#b6596c',
  code: {
    html: `<div class="singleOrbitLoader">
  <div class="singleOrbitLoader__circle"></div>
  <div class="singleOrbitLoader__orbit"></div>
</div>`,
    css: `.singleOrbitLoader {
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.singleOrbitLoader__circle {
  width: 3em;
  height: 3em;
  background-color: #fefefe;
  border-radius: 3em;
}
.singleOrbitLoader__orbit {
  position: absolute;
  width: 1.5em;
  height: 1.5em;
  background-color: #fefefe;
  border-radius: 3em;
  animation: 2s singleorbitloaderanim infinite linear;
}

@keyframes singleorbitloaderanim {
  from {
    transform: rotate(0deg) translate(-3em) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translate(-3em) rotate(-360deg);
  }
}`,
      scss: `$singleOrbitLoaderSize: 3em;
$singleOrbitLoaderColor: #fefefe;

.singleOrbitLoader {
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &__circle {
    width: $singleOrbitLoaderSize;
    height: $singleOrbitLoaderSize;
    background-color: $singleOrbitLoaderColor;
    border-radius: $singleOrbitLoaderSize;
  }
  &__orbit {
    position: absolute;
    width: $singleOrbitLoaderSize / 2;
    height: $singleOrbitLoaderSize / 2;
    background-color: $singleOrbitLoaderColor;
    border-radius: $singleOrbitLoaderSize;
    animation: 2s singleorbitloaderanim infinite linear;
  }
}

@keyframes singleorbitloaderanim {
  from {
    transform: rotate(0deg) translate(-$singleOrbitLoaderSize) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translate(-$singleOrbitLoaderSize) rotate(-360deg);
  }
}`
  }
}
export default singleOrbitLoader