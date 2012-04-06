$(document).ready(function() {
    var options = new Array();

    options['\\a'] = 'The ASCII bell character (you can also type \007)';
    options['\\d'] = 'Date in "Wed Sep 06" format';
    options['\\e'] = 'ASCII escape character (you can also type \033)';
    options['\\h'] = 'First part of hostname (such as "mybox")';
    options['\\H'] = 'Full hostname (such as "mybox.mydomain.com")';
    options['\\j'] = 'The number of processes you\'ve suspended in this ' +
                    'shell by hitting ^Z';
    options['\\l'] = 'The name of the shell\'s terminal device (such as ' +
                    '"ttyp4")';
    options['\\n'] = 'Newline';
    options['\\r'] = 'Carriage return';
    options['\\s'] = 'The name of the shell executable (such as "bash")';
    options['\\t'] = 'Time in 24-hour format (such as "23:01:01")';
    options['\\T'] = 'Time in 12-hour format (such as "11:01:01")';
    options['\\@'] = 'Time in 12-hour format with am/pm';
    options['\\u'] = 'Your username';
    options['\\v'] = 'Version of bash (such as 2.04)';
    options['\\V'] = 'Bash version, including patchlevel';
    options['\\w'] = 'Current working directory (such as "/home/drobbins")';
    options['\\W'] = 'The "basename" of the current working directory (such ' +
                    'as drobbins")';
    options['\\!'] = 'Current command\'s position in the history buffer';
    options['\\#'] = 'Command number (this will count up at each prompt, as ' +
                    'long as you type something)';


    html = '<h2>Load it up</h2>' +
           '<select name="options" class="options">';

    for (var option in options) {
        html += '<option value="' + option + '">' + options[option] +
                '</option>';
    }
    html += '</select>';

    var first_child = $('#steps li:first-child');
    $('#steps li:first-child').append(html);
});
