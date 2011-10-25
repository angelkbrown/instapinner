require "rubygems"
gem "sinatra", "=1.2.3"
require "sinatra"
require "instagram"
require "haml"
enable :sessions

get "/" do
	haml :search
end

post "/search?" do
	@options=Hash.new
	@options["count"]=60
	@result= Instagram.tag_recent_media(params[:term],@options)
	@next_max_id=@result[:pagination][:next_max_id]
	@images=@result[:data]
	@tag=params[:term]	
	haml :pin
end

get "/more?" do
	@options=Hash.new
	@options["max_id"]=params[:next_max_id]
	@options["count"]=60
	@tag=params[:tag]
	@result= Instagram.tag_recent_media(@tag,@options)	
	@images=@result[:data]
	@next_max_id=@result[:pagination][:next_max_id]	
	haml :pin, :layout => (request.xhr? ? false : :layout)
end

#get "/pin?" do
#	@src=params[:src]
#	haml :pin
#end