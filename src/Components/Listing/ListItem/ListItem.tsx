type ListItemProps = {
    item: {
        title: string;
        price: number;
        url: string;
        img: string;
        quantity: number;
    };
};

export function ListItem(props: ListItemProps) {
    const { title, price, quantity, url, img } = props.item;

    let lvlClass = "level-high";
    if (quantity <= 20) {
        lvlClass = "level-medium";
    }
    if (quantity <= 10) {
        lvlClass = "level-low";
    }

    return (
        <div className="item-list">
            <div className="item">
                <div className="item-image">
                    <a href={url}>
                        <img src={img} />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{title}</p>
                    <p className="item-price">{price}</p>
                    <p className={"item-quantity " + lvlClass}>{quantity}</p>
                </div>
            </div>
        </div>
    );
}
