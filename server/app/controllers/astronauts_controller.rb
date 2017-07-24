class AstronautsController < ApplicationController
  before_action :set_astronaut, only: [:show, :update, :destroy]

  # GET /astronauts
  def index
    @astronauts = Astronaut.all

    render json: @astronauts
  end

  # GET /astronauts/1
  def show
    render json: @astronaut
  end

  # POST /astronauts
  def create
    @astronaut = Astronaut.new(astronaut_params)

    if @astronaut.save
      render json: @astronaut, status: :created, location: @astronaut
    else
      render json: @astronaut.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /astronauts/1
  def update
    if @astronaut.update(astronaut_params)
      render json: @astronaut
    else
      render json: @astronaut.errors, status: :unprocessable_entity
    end
  end

  # DELETE /astronauts/1
  def destroy
    @astronaut.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_astronaut
      @astronaut = Astronaut.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def astronaut_params
      params.require(:astronaut).permit(:firstname, :lastname, :birthdate, :superpower)
    end
end
