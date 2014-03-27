

var crypto = require('crypto');

/**
 * 签名字符串
 * @param prestr 需要签名的字符串
 * @param key 私钥
 * return 签名结果
 */

exports.rsaSign = function(prestr, key){
    var signer = crypto.createSign('RSA-SHA1');
    signer.update(prestr,'utf8');
    var sign = signer.sign(key,'base64');
    return sign;
}

/**
 * 验证签名
 * @param prestr 需要签名的字符串
 * @param sign 签名结果
 * @param key 私钥
 * return 签名结果
 */

exports.rsaVerify = function(prestr, sign, key){
}
