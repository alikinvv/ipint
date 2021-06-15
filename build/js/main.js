"use strict";

$('body').on('click', '.trigger', function (e) {
  $(e.currentTarget).toggleClass('active');
  $(e.currentTarget).next().slideToggle();
});