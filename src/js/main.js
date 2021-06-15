$('body').on('click', '.trigger', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).next().slideToggle();
})