class SnowdataController < ApplicationController
  before_action :set_snowdatum, only: [:show, :edit, :update, :destroy]

  # GET /snowdata
  # GET /snowdata.json
  def index
    @snowdata = Snowdatum.all
  end

  # GET /snowdata/1
  # GET /snowdata/1.json
  def show
  end

  # GET /snowdata/new
  def new
    @snowdatum = Snowdatum.new
  end

  # GET /snowdata/1/edit
  def edit
  end

  # POST /snowdata
  # POST /snowdata.json
  def create
    @snowdatum = Snowdatum.new(snowdatum_params)

    respond_to do |format|
      if @snowdatum.save
        format.html { redirect_to @snowdatum, notice: 'Snowdatum was successfully created.' }
        format.json { render :show, status: :created, location: @snowdatum }
      else
        format.html { render :new }
        format.json { render json: @snowdatum.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /snowdata/1
  # PATCH/PUT /snowdata/1.json
  def update
    respond_to do |format|
      if @snowdatum.update(snowdatum_params)
        format.html { redirect_to @snowdatum, notice: 'Snowdatum was successfully updated.' }
        format.json { render :show, status: :ok, location: @snowdatum }
      else
        format.html { render :edit }
        format.json { render json: @snowdatum.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /snowdata/1
  # DELETE /snowdata/1.json
  def destroy
    @snowdatum.destroy
    respond_to do |format|
      format.html { redirect_to snowdata_url, notice: 'Snowdatum was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_snowdatum
      @snowdatum = Snowdatum.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def snowdatum_params
      params.require(:snowdatum).permit(:snowfall, :snowdepth, :location, :zipcode, :date)
    end
end
