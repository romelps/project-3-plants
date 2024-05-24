import { renderToStaticMarkup } from "react-dom/server";

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
        const res = await fetch(BASE_URL, {
            method: 'POST', //specifies post request

            //JSON data so we attach a Content-Type header
            headers: {
                'Content-type':'application/json',
            },

            //formData is converted JSON and is sent as the body
            //received on the backend as req.body
            body: JSON.stringify(formData),
        });
        return renderToStaticMarkup.json();
    } catch(err){
        console.log('Caught error')
    }
}


export { index, create }

