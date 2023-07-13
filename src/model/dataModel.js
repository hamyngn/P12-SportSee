const dataModel = ({sessions, performance}) => {
    //performance data
    let mergedData;
    let reverseData;

    const kind = performance.kind;
    kind[1] = "Cardio";
    kind[2] = "Energy";
    kind[3] = "Endurance";
    kind[4] = "Force";
    kind[5] = "Vitesse";
    kind[6] = "Intensité";

    mergedData = performance.data.map((i)=> {
        for(let j = 0; j < Object.keys(kind).length; j += 1) {
            if(i.kind.toString() === Object.keys(kind)[j]){
                i.kind = Object.values(kind)[j];
            }
        }
        return i;
    })
    reverseData = mergedData.reverse();

    // sessions data
    if(sessions.length === 7) {
        sessions.unshift(
            {day: 0,
            sessionLength: sessions[0].sessionLength - 5}
        )
        sessions.push(
            {day: 8,
            sessionLength: sessions[7].sessionLength + 5}
        )
    }

    return ({newPerformance: reverseData, newSessions: sessions})
}

export default dataModel