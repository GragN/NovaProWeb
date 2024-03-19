export default class Popover {
  constructor(element) {
    this.element = element;

    this.popover = this.popover.bind(this);
    this.btn1 = this.element.querySelector(".btn1");
    this.btn1.addEventListener("click", this.popover);

    this.attention = this.attention.bind(this)
    this.btn2 = this.element.querySelector('.btn2')
    this.btn2.addEventListener("click", this.attention)

    globalThis.span1 = this.element.querySelector('.span1')
    globalThis.span2 = this.element.querySelector('.span2')
    globalThis.span3 = this.element.querySelector('.span3')

    globalThis.liquid = this.element.querySelector(".liquid")
    globalThis.counter = 0
    globalThis.interval = NaN
  }

  popover() {
    console.log('Кнопка работает')
    let mh = liquid.style.maxHeight = '200px'
    let toggle1 = 0
    span2.innerHTML = 'Подача воды: включена'
    if (counter == 0) {
      interval = setInterval(
        function() {
          counter += 10
          let h = liquid.style.height = `${counter}px`
          if (h == mh) {
            toggle1 = 1
            span1.innerHTML = 'Насос: включен'
          }
          if (toggle1 == 1) {
            counter -= 20
          }
          if (h == '0px') {
            toggle1 = 0
            span1.innerHTML = 'Насос: отключен'
          }
        }, 500
      )
    }
  }

  attention() {
    console.log('внимание')
    clearInterval(interval)
    span1.innerHTML = 'Насос: отключен'
    span2.innerHTML = 'Подача воды: отключена'
    span3.innerHTML = 'Исправность насоса: авария'
  }
}
