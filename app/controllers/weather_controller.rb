require 'httparty'

class WeatherController < ApplicationController
  # GET weather with fixed lat/long
  def get_weather
    puts "#{ENV['OPEN_WEATHER_MAP_KEY']}"

    puts url =
           "https://api.openweathermap.org/data/3.0/onecall?lat=40.7128&lon=74.0060&exclude=minutely&appid=#{ENV['OPEN_WEATHER_MAP_KEY']}"

    response = HTTParty.get(url)
    puts response
    render json: response.body if response.code == 200
  end
end
