import React, { useState, useEffect } from 'react'
import { flushSync } from 'react-dom';

/**
The setState() method does not immediately update the state of the component, it just puts the update in a queue to be processed later. React may batch multiple update requests together to make rendering more efficient. Due to this, special precautions must be made when you try to update the state based on the component's previous state.
 */
export default function SetStateMultipleTimes() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    // On every change of count, useEffect called. and every useEffect calling , a new setInterval is created.
    // while previous all intervals also in queue.
    // Try this on console...
    /* useEffect(() => {
        const id = setInterval(() => {
            console.log('inside set interval')
            setCount(count + 1)
        }, 2000);
        console.log('newly created interval id ', id)
        return () => {
            console.log('cleanup')
        };
    }, [count]); */



    // In this scenario, setInterval is created only one time and continously running but value of count does not update.
    // because cleanup function is not calling.
    // The useEffect callback doesn’t have access to the latest time value since it never runs again after it mounts.
    // To fix this, we need to pass in a callback to setTime with the current time value as the parameter and returns the new time value we want.
    /* useEffect(() => {
        const id = setInterval(() => {
            console.log('inside set interval')
            setCount(count => count + 1)
        }, 2000);
        console.log('newly created interval id ', id)
        return () => {
            clearInterval(id); // when cleanup will be called next time, it will clear previous interval.
            console.log('cleanup')
        };
    }, []); */

    // You would expect the value of count inside setTimeout to be 5, but it’s actually 0.
    // setTimeout is a closure, therefore, when setTimeout is scheduled it uses the value of count at that exact moment in time, which is the initial value of 0.
    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('check count - ', count)// count is 0 here
    //     }, 3000);
    //     setCount(5); // Update count to be 5 after timeout is scheduled
    // }, []);

    useEffect(() => {
        console.log(count);
        console.count('count rendering- ')
        return () => {
            //console.log('cleanup')
        }
    });

    // when click event called.
    // 1. all setCount will be pushed in queue and at that time count value was 0.
    // 2. So initially each setCount have count value 0 & they will process based on that value only.
    // 3. that's why each setCount executes but final value is of last seCount
    const onClick1 = () => {
        setCount(count + 1);
        setCount(count + 5);
        setCount(count + 10);
    }

    // What We are doing here now compare to the above method calling of onClick1 -->
    //1. All setCount willbe pushed in queue and at that time initla count value was 0.
    //2. But here setCount contains callback which return new value of count.
    //3. So when next setCount will be run, it will pick returned value of count.
    //4. While in simple state update, nothing returns from previous state update.
    //5. So now here it is 0 to 3.
    const onNumberChange = (event) => {
        // So here we have passed function inside setState so that next value could be processed based on previous update

        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)
    };

    const onClick2 = () => {
        // All three setState will be called (these are three different states) but rendering will be done only one time.
        setCount(count + 1);
        setCount2(count2 + 1);
        setCount3(count3 + 1);
    }



    // For each setCount rendering will happen and each setCount will be processed because we have passed callback inside this.
    const onClick3 = (event) => {
        setTimeout(() => {
            setCount(count => count + 1)
            setCount(count => count + 1)
            setCount(count => count + 1)
            setCount(count => count + 1)
            setCount(count => count + 1)
        });
    };

    // For each setCount rendering will happen but only last setCount will be processed.
    const onClick4 = (event) => {
        setTimeout(() => {
            setCount(count + 1);
            // setCount(count + 5);
            // setCount(count + 10);
        });
        setTimeout(() => {
            console.log('called')
            setCount(count + 2);
        }, 1000);
    };

    const onClick5 = (event) => {
        flushSync(() => {
            setCount(count + 1);
        })
        flushSync(() => {
            setCount(count + 5);
        })
        flushSync(() => {
            setCount(count + 10);
        })
    };

    // setInterval will be called in every 1.5 second but value of count is only 1 & rendering will not happened on
    // each interval

    /*     To fix a state that’s not updating in the setInterval callback, we should pass in a callback to the state setter function to update the state.

    This is because the useEffect callback has to run in order to have access to the latest state values. */
    const onClick6 = (event) => {
        setInterval(() => {
            console.log('interval')

            setCount(count + 1); //- count will always be 1 because u are in same handler call.

            // Below both lines are same working. Second line will not increment value based on count value because
            // you are still in same handler call.
            //  setCount(Math.floor(Math.random(100) * 40));
            //  setCount(count + Math.floor(Math.random(100) * 40));
        }, 1500);
    };

    // When clicking on button multiple times - state updates.
    const onClick7 = () => {
        setCount(count + 1);
    }

    // Combination of simple setState and with setState using callback
    const onClick8 = () => {
        /* Output - 3
         setCount(count + 1);
         setCount(count => count + 1);
         setCount(count => count + 1);
         */


        /*  Output - 3
         setCount(count => count + 1);
         setCount(count => count + 2);
         setCount(count + 3);
          */


        /*  Output - 5
         setCount(count => count + 1);
         setCount(count + 2);
         setCount(count => count + 3);
         */

        /* Output - 7
         setCount(count + 1);
         setCount(count + 2);
         setCount(count + 3);
         setCount(count => count + 4);
         */
    }
    return (
        <div>SetStateMultipleTimes

            <div>
                Count - {count}
            </div>
            <div>
                Count2 - {count2}
            </div>
            <div>
                Count3 - {count3}
            </div>
            <div>
                <button onClick={onClick1}>Check setCount(count + 1) multiple times</button>
            </div>
            <div>
                <button onClick={onNumberChange}>Check setCount(count => count + 1) multiple times</button>
            </div>

            <div>
                <button onClick={onClick2}>Check different setCount, setCount2, setCount3</button>
            </div>

            <div>
                <button onClick={onClick3}>Check setCount(count => count + 1) inside setTimeout</button>
            </div>

            <div>
                <button onClick={onClick4}>Check setCount(count + 1) inside setTimeout</button>
            </div>
            <div>
                <button onClick={onClick5}>Check setCount(count + 1) using flushAsync</button>
            </div>
            <div>
                <button onClick={onClick6}>Check setCount(count + 1) using setInterval</button>
            </div>
            <div>
                <button onClick={onClick7}>Try to click mulitple times</button>
            </div>
            <div>
                <button onClick={onClick8}>State update with combined of callback and normal</button>
            </div>
        </div>
    )
}
