require "rubygems"
gem "sinatra", "=1.2.3"
require "sinatra"
require "instagram"
require "haml"
enable :sessions

Instagram.configure do |config|
  config.client_id = "608edd598bd24939a5ea469cb9c2e34c"
  config.client_secret = "757673aa3bcb45a5a7e1bbb3ff693a3b"
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