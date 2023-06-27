import Seller from "../models/seller";

class SellerProvider { 
    private static url: string = 'http://localhost:4000/api/sellers';

    static async getSellers() {
        const response = await fetch(this.url)
        const json = await response.json()
        const sellers:Array<Seller> = json.map((seller:any) => Seller.fromJson(seller))
        return sellers;
     }
    
}

export default SellerProvider;