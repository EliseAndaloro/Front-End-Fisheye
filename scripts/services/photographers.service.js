class PhotographersService {
    fetchAllPhotographers() {
        return fetch('http://localhost/Front-End-Fisheye/data/photographers.json')
        .then(result => result.json())
        .then(datas => datas.photographers);
    }

    fetchAllMedia() {
        return fetch('http://localhost/Front-End-Fisheye/data/photographers.json')
        .then(result => result.json())
        .then(datas => datas.media);
    }

    fetchPhotographer(id) {
        return fetch('http://localhost/Front-End-Fisheye/data/photographers.json')
            .then(result => result.json())
            .then(datas => datas.photographers.filter(photographer => photographer.id == id));
    }

    fetchPhotographerMedia(id) {
        return fetch('http://localhost/Front-End-Fisheye/data/photographers.json')
            .then(result => result.json())
            .then(datas => datas.media.filter(media => media.photographerId == id));
    }
}
export default new PhotographersService();