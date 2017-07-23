class AstronautsController < ApplicationController
  before_action :set_astronaut, only: [:show, :edit, :update, :destroy]

  # GET /astronauts
  # GET /astronauts.json
  def index
    @astronauts = Astronaut.all
  end

  # GET /astronauts/1
  # GET /astronauts/1.json
  def show
  end

  # GET /astronauts/new
  def new
    @astronaut = Astronaut.new
  end

  # GET /astronauts/1/edit
  def edit
  end

  # POST /astronauts
  # POST /astronauts.json
  def create
    @astronaut = Astronaut.new(astronaut_params)

    respond_to do |format|
      if @astronaut.save
        # format.html { redirect_to @astronaut, notice: 'Astronaut was successfully created.' }
        format.json { render :show, status: :created, location: @astronaut }
      else
        # format.html { render :new }
        format.json { render json: @astronaut.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /astronauts/1
  # PATCH/PUT /astronauts/1.json
  def update
    respond_to do |format|
      if @astronaut.update(astronaut_params)
        # format.html { redirect_to @astronaut, notice: 'Astronaut was successfully updated.' }
        format.json { render :show, status: :ok, location: @astronaut }
      else
        # format.html { render :edit }
        format.json { render json: @astronaut.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /astronauts/1
  # DELETE /astronauts/1.json
  def destroy
    @astronaut.destroy
    respond_to do |format|
      # format.html { redirect_to astronauts_url, notice: 'Astronaut was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_astronaut
      @astronaut = Astronaut.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def astronaut_params
      params.require(:astronaut).permit(:firstname, :lastname, :birthdate, :superpower)
    end
end
