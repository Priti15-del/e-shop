export interface Product{
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
    "rating":Ratings   

}
// create interface for nested object 
export interface Ratings{
    "rate": number,
    "count": number

}