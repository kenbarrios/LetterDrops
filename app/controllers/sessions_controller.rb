class SessionsController < ApplicationController

  def log_in_behavior
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/menu'
    else
      redirect_to '/'
    end
  end

  def log_out_behavior
    session[:user_id] = nil
    redirect_to '/'
  end
end
