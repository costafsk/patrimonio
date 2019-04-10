import $ from '../../../node_modules/jquery/dist/jquery';

module.exports = {
    dashboard: () => {
        $(() => {
            // Height 100% -> Aside / Sidebar
            $('aside').innerHeight(`${$(document).innerHeight()}px`);
            // click animations [navbar]
            $('#hamburguer').click(() => {
                $('')
            });
        });
    }
}