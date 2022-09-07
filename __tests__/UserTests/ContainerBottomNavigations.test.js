import { cleanup } from '@testing-library/react-native';
import { describe, expect, jest, it, afterEach } from '@jest/globals';

import {
    OpenPageAvaliation,
    OpenPageFavorites,
} from '../../src/screens/UserPerfil/components/ContainerBottom/helpers/titles';

describe('When click in See More button with button movies activated', () => {
    afterEach(cleanup);
    let activeButton = 0;
    let Navigation = {
        navigate: jest.fn(),
    };

    it('should navigation for screen see more favorites', () => {
        let lastCall = OpenPageFavorites(activeButton, Navigation);
        expect(lastCall).toStrictEqual(['Filmes favoritos de ', 2]);
    });
    it('should navigation for screen see more Avaliations', () => {
        let lastCall = OpenPageAvaliation(activeButton, Navigation);
        expect(lastCall).toStrictEqual([
            'Avaliações de filmes recentes de ',
            0,
        ]);
    });
});

describe('When click in See More button with button series activated', () => {
    afterEach(cleanup);
    let activeButton = 1;
    let Navigation = {
        navigate: jest.fn(),
    };

    it('should navigation for screen see more favorites', () => {
        let lastCall = OpenPageFavorites(activeButton, Navigation);
        expect(lastCall).toStrictEqual(['Séries favoritas de ', 3]);
    });
    it('should navigation for screen see more Avaliations', () => {
        let lastCall = OpenPageAvaliation(activeButton, Navigation);
        expect(lastCall).toStrictEqual([
            'Avaliações de séries recentes de ',
            1,
        ]);
    });
});
