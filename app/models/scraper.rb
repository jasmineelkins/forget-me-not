require 'watir'
require 'webdrivers'
require 'nokogiri'
require 'open-uri'

class Scraper
  attr_reader :url, :browser, :text, :tag_name, :title, :image

  #   def initialize(url:)
  #     @tag_name = tag_name
  #     @url = url
  #     @browser = Watir::Browser.new(:chrome, headless: true)
  #     @browser.goto(url)
  #     parsed_page = Nokogiri.HTML(browser.html)

  #     File.open('parsed.txt', 'w') { |f| f.write "#{parsed_page}" }

  #     browser.close
  #   end

  # pw-post-title
  # pw-subtitle-paragraph
  # pw-post-body-paragraph

  def initialize(url:)
    @tag_name = tag_name
    @url = url
    @browser = Watir::Browser.new(:chrome, headless: true)
    @browser.goto(url)
    wait_until_element_exists(css_classes)
    @title = get_title(css_classes)
    @text = get_text(css_classes)
  end

  def wait_until_element_exists(css_classes)
    browser
      .element(class: css_classes, tag_name: tag_name)
      .wait_until(&:exists?)
  end

  def get_text(css_classes)
    browser
      .elements(class: css_classes, tag_name: tag_name)
      .map { |element| element.inner_text }
  end

  def close
    @browser.close
  end
end

# get article title
# test = WatirScraper.new(url: 'https://doctorow.medium.com/the-impossible-scam-of-us-drug-plans-5ab66b6
#     b017e', css_classes: 'pw-post-title', tag_name: 'h1')

# get article sub-title
# test = WatirScraper.new(url: 'https://doctorow.medium.com/the-impossible-scam-of-us-drug-plans-5ab66b6
#     b017e', css_classes: '# pw-subtitle-paragraph', tag_name: 'h2')

# get body paragraph text:
# test = WatirScraper.new(url: 'https://doctorow.medium.com/the-impossible-scam-of-us-drug-plans-5ab66b6
#     b017e', css_classes: 'pw-post-body-paragraph', tag_name: 'p')
