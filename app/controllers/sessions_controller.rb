class SessionsController < ApplicationController


  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      sign_in(user)
      redirect_back_or user_path(user)
    else
      render 'new'
    end
  end

  def destroy
    sign_out
    redirect_to root_path
  end
  
   private
    # Use callbacks to share common setup or constraints between actions.
    def set_session
      @session = Session.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def session_params
      params.require(:session).permit(:session_id, :data)
    end

end