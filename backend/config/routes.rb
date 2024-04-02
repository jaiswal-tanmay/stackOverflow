Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users, except: [:new, :put]
      resources :posts, except: [:new, :put]
      resources :answers, except: [:new, :put]
      resources :post_votes, except: [:new, :put]
      resources :ans_votes, except: [:new, :put]

      resources :sessions, only: [:create]

      get 'manage-users', to: 'users#manage_users', as: 'manage_users'
    end
  end
end


# root 'posts#index'

# Catch-all route for SPA
# get '*path', to: 'posts#index', via: :all

# get "up" => "rails/health#show", as: :rails_health_check
