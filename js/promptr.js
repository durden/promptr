$(document).ready(function() {
    $('#button').click(function() {
        var html = '<ul id="sortable" class="nav nav-tabs nav-stacked">';
        $("input:checked").each(function() {
            var option = $(this).attr('name');
            html += '<li class="ui-state-default"><a href="#" title="' +
                    options[option]['help'] + '">' + option + '</a></li>';
        });

        html += '</ul>';
        $('#steps li:first-child').replaceWith(html);

        /* Drag/drop sorting */
		$( "#sortable" ).sortable({
			revert: true
		});
		$( "#draggable" ).draggable({
			connectToSortable: "#sortable",
			helper: "clone",
			revert: "invalid"
		});
		$( "ul, li" ).disableSelection();
        $(this).text('Color \'em');
        $('a[title]').tooltip();
   });

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

    html = '<h2>Load it up</h2><div class="control-group">' +
           '<div class="controls">';

    for (var option in options) {
        html += '<label class="control-label checkbox" title="' + options[option]['help'] +
                '"> <input type="checkbox" name="' + option + 
                        '" class="chkbox"/>' + option +
                '</label>';
    }

    html += '</div></div>';

    var first_child = $('#steps li:first-child');
    $('#steps li:first-child').append(html);
    $('label[title]').tooltip();
});
