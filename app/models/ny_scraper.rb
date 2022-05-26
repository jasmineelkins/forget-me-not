class NyScraper
  attr_reader :url, :browser, :title, :text, :image

  def initialize(url:)
    @url = url
    @browser = Watir::Browser.new(:chrome, headless: true)
    @browser.goto(url)

    wait_until_element_exists

    @text = get_text('has-dropcap').join(' ')
    @image = get_image_url

    close
  end

  def wait_until_element_exists
    browser
      .element(class: 'BaseWrap-sc-TURhJ', tag_name: 'h1')
      .wait_until(&:exists?)
  end

  def get_text(css_classes)
    browser.elements(class: css_classes).map { |element| element.inner_text }
  end

  def get_image_url
    imageArray = browser.images(tag_name: 'img').map { |image| image.src }
    imageArray[3]
  end

  def close
    @browser.close
  end
end

# picture class='ResponsiveImagePicture' img class='ResponsiveImageContainer'

# to get title:
# new.get_text('BaseWrap-sc-TURhJ')[3]
# new.get_text('ContentHeaderDek-uqvGp')

# to get main image:
# imageArray = new.browser.images(tag_name: 'img').map { |image| image.src }
# imageArray[3]

# to get body text
# a.get_text('has-dropcap')
