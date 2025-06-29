const getFbVideoInfo = async (url) => {
  const { default: downloader } = await import('fb-downloader-scrapper');
  return downloader(url);
};

require("../settings.js")

async function fbdl(fbUrl) {
  try {
    const res = await getFbVideoInfo(fbUrl);
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = { fbdl };


