class ArticlesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  # GET /articles
  def index
    articles = Article.all

    render json: articles

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
        if mediumArticleInfo
          article.title = mediumArticleInfo.title
          article.text = mediumArticleInfo.text
          article.image = mediumArticleInfo.image
        elsif newYorkerArticleInfo
          article.title = basicInfo.title.split(' | ')[0]
          article.text = newYorkerArticleInfo.text
          article.image = newYorkerArticleInfo.image
        else
          article.title = basicInfo.title
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
      :title,
      :text,
      :image,
      :url,
      :source,
      :read_by_date,
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
