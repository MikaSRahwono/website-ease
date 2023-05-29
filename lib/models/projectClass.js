class Project {
    constructor (id, title, description, date, place, category, photos ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.place = place;
        this.category = category;
        this.photos = photos;
    }
    toString() {
        return {
            'title' : this.title,
            "description" : this.description,
            "date" : this.date,
            "place" :  this.place,
            "category" : this.category,
            "listPhotos" : this.photos,
        }
    }
}

export const toFirestore = (project) => {
    return {
        id: project.id,
        title: project.name,
        description: project.state,
        date: project.country,
        place: project.place,
        category: project.category,
        photos: project.photos
        };
}

export const fromFirestore = (snapshot) => {
    const data = snapshot.data();
    return new Project(snapshot.id, data.title, data.description, data.date, data.place, data.category, data.listPhotos);
}