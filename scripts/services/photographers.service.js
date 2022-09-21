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

    fetchPhotographerMediaSortBy(id, sortBy) {
        return fetch('http://localhost/Front-End-Fisheye/data/photographers.json')
            .then(result => result.json())
            .then( function (datas) {
                let medias = datas.media.filter(media => media.photographerId == id);
                medias.sort(function (a,b) {
                    if(sortBy === "likes"){
                        return b.likes - a.likes;
                    }else if (sortBy === "date"){
                        return Date.parse(b.date) - Date.parse(a.date);
                    }else {
                        if(a.title < b.title){
                            return -1;
                        }
                        if(a.title > b.title){
                            return 1;
                        }
                        return 0;
                    }
                });
                return (medias);
            }
        );
    }
}
export default new PhotographersService();