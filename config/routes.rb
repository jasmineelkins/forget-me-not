Rails.application.routes.draw do
  resources :newsletters do
    resources :articles
  end

  resources :articles

  resources :users do
    resources :articles
    resources :newsletters
  end

  # root 'main#index'
  # get '*path' => 'main#index'

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/send_test', to: 'users#send_test_email'
  get '/send_current_newsletter/:frequency',
      to: 'newsletters#send_current_newsletter'

  get '*path',
      to: 'application#fallback_index_html',
      constraints: ->(request) { !request.xhr? && request.format.html? }
end
