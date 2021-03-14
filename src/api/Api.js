
export const getLanch = () => {
    const url = 'https://api.spacexdata.com/v3/launches?limit=100'

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log("ERROR:", error));
};