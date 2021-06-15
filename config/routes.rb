Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'saved_group_tiles/index'
      get 'saved_group_tiles/show'
      get 'saved_group_tiles/create'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'saved_group_notes/index'
      get 'saved_group_notes/show'
      get 'saved_group_notes/create'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'saved_groups/index'
      get 'saved_groups/show'
      get 'saved_groups/create'
    end
  end
  get 'saved_groups/index'
  get 'saved_groups/show'
  get 'saved_groups/create'
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
        resources :saved_groups, only: [ :index, :show, :create ] do
          resources :saved_group_notes, only: [ :index, :show, :create ]
          resources :saved_group_tiles, only: [ :index, :show, :create ]
        end
      end
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
