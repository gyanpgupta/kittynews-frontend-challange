module Types
  class ViewerType < Types::BaseObject
    field :id, ID, null: false
    field :username, String, null: false
  end
end

