const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/plants`;

const index = async() => {
    try{
        const res = await fetch(BASE_URL);
        return res.json();
    } catch(err) {
        console.log(err)
    }
};

const create = async (formData) => {
    try {
        const res = await fetch(BASE_URL)
    } catch(err){
        console.log('Caught error')
    }
}


export { index, create }

