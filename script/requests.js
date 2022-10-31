const baseURL = 'https://m2-api-living.herokuapp.com/news'

async function getPosts (pageNumber) {

    try {

        const request = await fetch(baseURL + `?page=${pageNumber}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const response = await request.json()
        return response

    } catch (err) {
    }
}

export {
    getPosts
}