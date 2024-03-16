import { ListItem } from "./ListItem/ListItem.tsx";

export type Listing = {
    listing_id: number;
    title: string;
    price: number;
    url: string;
    MainImage: {
        url_570xN: string;
    };
    quantity: number;
};

type ListingProps = {
    items: Listing[];
};

export function Listing(props: ListingProps) {
    const { items } = props;

    return (
        <>
            <div className="cards_container">
                {items.map(
                    (item) =>
                        item && (
                            <ListItem
                                key={item.listing_id}
                                item={{
                                    title: item.title,
                                    price: item.price,
                                    url: item.url,
                                    img: item.MainImage?.url_570xN,
                                    quantity: item.quantity,
                                }}
                            />
                        )
                )}
            </div>
        </>
    );
}
