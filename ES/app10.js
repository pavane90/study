//async & await

const getMoviesAsync = async () => {
  try {
    const response = await fetch("https://yts.am/api/v2/list_movies.json");
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("we are done!");
  }
};

getMoviesAsync();
