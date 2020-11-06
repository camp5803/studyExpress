let ssipjot = [
    "씹쫏",
    "딩고푸",
    "뚱추",
];

exports.randomString = () => {
    let jelding = [Math.floor(Math.random() * ssipjot.length)];
    return ssipjot[jelding];
}