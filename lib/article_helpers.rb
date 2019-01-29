module ArticleHelpers
  def print_articles_by_category
    # get unique categories
    categories = []
    blog.articles.each do |article|
      if categories.index(article.data.category).nil?
        categories.push(article.data.category)
      end
    end

    # display everything in each category
    to_return = ""
    categories.each do |category|
      to_return << "<dl class=\"category-dropdown\">"
      to_return << "<dt>#{category}</dt><dd>"
      blog.articles.each do |article|
        if article.data.category == category
          to_return << link_to(article.data.title, "/#{article.path}")
        end
      end
      to_return << '</dd></dl>'
    end

    return to_return
  end
end
