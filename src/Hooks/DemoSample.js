import React from 'react';
import {Text,Button,View} from 'react';

function DemoSample() {

    const [s1, s2] = useState(0);
    function b1()
    {
        s2(count+1);
    }
    return (
        <View>
            <Text> count incremented {s1} times </Text>
            <Button onpress={b1}> Click Me</Button>
        </View>
    );
}

export default DemoSample;
