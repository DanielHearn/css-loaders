const dualOrbitLoader = {
  name: 'Dual Orbit',
  key: 'dual_orbit',
  color: '#b6599b',
  code: {
    html: `<div class="dualOrbitLoader">
  <div class="dualOrbitLoader__circle"></div>
  <div class="dualOrbitLoader__orbit"></div>
  <div class="dualOrbitLoader__orbit2">
    <div class="dualOrbitLoader__orbit"></div>
  </div>
</div>`,
    css: `.dualOrbitLoader {
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dualOrbitLoader__circle {
  width: 3em;
  height: 3em;
  background-color: #fefefe;
  border-radius: 3em;
}
.dualOrbitLoader__orbit {
  position: absolute;
  width: 1.5em;
  height: 1.5em;
  background-color: #fefefe;
  border-radius: 3em;
  animation: 2s dualOrbitLoaderanim infinite linear;
}
.dualOrbitLoader__orbit2 {
  position: absolute;
  width: 1.5em;
  height: 1.5em;
  transform: rotate(180deg);
}

@keyframes dualOrbitLoaderanim {
  from {
    transform: rotate(0deg) translate(-3em) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translate(-3em) rotate(-360deg);
  }
}`,
      scss: `$dualOrbitLoaderSize: 3em;
$dualOrbitLoaderColor: #fefefe;

.dualOrbitLoader {
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &__circle {
    width: $dualOrbitLoaderSize;
    height: $dualOrbitLoaderSize;
    background-color: $dualOrbitLoaderColor;
    border-radius: $dualOrbitLoaderSize;
  }
  &__orbit {
    position: absolute;
    width: $dualOrbitLoaderSize / 2;
    height: $dualOrbitLoaderSize / 2;
    background-color: $dualOrbitLoaderColor;
    border-radius: $dualOrbitLoaderSize;
    animation: 2s dualOrbitLoaderanim infinite linear;
    &2 {
      position: absolute;
      width: $loaderSize / 2;
      height: $loaderSize / 2;#
      transform: rotate(180deg);
    }
  }
}

@keyframes dualOrbitLoaderanim {
  from {
    transform: rotate(0deg) translate(-$dualOrbitLoaderSize) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translate(-$dualOrbitLoaderSize) rotate(-360deg);
  }
}`
  }
}
export default dualOrbitLoader