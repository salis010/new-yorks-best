import { pruneData } from './prune-data'

describe('Test prundeData', () => {

        const data = [{
            "rank": 3,
            "rank_last_week": 4,
            "weeks_on_list": 5,
            "asterisk": 4444444,
            "dagger": true, 
            "primary_isbn10": 1354345235432, 
            "primary_isbn13": 2453452354, 
            "publisher": 'zero',
            "description": 'a book',
            "price": 34,
            "title": 'Jester',
            "author": 'Mr Jest',
            "contributor": '',
            "contributor_note": 'welcome',
            "book_image": 'url',
            "book_image_width": 345,
            "book_image_height": 345,
            "amazon_product_url": 'url',
            "age_group": 30,
            "book_review_link": 'url',
            "first_chapter_link": 'url',
            "sunday_review_link": 'url',
            "article_chapter_link": 'url',
            "isbns": [23423423423, 34325345],
            "buy_links": ['url', 'url'],
            "book_uri": 'url',
        }]

        console.log(pruneData(data))
        test('returns only the properties specified in "fieldsRequired"', () => 
            expect((pruneData(data))).toEqual([{ 
                    "amazon_product_url": "url",
                    "author": "Mr Jest",
                    "book_image": "url",
                    "book_review_link": "url",
                    "description": "a book",
                    "primary_isbn10": 1354345235432,
                    "primary_isbn13": 2453452354,
                    "publisher": "zero",
                    "rank": 3,
                    "rank_last_week": 4,
                    "title": "Jester",
                    "weeks_on_list": 5,
            }])
        )
})

