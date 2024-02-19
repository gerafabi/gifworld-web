export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=YSj3XYfSy4348JoVnJtbnzPwTrte1Usb&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ( {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
        height: img.images.downsized_medium.height,
        width: img.images.downsized_medium.width,
    }))
    console.log("width",gifs[0].width);
    return gifs;
}