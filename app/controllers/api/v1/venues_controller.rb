class Api::V1::VenuesController < ApplicationController

  #GET api/v1/screens
  def index
    records = Dir.glob("#{Rails.root}/public/venues/**.json")
    render :json => records
  end

  #GET api/v1/screens/:id
  def show
    data = File.read("#{Rails.root}/public/venues/#{params[:id]}.json")
    render :json => data
  end
end
