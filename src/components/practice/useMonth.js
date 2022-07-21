import {useEffect, useState} from 'react';

// CUSTOM HOOK
 const useMonth = () =>{
    const [month, setMonth] = useState(0);
    useEffect(() => {
        const date = new Date();
        setMonth(date.getMonth());
    }, );
    return [month];
}
export default useMonth;