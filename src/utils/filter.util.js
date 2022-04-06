export const getFilteredVideosList = (videoList, filterState) => {
    const filteredByCategory = filterByCategory(videoList, filterState);
    const filterBySearch = search(filteredByCategory, filterState);
    return filterBySearch;
}

export const filterByCategory = (videoList, { showCategories }) => {
    if (showCategories.length === 0)
        return videoList;
    return videoList.filter(video => showCategories.some(category => category === video.categoryName))
}
export const search = (videoList, { searchKeyword }) => {
    if (searchKeyword === '') return videoList;
    return videoList.filter(video => video.title.toLowerCase().includes(searchKeyword.toLowerCase()));
}
export const sortBy = (videoList, { sortBy }) =>{
    return videoList;
}