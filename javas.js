const display=document.getElementsByClassName('cbody');


// const api=`AIzaSyB_qpNS-rBiHxRKZteLiY_Xp4ZLVJA21r8`
// const search=`search.innerHtml`
// const endpoint=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&key=${api}`



async function loading() {
    const api=`AIzaSyA9KCKKSGpn2ucrPaakeOyh6vieBh2Ae0s`
    const search="surfing";
    const url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&key=${api}`
    // const url=`endpoint`
    const response = await fetch(url);
    const data = await response.json();
    video_data.channelThumbnail=data.items[0].snippet.thumbnails.default.url;
    displayed(data);
}

// mode:no-cors

const displayed=(data)=>{
    
    
    display.innerHTML+=
            `<div class="card">
            <img src="${data.snippet.thumbnails.default.url}" alt="video-thumbnail" class="imgs">
            <div class="${data.snippet.thumbnails.default.url}">
               
            <img src="${data.snippet.thumbnails.default.url}" alt="channel">
            <p>${data.items.snippet.thumbnails.title}</p>
            </div>
            
        
        <div class="info">
        <p class="n">${data.snippet.thumbnails.default.url}</p>
        <p>${data.snippet.thumbnails.default.url}</p>
        <p>${data.snippet.thumbnails.default.url}</p>
        </div>
        
        </div>
            `.join('');
            
    
}
loading();










