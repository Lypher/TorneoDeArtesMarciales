import { useEffect, useRef } from "react";

export const AudioPlayer = ({src}) =>  {
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        audio.play();
        return () => {
            audio.pause();
        };
    },[src])

    return <audio ref={audioRef} src={src} />
}

////////////// aun no funciona //////////////