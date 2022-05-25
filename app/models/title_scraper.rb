require 'open-uri'

class TitleScraper
  attr_reader :url, :html, :parsed_html, :title

  def initialize(url)
    @url = url

    open_uri
    parse_html
    @title = get_title
  end

  def open_uri
    @html = URI.open(url)
  end

  def parse_html
    @parsed_html = Nokogiri::HTML.parse(html)
  end

  def get_title
    parsed_html.css('title').map { |element| element.text }
  end
end

# new = TitleScraper.new('url)
# new.title
