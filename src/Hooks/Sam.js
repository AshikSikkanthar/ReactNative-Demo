import React from 'react';
import {Text,View} from 'react';
function Sam() {
    const [v1, v2] = useState(0);

    useEffect(() => {
       setInterval(()=>{
           v2(v1+1);
       },2000);
    }, );
    return (
        <View>
            
            <Text> count incremented {v1} times </Text>
        </View>
    )
}

export default Sam;
