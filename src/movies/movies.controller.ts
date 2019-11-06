import { Controller, Get } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    data: Movie[] = [
        { id: '1', title: 'E.T.', rentalDays: 3, rentalPrice: 3.99 },
        { id: '2', title: 'HaraKiri', rentalDays: 2, rentalPrice: 1.99 },
    ];

    @Get()
    getAllMovies() {
        return ({ movies: this.data });
    }
}

interface Movie {
    id: string;
    title: string;
    rentalDays: number;
    rentalPrice: number;
}
