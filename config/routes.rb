Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'group_tiles/index'
      get 'group_tiles/show'
      get 'group_tiles/create'
    end
  end
  root to: 'pages#home'
  get '/activity', to: 'pages#home'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :groups, only: [ :index, :show, :create ] do
        resources :group_tiles, only: [ :index, :show, :create ]
      end
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
