// Available fields:
// "rank"
// "rank_last_week"
// "weeks_on_list"
// "asterisk" 
// "dagger" 
// "primary_isbn10" 
// "primary_isbn13" 
// "publisher"
// "description"
// "price"
// "title"
// "author"
// "contributor"
// "contributor_note"
// "book_image"
// "book_image_width"
// "book_image_height"
// "amazon_product_url"
// "age_group"
// "book_review_link"
// "first_chapter_link"
// "sunday_review_link"
// "article_chapter_link"
// "isbns"
// "buy_links"
// "book_uri"

const fieldsRequired = ['rank', 'rank_last_week', 'weeks_on_list', 'primary_isbn10', 'primary_isbn13', 'publisher', 'description', 'title', 'author', 'book_image', 'amazon_product_url', 'book_review_link']

export const pruneData = data => {
    const books = []

    data.forEach(obj => {
        const prop = {}
        fieldsRequired.forEach(field => {
            prop[field] = obj[field]
        })
        books.push(prop)
    })

    return books
}