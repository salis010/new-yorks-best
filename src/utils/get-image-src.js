export const getImgSrc = (rank, rank_last_week) => {
    if(rank - rank_last_week === 0) {
        return false
    } else if(rank_last_week === 0) {
        return 'arrow-up.png'
    } else if (rank < rank_last_week) {
        return 'arrow-up.png'
    } else {
        return 'arrow-down.png'
    }
}