export const Title1Movies = 'Avaliações de filmes recentes de ';
export const Title2Movies = 'Filmes favoritos de ';
export const Title1Series = 'Avaliações de séries recentes de ';
export const Title2Series = 'Séries favoritas de ';

export const OpenPageAvaliation = (activeButton, Navigation) => {
    const title = activeButton === 0 ? Title1Movies : Title1Series;
    const typeButton = activeButton === 0 ? 0 : 1;
    Navigation.navigate('PageSeeMoreScreen', {
        Title: title,
        TypeButton: typeButton,
    });

    return [title, typeButton];
};

export const OpenPageFavorites = (activeButton, Navigation) => {
    const title = activeButton === 0 ? Title2Movies : Title2Series;
    const typeButton = activeButton === 0 ? 2 : 3;
    Navigation.navigate('PageSeeMoreScreen', {
        Title: title,
        TypeButton: typeButton,
    });

    return [title, typeButton];
};
