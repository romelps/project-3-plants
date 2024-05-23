const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/plants`;

const index = async() => {
    const res = await fetch(BASE_URL);
    return res.json();
};
