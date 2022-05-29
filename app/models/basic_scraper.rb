require 'open-uri'

class BasicScraper
  attr_reader :url, :html, :parsed_html, :headline, :source

  def initialize(url:)
    @url = url

    open_uri
    parse_html

    @headline = get_headline[0]
    @source = get_source
  end

  def open_uri
    @html = URI.open(url)
  end

  def parse_html
    @parsed_html = Nokogiri::HTML.parse(html)
  end

  def get_headline
    parsed_html.css('title').map { |element| element.text }
  end

  def get_source
    if parsed_html.css("meta[property='og:site_name']").present?
      source =
        parsed_html.css("meta[property='og:site_name']").first.attributes[
          'content'
        ].value
    end
  end
end

# new = SourceScraper.new('url)
# new.source
