export const getFilteredVideosList = (functionsArr, videoList, filterState) => {
    functionsArr.forEach((currFunction) => videoList = currFunction(videoList, filterState))
    return videoList;
}

export const filterByCategory = (videoList, { showCategories }) => {
    if (showCategories.length === 0)
        return videoList;
    return videoList.filter(video => showCategories.some(category => category === video.categoryName))
}