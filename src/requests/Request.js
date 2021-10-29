const baseUrl = '';
const requestValidator = (data) => {
    if (data) {
        if (data.status === 200) {
            if (data.data.status === true) {
                return data.data.data;
            }
            else {
                console.log(`status: ${data.status}`);
            }
        }
        else {
            console.log(`status: ${data.data.status}`);
        }
    }
    else {
        console.log('Request Failed');
    }
}
const getRequest = async (uri) => {
    const req = await fetch(baseUrl + uri);
    const res = await req.json(req);
    return requestValidator(await res);
}

const postRequest = async (uri, body) => {
    const req = await fetch(baseUrl + uri, {
        method: 'POST',
        body: body
    })
    const res = req.json();
    return requestValidator(await res);
}

export { getRequest, postRequest }
