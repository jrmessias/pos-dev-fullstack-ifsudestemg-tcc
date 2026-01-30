export const getInitials = (name) => {
    // Verifica se o nome é válido
    if (!name) return "";

    // 1. Remove espaços extras nas pontas
    // 2. Divide por qualquer espaço em branco (regex \s+ lida com espaços duplos)
    const names = name.trim().split(/\s+/);

    // CENÁRIO A: Se tiver apenas um nome (ex: "Israel")
    // Pega as duas primeiras letras
    if (names.length === 1) {
        return names[0].slice(0, 2).toUpperCase();
    }

    // CENÁRIO B: Se tiver mais de um nome (ex: "Israel Messias Junior")
    // Pega a inicial do PRIMEIRO nome
    const firstInitial = names[0][0];

    // Pega a inicial do ÚLTIMO nome (Padrão de UX para Avatars) -> Retorna "IJ"
    // const secondInitial = names[names.length - 1][0];

    // NOTA: Se você quiser estritamente a inicial do SEGUNDO nome (Retornar "IM"), use:
    const secondInitial = names[1][0];

    return (firstInitial + secondInitial).toUpperCase();
};
