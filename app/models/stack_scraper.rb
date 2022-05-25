class MediumScraper
  attr_reader :url, :browser, :title, :text, :image

  def initialize(url:)
    @url = url
    @browser = Watir::Browser.new(:chrome, headless: true)
    @browser.goto(url)
    wait_until_element_exists

    @title = get_text('pw-post-title')[0]
    @text = get_text('pw-post-body-paragraph')[0]
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
