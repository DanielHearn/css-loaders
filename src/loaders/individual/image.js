const imageLoader = {
  name: 'Image',
  key: 'image',
  link: 'https://codepen.io/danhearn/pen/PoXoxPa',
  color: '#4a79cf',
  code: {
    html: `<div class="imageLoader">
  <div class="imageLoader__landscape"></div>
  <div class="imageLoader__sun"></div>
</div>`,
    css: `.imageLoader {
  width: 150px;
  height: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 8px solid white;
  border-radius: 8px;
  overflow: hidden;
  animation: imageLoaderAnim 3s ease-in-out infinite;
  opacity: 0.9;
}
.imageLoader__landscape {
  position: absolute;
  rotate: 45deg;
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 8px;
  bottom: -58px;
  right: 0;
}
.imageLoader__sun {
  position: absolute;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  top: 22.2222222222px;
  left: 20px;
}

@keyframes imageLoaderAnim {
  0% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    transform: 0.9;
  }
}`,
    scss: `$imageLoaderSize: 100px;

.imageLoader {
  width: $imageLoaderSize * 1.5;
  height: $imageLoaderSize;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 8px solid white;
  border-radius: 8px;
  overflow: hidden;
  animation: imageLoaderAnim 3s ease-in-out infinite;
  opacity: 0.9;
  &__landscape {
    position: absolute;
    rotate: 45deg;
    width: $imageLoaderSize; 
    height: $imageLoaderSize;
    background: white;
    border-radius: 8px;
    bottom: -($imageLoaderSize / 2 + 8px);
    right: 0;
  }
  &__sun {
    position: absolute;
    width: $imageLoaderSize / 2.5; 
    height: $imageLoaderSize / 2.5;
    background: white;
    border-radius: 50%;
    top: $imageLoaderSize / 4.5;
    left: $imageLoaderSize / 5;
  }
}

@keyframes imageLoaderAnim {
  0% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    transform: 0.9;
  }
}`,
  },
}
export default imageLoader
