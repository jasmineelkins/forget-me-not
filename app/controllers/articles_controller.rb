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
    title =
      WatirScraper.new(
        url: params[:url],
        css_classes: 'pw-post-title',
        tag_name: 'h1',
      )

    # debugger

    new_article =
      Article.create!(article_params) do |article|
        article.title = title.text[0]
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

  # do something with scraped data
  # def scrape
  #   WatirScraper.new(data as params)
  # end

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
