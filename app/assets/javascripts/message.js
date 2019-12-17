$(function(){

  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      last_message_id = $('.messages-box:last').data("id");

      $.ajax({
        url: "api/messages",
        type: 'GET',
        dataType: 'json',
        data: {id: last_message_id}
      })

      .done(function(messages) {
        var insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.messages').append(insertHTML);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      })
      .fail(function() {
        alert('error')
      });
    }
  };



  function buildHTML(message){
    if(message.image){
      var html = `<div class="messages-box" data-id=${message.id}>
                    <div class="messages-box__name">
                      ${message.user_name}
                    </div>
                    <div class="messages-box__day">
                      ${message.create}
                    </div>
                    <div class="messages-box__message">
                      <p class="messages-box__messagee__content">
                        ${message.content}
                      </p>
                      <img class="messages-box__message__image" src= ${message.image} alt="">
                    </div>
                  </div>`
    } else {
      var html = `<div class="messages-box" data-id=${message.id}>
                    <div class="messages-box__name">
                      ${message.user_name}
                    </div>
                    <div class="messages-box__day">
                      ${message.create}
                    </div>
                    <div class="messages-box__message">
                      <p class="messages-box__messagee__content">
                        ${message.content}
                      </p>
                    </div>
                  </div>`
    }
      return html;
  }
  $("#new_message").on('submit',function(e){
    e.preventDefault()

    var formData = new FormData(this);
    var url = $(this).attr('action');
    
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message);
      $('.messages').append(html)
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('form')[0].reset();
      $('.input-send').prop('disabled',false)
    })
    .fail(function(){
      alert('error');
    })
  });
  setInterval(reloadMessages, 4000);
});


