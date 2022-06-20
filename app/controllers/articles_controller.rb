class ArticlesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  # GET /articles
  def index
    puts params[:user_id]
    puts session[:user_id]

    puts params[:user_id] = session[:user_id]

    # CLEAN UP & ADD CORRECT ERROR RESPONSE
    if params[:user_id] == session[:user_id]
      articles = Article.where(user_id: params[:user_id])
      render json: articles
    else
      render json: { message: 'Not authorized' }
    end

    # render json: { message: 'Hello this is the server' }
  end

  # GET /articles/:id
  def show
    article = find_article
    render json: article
  end

  # POST /articles
  def create
    basicInfo = BasicScraper.new(url: params[:url])

    mediumArticleInfo = MediumScraper.new(url: params[:url]) if basicInfo
      .source === 'Medium'

    newYorkerArticleInfo = NyScraper.new(url: params[:url]) if basicInfo
      .source === 'The New Yorker'

    # debugger

    new_article =
      Article.create!(article_params) do |article|
        article.source = basicInfo.source

        if mediumArticleInfo
          article.headline = mediumArticleInfo.headline
          article.text = mediumArticleInfo.text
          article.image = mediumArticleInfo.image
        elsif newYorkerArticleInfo
          article.headline = basicInfo.headline.split(' | ')[0]
          article.text = newYorkerArticleInfo.text
          article.image = newYorkerArticleInfo.image
        else
          article.headline = basicInfo.headline
        end
      end
    render json: new_article, status: :created
  end

  # UPDATE /articles/:id
  def update
    article = find_article
    article.update!(article_params)
    render json: article
  end

  # DELETE /articles/:id
  def destroy
    article = find_article
    article.destroy
    render json: {}
  end

  private

  def article_params
    params.permit(
      :user_id,
      :newsletter_id,
      :headline,
      :text,
      :image,
      :url,
      :source,
      :length,
      :send_date,
      :priority,
      :completed,
    )
  end

  def find_article
    Article.find_by!(id: params[:id])
  end

  def render_invalid_response(invalid)
    render json: {
             errors: invalid.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
