import { useRef, memo } from "react";

const Content = ({onIncrement}) => {
    console.log('re-rendered')
    return (
        <div>
            This is Content Commonent
            <button
                onClick={onIncrement}
            >Increment</button>
        </div>

    )
};

export default memo(Content)