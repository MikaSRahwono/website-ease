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
        return this.title;
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
    return new Project(snapshot.id, data.title, data.description, data.date, data.place, data.category, data.photos);
}