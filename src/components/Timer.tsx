import React, {useEffect, useState} from 'react';
import cl from './timer.module.css'

const addZero = (time: number) => {
    return time < 10 ? '0' + time.toString() : time
}

const Timer = () => {
    const startTime = new Date()
    const startHours = startTime.getHours()
    const startMinutes = startTime.getMinutes()
    const startSeconds = startTime.getSeconds()

    const [hours, setHours] = useState<number>(startHours)
    const [minutes, setMinutes] = useState<number>(startMinutes)
    const [seconds, setSeconds] = useState<number>(startSeconds)

    const delay = 1000

    useEffect(() => {
        const id = setInterval(() => {
            setSeconds(sec => {
                if (sec === 59) {
                    setMinutes(min => {
                        if (min === 59) {
                            setHours(h => {
                                if (h === 23) {
                                    return 0
                                }
                                return h + 1
                            })
                            return 0
                        }
                        return min + 1
                    })
                    return 0
                }
                return sec + 1
            })
        }, delay)

        return () => clearInterval(id)
    }, [])

    const secAngle = 6 * seconds
    const minAngle = 6 * minutes
    const secondStyle = {
        transform: "rotate(" + secAngle + "deg)"
    }
    const minutesStyle = {
        transform: "rotate(" + minAngle + "deg)"
    }
    return (
        <div>
            {addZero(hours)} : {addZero(minutes)} : {addZero(seconds)}
            <div className={cl.circle}>
                <div className={cl.seconds} style={secondStyle}></div>
                <div className={cl.minutes} style={minutesStyle}></div>

            </div>
        </div>
    );
};

export default Timer;