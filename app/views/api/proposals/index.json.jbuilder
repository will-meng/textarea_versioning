@proposals.each do |proposal|
  json.set! proposal.id do
    json.extract! proposal, :id, :title, :description, :author_id
  end
end