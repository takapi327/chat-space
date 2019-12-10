json.id         @message.id
json.user_name  @message.user.name
json.create     @message.created_at.strftime("%Y/%m/%d %H:%M")
json.content    @message.content
json.image      @message.image.url