// import { renderToStaticMarkup } from "react-dom/server";
const BASE_URL = `http://3.141.46.99:3015/plants`;
// const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/plants`;

const index = async() => {
    try{
        console.log(BASE_URL);
        const res = await fetch(BASE_URL);
        return res.json();
    } catch(err) {
        console.log(err)
    }
};

const deletePlant = async (id) => {
    try {
        const deletedPlant = await fetch(`http://3.141.46.99:3015/plants//${id}`, {
            method: 'DELETE',
        });
        
        return deletedPlant.json();
    } catch(err) {
        console.log(err)
    }
}


const create = async (plant) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST', //specifies post request

            //JSON data so we attach a Content-Type header
            headers: {
                'Content-type':'application/json',
            },

            //formData is converted JSON and is sent as the body
            //received on the backend as req.body
            body: JSON.stringify(plant),
        });
        return res.json();
    } catch(err){
        console.log('Caught error', err)
    }
}

const update = async (plant, id) => {
    try {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(plant),
        });
        return res.json();
    } catch (err) {
        console.log(err);
    }
};

//for button onClick in index showcards to show the single card upon clicking
// const showfetch = async (id) => {
//     try {
//         const res = await fetch(`${BASE_URL}/${id}`);
//         return res.json();
//     } catch(err) {
//         console.log(err)
//     }
// }



export { index, create, deletePlant, update }
