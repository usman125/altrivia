window.WHEELOFFORTUNE = {

  cache: {},
  // declare var $: AnalyserNode;
  init: function (wrapper, values, valueToSelect, callbacks) {
    var _this = this;
    this.cache.callbacks = callbacks;
    this.cache.wheel = wrapper + ' .wheel';
    this.cache.wheelMarker = wrapper + ' .marker';
    this.cache.wheelSpinBtn = this.cache.wheelMarker;
    
    //mapping is backwards as wheel spins clockwise
    this.cache.wheelMapping = values.reverse();
    this.cache.valueToSelect = valueToSelect;
    // console.log("INIT CALLED:---", this.cache);

    $(document).on('click', this.cache.wheelSpinBtn,
      function (e) {
        e.preventDefault();
        if (!$(this).hasClass('disabled')) _this.spin();
      });

    this.resetSpin();
  },

  spin: function () {
    var _this = this;
    _this.cache.callbacks.onSpin();

    // reset wheel
    this.resetSpin();

    //disable spin button while in progress
    $(this.cache.wheelSpinBtn).addClass('disabled');

    var segment = 360 / _this.cache.wheelMapping.length,
      duration = 4000,
      minDegBesideSeparator = 10,
      rand, deg;

    if (_this.cache.valueToSelect) {
      var selectedIndex = _this.cache.wheelMapping.indexOf(_this.cache.valueToSelect);
      rand = segment * selectedIndex - segment / 2 + Math.max(1, Math.random() * segment);
    } else {
      rand = Math.round(Math.random() * 360);
    }

    deg = 360 * 15 + rand;

    // don't allow the marker to stop near segment separator
    console.log('got random degree: ' + deg);
    if ((deg - segment / 2) % segment < minDegBesideSeparator) {
      console.log('close to start');
      deg = deg - ((deg - segment / 2) % segment) + minDegBesideSeparator;
      console.log('modified degree to: ' + deg);
    } else if ((deg - segment / 2) % segment > segment - minDegBesideSeparator) {
      console.log('close to end');
      deg = deg - ((deg - segment / 2) % segment) + segment - minDegBesideSeparator;
      console.log('modified degree to: ' + deg);
    }

    _this.cache.wheelPos = deg;

    //transition queuing
    //ff bug with easeOutBack
    $(this.cache.wheel).transition({
      rotate: '0deg'
    }, 0)
      .transition({
        rotate: deg + 'deg'
      }, duration, 'easeOutCubic');

    //move marker
    // _this.cache.wheelMarker.transition({
    //   rotate: '-20deg'
    // }, 0, 'snap');

    //just before wheel finish
    // setTimeout(function() {
    //   //reset marker
    //   _this.cache.wheelMarker.transition({
    //     rotate: '0deg'
    //   }, 300, 'easeOutQuad');
    // }, duration - 500);

    //wheel finish
    setTimeout(function () {
      // did it win??!?!?!
      var spin = _this.cache.wheelPos,
        segment = 360 / _this.cache.wheelMapping.length,
        degrees = (spin + segment / 2) % 360,
        selected = Math.floor(degrees / segment),
        win = _this.cache.wheelMapping[selected];

      console.log('spin = ' + spin);
      console.log('segment = ' + segment);
      console.log('degrees = ' + degrees);
      console.log('selected = ' + selected);
      console.log('win = ' + win);

      setTimeout(function () {
        _this.cache.callbacks.onSelect(win);
      }, 500);

      setTimeout(_this.resetSpin, 2000);
    }, duration);

  },

  resetSpin: function () {
    var _this = this.WHEELOFFORTUNE ? this.WHEELOFFORTUNE : this;
    $(_this.cache.wheelSpinBtn).removeClass('disabled');
    $(_this.cache.wheel).transition({
      rotate: '0deg'
    }, 0);
    _this.cache.wheelPos = 0;
  }

}


// export default WHEELOFFORTUNE;