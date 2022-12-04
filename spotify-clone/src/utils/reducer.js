import { reducerCase } from "./Constants";

export const initialState = {
    token : null,
    playlists: [],
    userInfo : null,
    selectedPlaylistId : "4YaCCRDvRLK8yVdLl1nlBt",
    selectedPlaylist : null,
    currentPlaying : null,
    playerState: false,
};

const reducer = (state,action) =>{
    switch (action.type) {
        case reducerCase.SET_TOKEN:
          return {
            ...state,
            token: action.token,
          };
        case reducerCase.SET_USER:
          return {
            ...state,
            userInfo: action.userInfo,
          };
        case reducerCase.SET_PLAYLISTS:
          return {
            ...state,
            playlists: action.playlists,
          };
        case reducerCase.SET_PLAYING:
          return {
            ...state,
            currentPlaying: action.currentPlaying,
          };
        case reducerCase.SET_PLAYER_STATE:
          return {
            ...state,
            playerState: action.playerState,
          };
        case reducerCase.SET_PLAYLIST:
          return {
            ...state,
            selectedPlaylist: action.selectedPlaylist,
          };
        case reducerCase.SET_PLAYLIST_ID:
          return {
            ...state,
            selectedPlaylistId: action.selectedPlaylistId,
          };
        default:
          return state;
    }
};

export default reducer;