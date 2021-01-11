class CarsController < ApplicationController
  before_action :set_car, only: [:show]

  def index
    cars = Car.all
    render json: cars
  end

  def show
    render json: @car
  end

  private

  def set_car
    @car = Car.find_by_id(params[:id])
  end

end
