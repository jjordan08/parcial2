
class PhotoGallery{
    constructor(){
        this.API_KEY = '563492ad6f91700001000001e872548da81f42078fca892846b7de21';
        this.galleryDIv = document.querySelector('.gallery');
        this.searchForm = document.querySelector('.header form');
        this.loadMore = document.querySelector('.load-more');
        this.eventHandle();
    }
    eventHandle()
    {
        document.addEventListener('DOMContentLoaded', () => {
            this.getImg();
        });
    }
    async getImg() {
        const baseURL = 'https://api.pexels.com/v1/curated?per_page=1';
        const response = await fetch(baseURL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Autorization: this.API_KEY
            }
        });
        const dat = await response.json();
        console.log(data)
    }
}

const gallery = new PhotoGallery();