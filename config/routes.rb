Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resource :session, only: %i[create destroy]
    resources :users, only: %i[create]
    resources :proposals, except: %i[new, edit, destroy]
  end
end
