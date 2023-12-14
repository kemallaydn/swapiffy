interface CardItem {
    id: string;
    ad: string;
    fiyat: string;
    resim: string;
    konu:string;
}

export type CardData = CardItem[];
export type RenderItemProps = {
    item: CardItem;
};
export interface CardProps {
    data: CardData; // props'un türü düzeltilmiş
}
export default CardItem;
