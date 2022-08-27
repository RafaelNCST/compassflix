export const Title1Movies = 'Avaliações de filmes recentes de ';
export const Title2Movies = 'Filmes favoritos de ';
export const Title1Series = 'Avaliações de séries recentes de ';
export const Title2Series = 'Séries favoritas de ';

export const OpenPageAvaliation = (activeButton, Navigation) => {
    Navigation.navigate('PageSeeMoreScreen', {
        Title: activeButton === 0 ? Title1Movies : Title1Series,
        TypeButton: activeButton === 0 ? 0 : 1,
    });
};

export const OpenPageFavorites = (activeButton, Navigation) => {
    Navigation.navigate('PageSeeMoreScreen', {
        Title: activeButton === 0 ? Title2Movies : Title2Series,
        TypeButton: activeButton === 0 ? 2 : 3,
    });
};
