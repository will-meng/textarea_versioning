class Api::ProposalsController < ApplicationController

  def index
    @proposals = Proposal.all
    render :index
  end

  def show
    
  end

  def create
    @proposal = Proposal.new(proposal_params)
    @proposal.author_id = 1
    if @proposal.save
      render :create
    else
      render json: @proposal.errors.full_messages, status: 422
    end
  end

  def update
  end

  private

  def proposal_params
    params.require(:proposal).permit(:title, :description)
  end
end
