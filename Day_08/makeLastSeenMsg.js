module.exports = function makeLastSeenMsg(name, period) {
    // TODO: 여기에 코드를 작성합니다.
    if ( period < 60 ){
        period = period + '분';
    } else if ( period < 1440 ){
        period = parseInt(period / 60) + '시간';
    } else{
        period = parseInt(period / 1440) + '일';
    }

    return `${name}: ${period} 전에 접속함`;
}