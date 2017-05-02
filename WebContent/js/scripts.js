var response = ['Hi!','Sure!','c'];
var i=0;
(function () {
    var Message;
    Message = function (arg) {
        this.text = arg.text, this.message_side = arg.message_side;
        this.draw = function (_this) {
            return function () {
                var $message;
                $message = $($('.message_template').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
                $('.messages').append($message);
                return setTimeout(function () {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
    };
    $(function () {
        var getMessageText, message_side, sendMessage;
        message_side = 'left';
        getMessageText = function () {
            var $message_input;
            $message_input = $('.message_input');
            return $message_input.val();
        };
        sendMessage = function (text) {
            var $messages, message;
            if (text.trim() === '') {
                return;
            }
            $('.message_input').val('');
            $messages = $('.messages');
            message_side = message_side === 'left' ? 'right' : 'left';
            message = new Message({
                text: text,
                message_side: message_side
            });
            message.draw();
            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
        };
        $('.send_message').click(function (e) {
             sendMessage(getMessageText());
             setTimeout(function () {
             sendMessage(response[i]);
             i++;
        }, 2000);
             return;
        });
        $('.message_input').keyup(function (e) {
            if (e.which === 13) {
                sendMessage(getMessageText());
                setTimeout(function () {
             sendMessage(response[i]);
             i++;
        }, 2000);
                return;
            }
        });
        
        
    });
}.call(this));



function addComment(){
    var text = $('#commentId').val();
    var date = new Date();
    var date_string = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+", "+date.getHours()+":"+date.getMinutes();
    var temp = '<p style="color:#9D9D9D; font-size: 13px"> <b>Kate</b> wrote on '+ date_string +' <p>'+
                    '<p> '+text+'</p>'+
                    '<p></p>'
    $('#textPostHere').append(temp);
    $('#commentId').val('');
}