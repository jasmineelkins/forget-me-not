class WatirScrapersController < ApplicationController
  def create
    scraper = WatirScraper.run(params)
    @scrape = WatirScraper.find_or_create_by(scraper.data)
  end
end
