$(document).ready(function() {
    var options = new Array();

    options['bell'] = {'code': '\\a',
                       'help': 'The ASCII bell character'};
    options['date'] = {'code': '\\d', 'help': 'Wed Sep 06 format'};
    options['short_hostname'] = {'code': '\\h',
                                 'help': 'First part of hostname ex: mybox'};
    options['long_hostname'] = {'code': '\\H',
                                'help': 'Full hostname ex: mybox.mydomain.com'};
    options['processes'] = {'code': '\\j',
                            'help': 'The number of processes you\'ve ' + 
                                    'suspended in this shell by hitting ^Z'};
    options['term'] = {'code': '\\l',
                       'help': 'The name of the shell\'s terminal device ' +
                               'ex: ttyp4'};
    options['newline'] = {'code': '\\n', 'help': 'Newline'};
    options['return'] = {'code': '\\r', 'help': 'Carriage return'};

    options['shell_name'] = {'code': '\\s',
                             'help': 'The name of the shell executable ex: bash'};
    options['24_hour_military'] = {'code': '\\t',
                                   'help': 'Time in 24-hour format ex: 23:01:01'};
    options['12_hour'] = {'code': '\\T',
                          'help': 'Time in 12-hour format ex: 11:01:01'};
    options['12_hour_std'] = {'code': '\\@',
                              'help': 'Time in 12-hour format with am/pm'};
    options['username'] = {'code': '\\u', 'help': 'Username'};
    options['shell_version'] = {'code': '\\v',
                                'help': 'Version of bash ex: 2.04'};
    options['shell_patchlevel'] = {'code': '\\V',
                                   'help': 'Bash version, including patchlevel'};
    options['cwd'] = {'code': '\\w',
                      'help': 'Current working directory ex: /home/durden'};
    options['basename'] = {'code': '\\W',
                           'help': 'The basename of the current working ' +
                                   'directory ex: durden'};
    options['history_pos'] = {'code': '\\!',
                              'help': 'Current command\'s position in the ' +
                                      'history buffer'};

    options['cmd_num'] = {'code': '\\#',
                          'help': 'Command number (this will count up at ' +
                                  'each prompt, as long as you type something)'};

    function compile_prompt() {
        var text_prompt = '';
        $('#sortable').children().each(function() {
            var option = $(this).children().first().attr('name');
            text_prompt += options[option]['code'];
        });

        $('#prompt-input').val(text_prompt);
        $('#prompt').show();

        var export_text = 'export PS1="' + text_prompt + '"';

        /* Remove any just in case user hit submit twice */
        $('.add-on').children('.clippy').remove();
        $('.add-on').append('<span class="clippy">' + export_text + '</span>');
        $('.clippy').clippy();
    }

    function color_step() {
        colors = new Array('ffffff', '963400', '986536', '646809', '036400',
                        '34696d', '00009b', '303498', '000000');
        var ii = 0;

        $('#sortable').children().each(function() {
            color_html = '<span id="color' + ii + '" class="pull-right">' +
                            '<label>' +
                                '<select name="colour">';

            for (var color in colors) {
                color_html += '<option value="' + colors[color] + '">#' +
                                colors[color] + '</option>';
            }

            color_html += '</select></label></span>';
            $(this).children('a').first().append(color_html);
            ii++;
        });

        $('select[name="colour"]').colourPicker({
            ico: 'img/jquery.colourPicker.gif',
            title: false
        });
     }

    function order_step() {
        var html = '';
        if ($('input:checked').length > 0) {
            $('.form-actions').show();
            $('#order-options').show();
        } else {
            $('.form-actions').hide();
            $('#order-options').hide();
        }

        $("input:checked").each(function() {
            var option = $(this).attr('name');
            html += '<li class="ui-state-default"><a href="#" title="' +
                    options[option]['help'] + '" name="' + option + '">' +
                    option + '</a></li>';
        });

        $('#sortable').html(html);

        /* Drag/drop sorting */
        $("#sortable").sortable({
            revert: true
        });
        $("#draggable").draggable({
            connectToSortable: "#sortable",
            helper: "clone",
            revert: "invalid"
        });
        $("ul, li").disableSelection();
    };

    /* START */
    html = '<h2>Load it up</h2><div class="control-group">' +
           '<div class="controls">';

    for (var option in options) {
        html += '<label class="control-label checkbox" title="' +
                options[option]['help'] + '"> <input type="checkbox" name="' +
                option + '" class="chkbox"/>' + option + '</label>';
    }

    html += '</div></div>';

    var selection_li = $('#pick-options');
    selection_li.append(html);

    $('input').live('change', function() {
        order_step();
    });

    $('label[title]').tooltip();
    $('span[title]').tooltip();

    /* Only show the prompt/controls when we've successfully built it up */
    $('#prompt').hide();
    $(".form-actions").hide();
    $("#order-options").hide();

    $('#button').click(function() {
        $('a[title]').tooltip();
        compile_prompt();
        // Not fully implemented yet...
        //color_step();
    });
});
