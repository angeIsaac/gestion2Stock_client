// Desc: Configuration for axios

export const config = {
    baseURL:process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-type": "application/json"
    },
    withCredentials: true,
    timeout: 1000,
    data: {}
};
