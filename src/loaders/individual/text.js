const loader = {
  name: 'Text',
  key: 'text',
  link: 'https://codepen.io/danhearn/pen/PoXGmNe',
  color: '#af4e73',
  code: {
    html: `<div class="textLoader">
  <div class="textLoader__title"></div>
  <div class="textLoader__text"></div>
  <div class="textLoader__text"></div>
  <div class="textLoader__text"></div>
</div>`,
    css: `.textLoader {
  width: 150px;
  height: 100px;
  display: flex;
  flex-direction: column;
  animation: textLoaderAnim 2.5s ease-in-out infinite;
  opacity: 0.8;
  gap: 8px;
}
.textLoader__title {
  height: 33.3333333333px;
  width: 60%;
  background: white;
}
.textLoader__text {
  height: 20px;
  width: 100%;
  background: white;
}
.textLoader div {
  border-radius: 2px;
}

@keyframes textLoaderAnim {
  0% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    transform: 0.8;
  }
}`,
    scss: `$textLoaderSize: 100px;

.textLoader {
  width: $textLoaderSize * 1.5;
  height: $textLoaderSize;
  display: flex;
  flex-direction: column;
  animation: textLoaderAnim 2.5s ease-in-out infinite;
  opacity: 0.8;
  gap: 8px;
  &__title {
    height: $textLoaderSize / 3;
    width: 60%;
    background: white;
  }
  &__text {
    height: $textLoaderSize / 5;
    width: 100%;
    background: white;
  }
  div {
    border-radius: 2px;
  }
}

@keyframes textLoaderAnim {
  0% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    transform: 0.8;
  }
}`,
  },
}
export default loader
