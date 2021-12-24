import { useState } from "react";

export const UseCounter = () => {
    const [counter, setCounter] = useState<number>(0);

    const AddPoint = () => {
        setCounter(counter + 1);
    }

    const RemovePoint = () => {
        if(counter > 0)
            setCounter(counter - 1);
    }

    return {
        counter,
        AddPoint,
        RemovePoint,
    };
}