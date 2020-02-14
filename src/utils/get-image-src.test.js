import { getImgSrc } from './get-image-src'

describe('Test getImgSrc', () => {

        test('no change in ranking from previous week', () =>
                expect(getImgSrc(7, 7)).toBe(false)
            )
        
        test('new entrant to the list (did not rank last week)', () =>
            expect(getImgSrc(7, 0)).toBe('arrow-up.png')
        )

        test('ranking better than previous week', () =>
            expect(getImgSrc(6, 7)).toBe('arrow-up.png')
        )

        test('ranking worse than previous week', () =>
            expect(getImgSrc(7, 6)).toBe('arrow-down.png')
        )

        test('any other values', () =>
            expect(getImgSrc()).toBe(false)
        )

    }
)
