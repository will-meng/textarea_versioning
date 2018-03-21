class CreateProposals < ActiveRecord::Migration[5.1]
  def change
    create_table :proposals do |t|
      t.string :title, null: false
      t.text :description
      t.integer :author_id, null: false

      t.timestamps
    end

    add_index :proposals, :author_id
  end
end
