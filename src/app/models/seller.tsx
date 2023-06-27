class Seller {
    id: number;
    name: string;
    photourl: string;
    productImage: string;
    title: string;

    constructor(id: number, name: string, photourl: string, productImage: string, title: string) {
        this.id = id;
        this.name = name;
        this.photourl = photourl;
        this.productImage = productImage;
        this.title = title;
    }

    static fromJson(json: any): Seller {
        return new Seller(json.id, json.name, json.photoUrl, json.productImage, json.title);
    }
}

export default Seller;