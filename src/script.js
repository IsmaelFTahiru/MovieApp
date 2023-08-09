'use strict';

const movieData = [
  {
    title: 'The Dark Knight',
    genre: 'Action, Crime, Drama, Thriller',
    description:
      `Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as 'The Joker' appears in Gotham, creating a new wave of chaos. Batman's struggle against The Joker becomes deeply personal, forcing him to 'confront everything he believes' and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes.`,
    pictureUrl:
      'https://toutelaculture.com/wp-content/uploads/2012/07/affiche-702x1024.jpg',
    trailerUrl:
      'https://imdb-video.media-imdb.com/vi324468761/1434659607842-pgv4ql-1563712918369.mp4?Expires=1691073466&Signature=K1hSgZEiHui9B6TEGYFlXqX5fQ5vmE3tZDpM4~9KLu5EhxNWtuzzpAP33BV6q9odC-kfh5whXDL4gyFYL0ossyExU8WWOAru1Oj1b6otEGIsPZbRdGofBDu1dplISNEsZtUrAPjGA5etLL8TDG6kwsZ3RvN0fRg8buEGUaFj~AdlvpoM1szwhebnmmXqwHtG~t13UtBwlaVJe0RLBugPkN~KARddlwBTg~eUw0eiAUDg2TwjTfSZSjUChOiwJ3HYqpkcJndu6pNj6AnyzU75XdIHMBWL-oFxRg4A3v6KwbFAph41hcbmaqN2OenJBvn-wZ7p0YGVrcWGprNdddGQFw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
  },
  {
    title: 'Inception',
    genre: 'Action, Adventure, Science-Fiction, Thriller',
    description:
      `Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.`,
    pictureUrl:
      'https://de.web.img3.acsta.net/medias/nmedia/18/76/58/35/19446589.jpg',
    trailerUrl:
      'https://imdb-video.media-imdb.com/vi2959588889/1434659607842-pgv4ql-1596404706743.mp4?Expires=1691156414&Signature=IKv0j2AqL-0SQ4Ye5qwu1bNCuXEnaQM94bkGlrp1pXx~o7CNNndMZCqeGC0JGdWKOURGLPM-Ad8P-Qhvsy96qJ7b7EywMOv4VKV~RS--NhHCO6fjquQEeteDMYehK9PNNsvQmrSU99CT3T6ZWpNSoOjI5yvQaDIdDCJFtsSryTuYix280O6VaJfBl3wjSN8Op6epHe-weWqrsQ9619uWcN8b-aK9puT7N6u-KmlfuVpH9ymlD57iSAfqoagqq4wxD8amVz7RLH8mKrIJXsoVZa-MVH9gh9cSqIheA3kOIQKr0TtR6P5cblSWY1qo3e-Nv~bv5DCIvSRqTmGWtU008Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
  },
  {
    title: `Get Rich or Die Tryin'`,
    genre: 'Biography, Crime, Drama, Music Movie',
    description:
      `Get Rich or Die Tryin' is a 2005 American crime drama film directed by Jim Sheridan and written by Terence Winter. It stars Curtis '50 Cent' Jackson in his feature film acting debut, alongside Terrence Howard, Joy Bryant, Bill Duke, Adewale Akinnuoye-Agbaje, Omar Benson Miller, Ashley Walters and Viola Davis. The film, which contains autobiographical elements from 50 Cent's life, follows his character, Marcus Greer, a drug dealer who turns away from his criminal life to pursue his passion of rap music. The film's title is shared with 50 Cent's 2003 debut album of the same name.`,
    pictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTI4NTE0MTU2N15BMl5BanBnXkFtZTYwNzQ1OTc2._V1_FMjpg_UX1000_.jpg',
    trailerUrl:
      'https://imdb-video.media-imdb.com/vi2980643097/1434659607842-pgv4ql-1564498152233.mp4?Expires=1691157057&Signature=p9ttmtxJZCq27SALmw2gQwwqG1DPx0GOqJS~RThvDDyoLFecqj6JS-hef7g2~b6-53Ud83DgvB81XxX-N2Ou~nU7BqFS0M07TNTeXhzPosGRI8T-L2SZD2UA2it4eHwQYyNLi9Q-oi8SlUF-thUX9U~YqAlMkm5XRpvR52PLnvOUIXApXrojqtNabB4-N7rrKJw15aiwpB~aTKLeKXRGWg-sjWbEdykbiME-hX28UbWL8gEr32HH8QAf~lw2Y28m9IH~nwuY~HxG-HYE~KyFLE7Jb965K9W2y156j6S8ST6Za8t3AwfB4BLkThLXDZMv20gpVlDmPQq0HoEdgb9siQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
  },
  {
    title: 'Devotion',
    genre: 'Action, Drama, War Movie',
    description:
      `1950. Ensign Jesse Brown and Lt(jg) Tom Hudner join Navy Fighter Squadron VF-32 at roughly the same time and Brown is assigned as Hudner's wingman. They are quickly the best of friends and always look out for each other. Later that year war breaks out in Korea and VF-32, onboard the carrier USS Leyte, provides air support. Their missions are vital to the war effort and extremely dangerous.`,
    pictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMjI5NGJjMmEtODk4Yy00ZDRjLWE5ZGItMjJiNGM4NTI0NmZkXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_FMjpg_UX1000_.jpg',
    trailerUrl:
      'https://imdb-video.media-imdb.com/vi4203332889/1434659607842-pgv4ql-1669056471445.mp4?Expires=1691156389&Signature=RQJYxCoYK8X-cerQmlV3HJ7uNeMA20lD8w1SOuTuZz3T8TjI5fmc5TByEyHTU0WwfXYm-M9Lko-pjZO6sPVZsDx6vu6bP78GiYd51MOhF00UhNx~Ak9E8UULdh57pzA~lEmDRtJUkIWOYa-3Js8ifdz18xcOfbIkxfhYQnJ5p14tVuatNuaVjRIMcYwNOaB08cu6syYCzPMbq9aD310mF7fdIx4fH4nLGGkbwMpcDZW0PDIok-MOp-q6VXRd2cyOAAl1ezHg~3NHtqc1xyivJW9aNMiQqD~afmT7nHs6RAd9rtId1BQ5vgdA6ijD-IxC0pDOB~PTSBiRGda14Bu0bg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
  },
  {
    title: 'Friday',
    genre: 'Comedy, Drama',
    description:
      `It is Friday and Craig Jones (Ice Cube) is unemployed, having been fired yesterday. This has lead to trouble with Smokey's (Chris Tucker's) supplier, Big Worm (Faizon Love), who now wants his money, or his product back, or Smokey is a dead man. Then there's Deebo (Tommy 'Tiny' Lister, Jr.), the local bully, plus Craig's jealous, psychotic girlfriend, Joi (Paula Jai Parker), and Debbie (Nia Long), the neighbor Craig has a crush on. A lot can happen while lounging around your house on a Friday.`,
    pictureUrl:
      'https://m.media-amazon.com/images/M/MV5BMTI0MDg1NzUzNl5BMl5BanBnXkFtZTYwNjUwMzQ5._V1_.jpg',
    trailerUrl:
      'https://imdb-video.media-imdb.com/vi4222091545/1434659607842-pgv4ql-1563461779100.mp4?Expires=1691156792&Signature=bzd9ei8FvQ~viN59Cr3N2mx8EergUNj3aD1f5rwpH39FbwsLZyyVBObnIKptbA7uVX3eP7MLDgUwixqTTYQn89jWnOvXpceFj4dvGAUUKfWg8FSaiWlCpvrt9e5eILWicEC5IwROPh3VOBxFw5mD8ujzyGDLiPQcXvOGKIbSYrl4x6GiWd4-kERxxozMxpzVuxZIi1NHNaesJXiAtbGmXpWq6uXmAj5hvqVUGeCLE7MgXiEkvEQYCbLqcjaHCjWMe-I2GEbuOMdGq3~zJN9oXTucB7lbZtSRX4i0xCekyVTlbO5fIUoZZZHuYCwqof6rIi6bR~wS7hsy9HWKI-LQKg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
  },
];

