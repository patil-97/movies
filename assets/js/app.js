let link = "https://image.tmdb.org/t/p/w500";

let color = (num) => {
  if (num > 7) {
    return "bg-success";
  } else if (num > 5 && num < 7) {
    return "bg-warning";
  } else {
    return "bg-danger";
  }
};

let movies = "";
movieArray.forEach((ele) => {
  movies += `   <div class="col-md-4 mb-4 box">
                    <div class="card">
                    <figure class="movieCard mb-0">
                        <img
                        src="https://image.tmdb.org/t/p/w500${ele.poster_path}"
                        alt="${ele.title}"
                        title="${ele.title}"
                        />
                        <figcaption class="movieTitle p-3">
                        <div class="row">
                            <div class="col-10">
                            <h2>${ele.title}</h2>
                            </div>
                            <div class="col-2 align-self-center">
                            <span class="${color(ele.vote_average)} pt-2 pb-2">${ele.vote_average}</span>
                            </div>
                        </div>
                        </figcaption>
                    </figure>
                    <div class="movieOverview p-3">
                        <h3 class="text-center mb-4">${ele.title}</h3>
                        <p>
                       ${ele.overview}
                        </p>
                    </div>
                    </div>
                 </div>`;
});

document.getElementById("movies").innerHTML = movies;