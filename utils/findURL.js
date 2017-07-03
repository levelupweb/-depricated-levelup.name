export default function findUrls(text) {
    var source = (text || '').toString();
    var urlArray = [];
    var url;
    var matchArray;

    var regexToken = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/g;
    while((matchArray = regexToken.exec(source)) !== null) {
        var token = matchArray[0];
        urlArray.push(token);
    }

    return urlArray;
}