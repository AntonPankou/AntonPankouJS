const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=6a4378d1112379ef19852c4722b16159", false);

xhr.send();

const str = xhr.responseText;

export const discoverPopular = JSON.parse(str);