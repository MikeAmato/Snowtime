class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  #renders the first layout and passes the front end over to angularJS
  def index
    render layout: layout_name
  end

  private

  def layout_name
      if params[:layout] == 0
          false
      else
         'application'
      end
  end
end
