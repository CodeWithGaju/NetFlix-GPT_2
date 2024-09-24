// export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
// export const NETFLIX_LOGO = "https://fontmeme.com/temporary/d2a7f1bd612f362f1ba90fec2c346cdc.png";
export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg";
export const USER_AVATAR = "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg?ga=GA1.1.851890856.1724907470&semt=ais_hybrid";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    },
};

export const IMAGE_API_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [{identifier: "en", name: "English"},{identifier: "hindi", name: "Hindi"},{identifier: "spanish", name: "Spanish"}];
