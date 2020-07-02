Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    get '/businesses/search/:query', to: 'businesses#search'
    get '/businesses/live_search/:query', to: 'businesses#live_search'
    resources :users, only: [:show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:index, :show, :create, :update] do
      resources :reviews, only: [:index]
    end
    resources :reviews, only: [:show, :create, :update, :destroy]
  end
end
