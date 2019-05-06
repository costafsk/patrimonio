$(() => {
    const input = $('.input-pass');
    const eyes = $('.eyes');
    eyes.click(() => {
        if (input.attr('type') === 'text') {
            input.attr('type', 'password');
            eyes.attr('class', 'fas fa-eye-slash eyes mb-3 ml-1');
        } else {
            input.attr('type', 'text');
            eyes.attr('class', 'fas fa-eye eyes mb-3 ml-1');
        }
    });
});