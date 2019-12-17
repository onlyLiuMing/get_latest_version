/**
 * 获取最新的版本号
 * @param {*} tag_01
 * @param {*} tag_02
 */
function latestVersion(tag_01, tag_02) {
  const arrTag01 = tag_01.split(".") || [];
  const arrTag02 = tag_02.split(".") || [];
  let tag01Storage = [],
    tag02Storage = [];
  for (let i = 0; i < Math.max(arrTag01.length, arrTag02.length); i++) {
    const _temp01 = arrTag01[i] == undefined ? "0" : arrTag01[i];
    const _temp02 = arrTag02[i] == undefined ? "0" : arrTag02[i];
    const maxLength = Math.max(_temp01.length, _temp02.length);
    tag01Storage.push(_fillLength(_temp01, maxLength));
    tag02Storage.push(_fillLength(_temp02, maxLength));
  }
  if (Number(tag01Storage.join("")) > Number(tag02Storage.join(""))) {
    return tag_01;
  } else {
    return tag_02;
  }
}

/**
 * 给target进行补位，（在前面加 0）
 * @param {*} target
 * @param {*} length
 */
function _fillLength(target, length) {
  let result = target;
  if (target.length < length) {
    for (let i = 0; i < length - target.length; i++) {
      result = "0" + result;
    }
  }
  return result;
}

function test() {
  console.info(latestVersion("1.8.9", "1.8.10"));
  console.info(latestVersion("1.8.9.1", "1.8.10"));
  console.info(latestVersion("01.08.21", "1.8.10"));
  console.info(latestVersion("11.8.9", "1.18.10"));
  console.info(latestVersion("2.8.9", "11.8.10"));
}

exports.latestVersion = latestVersion;
