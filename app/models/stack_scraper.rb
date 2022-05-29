class MediumScraper
  attr_reader :url, :browser, :headline, :text, :image

  def initialize(url:)
    @url = url
    @browser = Watir::Browser.new(:chrome, headless: true)
    @browser.goto(url)
    wait_until_element_exists

    @headline = @text = @image = get_image_url

    close
  end

  def wait_until_element_exists
    browser.element(class: '').wait_until(&:exists?)
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
