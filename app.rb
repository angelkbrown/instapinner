require "rubygems"
gem "sinatra", "=1.2.3"
require "sinatra"
require "instagram"
require "haml"
enable :sessions

Instagram.configure do |config|
  config.client_id = TODO_CONFIG_ID
  config.client_secret = TODO_CLIENT_SECRET
end

get "/?" do
	options = Hash.new
	options["count"] = 60
	options["max_id"] = params[:next_max_id] if !params[:next_max_id].nil?
	!params[:term].nil? ? @tag=params[:term] : @tag="gardens"
		
	result = Instagram.tag_recent_media(@tag, options)
	@next_max_id = result[:pagination][:next_max_id]
	@images = result[:data]
	
	haml :pin, :layout => (request.xhr? ? false : :layout)
end