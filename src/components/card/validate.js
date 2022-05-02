export const validate = (pokemons, isFav) => {
    let valid = { isValid: true, message: '' };
    if (pokemons.length >= 5 && !isFav) {
        valid = { isValid: false, message: "Somente é permitido favoritar no máximo 5 Pokémon" }
    }
    return valid;
}