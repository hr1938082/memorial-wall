const baseUrl = 'http://104.248.174.124:5000/';
const requestValidator = (data) => {
    if (data) {
        if (data.status === true) {
            if (Object.keys(data).length > 1) {
                return data.data;
            }
            else {
                return data.status;
            }
        }
        else {
            console.log(`status: ${data.status}`);
        }
    }
    else {
        console.log('Request Failed');
    }
}
const getRequest = async (uri) => {
    const req = await fetch(`${baseUrl}${uri}`, {
        headers: {
            "Authorization": "f0e5c86b-4dd8-11ec-8f32-5c260a1f9235",
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    });
    const res = await req.json(req);
    return requestValidator(await res);
}

const postRequest = async (uri, body) => {
    const req = await fetch(baseUrl + uri, {
        headers: {
            "Authorization": "f0e5c86b-4dd8-11ec-8f32-5c260a1f9235",
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(body)
    })
    const res = req.json();
    return requestValidator(await res);
}

export { getRequest, postRequest }
