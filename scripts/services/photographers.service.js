class PhotographersService {
    // Récupération de tous les photographes
    fetchAllPhotographers() {
        return fetch('data/photographers.json')
        .then(result => result.json())
        .then(datas => datas.photographers);
    }

    // Récupération de tous les médias
    fetchAllMedia() {
        return fetch('data/photographers.json')
        .then(result => result.json())
        .then(datas => datas.media);
    }

    // Récupération du photographe en fonction de son id
    fetchPhotographer(id) {
        return fetch('data/photographers.json')
            .then(result => result.json())
            .then(datas => datas.photographers.filter(photographer => photographer.id == id));
    }

    // Récupération des médias du photographe en fonction de son id
    fetchPhotographerMedia(id) {
        return fetch('data/photographers.json')
            .then(result => result.json())
            .then(datas => datas.media.filter(media => media.photographerId == id));
    }

    // Récupération des médias du photographe en fonction de son id et trié en fonction du select
    fetchPhotographerMediaSortBy(id, sortBy) {
        return fetch('data/photographers.json')
            .then(result => result.json())
            .then( function (datas) {
                // Récupération des médias du photographe en fonction de son id
                let medias = datas.media.filter(media => media.photographerId == id);
                // Tri des médias du photographe par Popularité, Date, et Titre
                medias.sort(function (a,b) {
                    if(sortBy === "Popularité"){
                        return b.likes - a.likes;
                    }else if (sortBy === "Date"){
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