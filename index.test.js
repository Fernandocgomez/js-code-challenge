const { getAllMovies, getMovieById, getMovieAvgReviewRate } = require(".");
const db = require("./db");

describe('getAllMovies()', () => {
    it('should return an array with all the movies on the database.', () => {
        const returnValue = getAllMovies(db);

        expect(returnValue).toBe(db);
    });
});

describe('getMovieById()', () => {
    it('should return a movie based on the id passed as second parameter.', () => {
        const returnValue = getMovieById(db, "000000x02");
        const expectReturnValue = {
            id: "000000x02",
            title: "Spider-Man",
            reviews: [
                {
                    id: "100000x04",
                    rate: 4.1
                },
                {
                    id: "100000x05",
                    rate: 2.0
                },
                {
                    id: "100000x06",
                    rate: 3.2
                },
                {
                    id: "100000x07",
                    rate: 5.0
                }
            ]
        };

        expect(returnValue).toStrictEqual(expectReturnValue);
    });
});

describe('getMovieAvgReviewRate()', () => {
    it('should return the total average review rate', () => {
        const returnValue = getMovieAvgReviewRate(db, "000000x01");
        const expectedValue = 3.8333333333333335;

        expect(returnValue).toBe(expectedValue);

    });
});