import React from "react";
import { SpriteAnimator } from 'react-sprite-animator';

export default function HeroSprite() {
    return(
        <div className="sprite-container flex justify-center items-center">
            <SpriteAnimator 
            shouldAnimate={true}
            sprite="./twirl.png"
            width={48}
            height={48}
            scale={0.2}
            frameCount={11}
            fps={8}
            />
        </div>
    )
}