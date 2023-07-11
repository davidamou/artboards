import Seller from "../models/seller"

class SellerProvider {
  private static url: string = "http://localhost:5000/api/sellers"

  static async getSellers() {
    try {
      const response = await fetch(this.url)
      const json = await response.json()
      const sellers: Array<Seller> = json.map((seller: any) =>
        Seller.fromJson(seller)
      )
      return sellers
    } catch (e) {
      return []
    }
  }

  static async findOne(id: string) {
    try {
      const response = await fetch(`${this.url}/${id}`)
      const json = await response.json()
      return Seller.fromJson(json)
    } catch (e) {
      return null
    }
  }
}

export default SellerProvider
