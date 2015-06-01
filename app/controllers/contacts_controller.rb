class ContactsController < ApplicationController
  before_action :set_contact, only: [:show, :edit, :update, :destroy]

  respond_to :json

  # GET /contacts
  # GET /contacts.json
  def index
    @contacts = Contact.all
  end

  # GET /contacts/1
  # GET /contacts/1.json
  def show
    respond_with(@contact)
  end

  # GET /contacts/new
  def new
    @contact = Contact.new
  end

  # GET /contacts/1/edit
  def edit
  end

  # POST /contacts
  # POST /contacts.json
  def create
    @contact = Contact.new(contact_params)

    respond_to do |format|
      if @contact.save
        format.html { redirect_to @contact, notice: 'Contact was successfully created.' }
        format.json { render action: 'show', status: :created, location: @contact }
      else
        format.html { render action: 'new' }
        format.json { render json: { entity: @contact, errors: @contact.errors_json }, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /contacts/1
  # PATCH/PUT /contacts/1.json
  def update
    @old_contact = @contact.dup
    # copy the id attribute, so the returned object doesn't default to a null id value
    # won't cause issues because @old_contact isn't persisted
    @old_contact.id = @contact.id
    respond_to do |format|
      if @contact.update(contact_params)
        format.html { redirect_to @contact, notice: 'Contact was successfully updated.' }
        format.json { render action: 'show', status: :ok, location: @contact }
      else
        format.html { render action: 'edit' }
        format.json { render json: { entity: @old_contact, errors: @contact.errors_json }, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /contacts/1
  # DELETE /contacts/1.json
  def destroy
    @contact.destroy
    respond_to do |format|
      format.html { redirect_to contacts_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_contact
      @contact = Contact.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def contact_params
      if parameters=params
        params = process_params(parameters, "contact")
      end
      params.require(:contact).permit(:first_name, :last_name, :phone_number)
    end
end
