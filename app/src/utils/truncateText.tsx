const truncateText = (text: string, maxLength: number | null | undefined) => {
    // Verifica se a string contém apenas espaços
    const trimmedText = text.trim();
    // Trunca o texto se necessário
    return maxLength 
        ? trimmedText.length > maxLength 
            ? `${trimmedText.substring(0, maxLength)}...` 
            : trimmedText 
        : '---';
};

export default truncateText;