
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
        this.searchForm.addEventListener('submit',(e)=>{
            this.getSearchedImages(e);
        });
        this.loadMore.addEventListener('click',(e)=>{
            this.loadMore()
        })
    }
    async getImg() {
        const baseURL = 'https://api.pexels.com/v1/curated?per_page=12';
        const data = await this.fetchImages(baseURL);
        this.GenerateHTML(data.photos);
        console.log(data)
    }
    async fetchImages (baseURL){
        const response = await fetch(baseURL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Autorization: this.API_KEY
            }
        });
        const data = await response.json();
        console.log(data);
        return data;
    }
    GenerateHTML(photos){
        photos.forEach(photo=>{
            const item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `
            <a href="#">
                //lugar donde se encuentran las fotos en el json, ruta
                <img src="${photo.src.medium}">
                <h3>${photo.photographer} </h3>
            </a>`;
            this.galleryDIv.appendChild(item)
        })
    }
    async getSearchedImages(e){
        e.preventDefault();
        this.galleryDIv.innerHTML='';
        const searchValue = e.target.querySelector('input').value;
        const baseURL = await `https://api.pexels.com/v1/search?query=${searchValue}nature&per_page=12`;
        const data = await this.fetchImages(baseURL);
        this.GenerateHTML(data.photos);
        e.target.reset();
    }
}

const gallery = new PhotoGallery();