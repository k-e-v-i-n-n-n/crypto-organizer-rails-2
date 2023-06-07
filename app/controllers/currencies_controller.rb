class CurrenciesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable



    def create
       user = User.find_by(id: session[:user_id])
       currency = user.currencies.create(currency_params)
       render json: currency, status: :created
    end

    def update
        currency = Currency.find(params[:id])
        currency.update!(currency_params)
        render json: currency, status: :ok
    end

    def destroy
        currency = Currency.find(params[:id])
        currency.delete
        head :no_content
    end

    private
    
    def currency_params
        params.permit(:category, :price, :rank, :day_change)
    end

    def unprocessable(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def not_found
        render json: {errors: user.errors.full_messages}, status: :not_found
    end

    def authorize
        render json: {errors: "Request not authorized, please login"}, status: :unauthorized unless session.include? :user_id
    end
end
