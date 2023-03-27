import "../../styles/card.css";

export const Card = (props) => {
    return (
        <>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        {props.name}
                    </div>
                    <div class="flip-card-back">
                        {props.name}
                    </div>
                </div>
            </div>
        </>
    )
}