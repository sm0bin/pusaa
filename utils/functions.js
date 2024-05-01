export const formatDate = (dateString) => {
    // const date = new Date(dateString);
    const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
};

export const arrayToChunk = (array, chunkSize) => {
    const result = [];

    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        result.push(chunk);
    }

    return result;
}