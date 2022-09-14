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
}
export default new PhotographersService();