Rails.application.routes.draw do
  resources :places
  devise_for :users
  root 'page#index'
end
