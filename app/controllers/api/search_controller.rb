class Api::SearchController < ApplicationController
  def index
    render :index
  end

  def search
    query = JSON.parse(params[:query])
    
    @res = Business.text_search(query)
    render :index
  end

  private
  def search_params
    params.require(:query).permit(:keyword, :near, :filters)
  end
end
