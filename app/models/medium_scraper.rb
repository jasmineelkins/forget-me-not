class MediumScraper
  attr_reader :url, :browser, :headline, :text, :image

  def initialize(url:)
    @url = url
    @browser = Watir::Browser.new(:chrome, headless: true)
    @browser.goto(url)
    wait_until_element_exists

    @headline = get_text('pw-post-title')[0]
    @text = get_text('pw-post-body-paragraph').join(' ')
    @image = get_image_url

    close
  end

  def wait_until_element_exists
    browser
      .element(class: 'pw-post-title', tag_name: 'h1')
      .wait_until(&:exists?)
  end

  def get_text(css_classes)
    browser.elements(class: css_classes).map { |element| element.inner_text }
  end

  def get_image_url
    browser.image(tag_name: 'img').src
  end

  def close
    @browser.close
  end
end

# get article headline
# test = WatirScraper.new(url: 'https://doctorow.medium.com/the-impossible-scam-of-us-drug-plans-5ab66b6
#     b017e', css_classes: 'pw-post-title', tag_name: 'h1')

# get article sub-title
# test = WatirScraper.new(url: 'https://doctorow.medium.com/the-impossible-scam-of-us-drug-plans-5ab66b6
#     b017e', css_classes: '# pw-subtitle-paragraph', tag_name: 'h2')

# get body paragraph text:
# test = WatirScraper.new(url: 'https://doctorow.medium.com/the-impossible-scam-of-us-drug-plans-5ab66b6
#     b017e', css_classes: 'pw-post-body-paragraph', tag_name: 'p')
