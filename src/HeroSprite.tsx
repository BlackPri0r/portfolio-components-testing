import React from "react";
import { SpriteAnimator } from 'react-sprite-animator';

export default function HeroSprite() {
    return(
        <div className="sprite-container flex justify-center items-center ">
            <SpriteAnimator 
                shouldAnimate={true}
                sprite="./lidle.png"
                width={48}
                height={48}
                scale={0.2}
                frameCount={2}
                fps={1.2}
            />
        </div>

    )
}