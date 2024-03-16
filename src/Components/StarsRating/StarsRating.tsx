import "./StarsRating.css";
import { SingleStar } from "./SingleStar/SingleStar";

type StarsRatingProps = {
    rating: number;
};

export function StarsRating(props: StarsRatingProps) {
    const { rating } = props;

    if (rating > 0 && rating <= 5) {
        return (
            <>
                <div className="stars_rating">
                    {[...Array(rating)].map(() => {
                        return <SingleStar key={crypto.randomUUID()} />;
                    })}
                </div>
            </>
        );
    }
}
