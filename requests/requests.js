async function get(url, variable) {
    const response = await fetch(url);
    setGlobal(variable, await response.text());
    exit();
}

async function post(url, headers, body, variable) {
    const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    });
    setGlobal(variable, await response.text());
    exit();
}
