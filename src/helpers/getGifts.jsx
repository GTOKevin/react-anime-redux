
export const getGifts = async (nombre,cantidad) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(nombre)}&limit=${cantidad}&api_key=zFWOiBDfc8j7S11PnTcIcd5BMlobz38c`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const res = data.map(r=>({
        id:r.id,
        title:r.title,
        body : r.slug,
        image : r.images.downsized_medium.url
    })
    )

    return res;
}