// Variables
const movieBoxContainer = document.querySelector('.box-container');

// Functions
const initialize = () => {
  renderMovieData();
};

const renderMovieData = () => {
  movieData.forEach((movie) => {
    const div = document.createElement('div');
    const paragraphBlock = document.createElement('p');

    paragraphBlock.className = 'movie-box';
    paragraphBlock.innerHTML = `
      <img 
        class='movie-poster' 
        src=${movie.pictureUrl} 
      />
      <br>
      <h3>Title:</h3>
      <p>${movie.title}</p>
      <br>
      <h3>Genre:</h3>
      <p>${movie.genre}</p>
      <br>
      <h3>Description:</h3>
      <p id='description'>${movie.description}</p>
      <button>Watch Trailer</button>
    `;

    div.append(paragraphBlock);
    movieBoxContainer.append(div);
  });
};

initialize();

// for (let i = 0; i < 5; i++) {
//   let box = document.getElementById('box0' + i);
//   let title = document.querySelector('#title0' + i);
//   let genre = document.querySelector('#genre0' + i);
//   let description = document.querySelector('#description0' + i);
//   let img = document.getElementById('img0' + i);
//   let trailer = document.getElementById('trailer0' + i);

//   title.textContent += `${movieData[i].title}`;
//   genre.textContent += `${movieData[i].genre}`;
//   description.textContent += `${movieData[i].description}`;
//   img.src = `${movieData[i].pictureUrl}`;
//   trailer.src = `${movieData[i].trailerUrl}`;

//   const revealTrailer = function () {
//     if (img.style.visibility === 'visible') {
//       box.style.background = '#000000';
//       img.style.visibility = 'hidden';
//       trailer.style.visibility = 'visible';
//     } else {
//       box.style.background = '#FFFFFF';
//       img.style.visibility = 'visible';
//       trailer.style.visibility = 'hidden';
//     }
//   };

//   img.addEventListener('click', function () {
//     revealTrailer();

//     trailer.play();

//     console.log('click works');
//   });

//   trailer.addEventListener('ended', function () {
//     revealTrailer();
//   });
// }
