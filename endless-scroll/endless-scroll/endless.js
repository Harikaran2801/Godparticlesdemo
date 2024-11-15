document.addEventListener("DOMContentLoaded", function() {
  const newsFeed = document.getElementById("news-feed");
  
  const articles = [
    {
      title: "Artist Spotlight: Pat Bradshaw",
      category: "art",
      content: `Pat Bradshaw (°1984, Manchester, United Kingdom) makes sculptures and drawings. By
            rejecting an objective truth and global cultural narratives, Bradshaw tries to create
            works in which the actual event still has to take place or just has ended: moments
            evocative of atmosphere and suspense that are not part of a narrative thread. The drama
            unfolds elsewhere while the build-up of tension is frozen to become the memory of an event
            that will never take place.
            
             His practice provides a useful set of allegorical tools for manoeuvring with a
            pseudo-minimalist approach in the world of sculpture: these meticulously planned works
            resound and resonate with images culled from the fantastical realm of imagination. With
            the use of appropriated materials which are borrowed from a day-to-day context, he creates
            with daily, recognizable elements, an unprecedented situation in which the viewer is
            confronted with the conditioning of his own perception and has to reconsider his biased
            position.

            function. By applying specific combinations and certain manipulations, different functions
            and/or contexts are created. By putting the viewer on the wrong track, he absorbs the
            tradition of remembrance art into daily practice. This personal follow-up and revival of a
            past tradition is important as an act of meditation.
            `,
      imgSrc: "photo.jpg",
      imgAlt: "Pat Bradshaw's Artwork"
    },
    {
      title: "New Exhibition Opening in Brooklyn",
      category: "exhibition",
      content: `A new exhibition at the Brooklyn Museum in New York, which is dedicated to the staying power 
          of gilded treasures, makes the opposite case.“Solid Gold,” which coincides with the museum’s 
          200th anniversary,opens tomorrow and features over 500 golden objects, including fashion, 
          jewelry, paintings, sculptures, and more.(It runs until July 6, 2025.) “I based the exhibition 
          checklist on our impressive permanent collection,” says Matthew Yokobosky, the museum’s senior 
          curator of fashion and material culture. “In reviewing our holdings, nearly 4,000 works are gold
          or have a gold aspect and span thousands of years, from ancient times to today.”
          The museum had more than enough items to choose from in its vast collection—in fact, it was 
          difficult to narrow down exactly which golden goods to focus on. “After reviewing most of them,
          I created a chronological selection of about 250 works and enriched it with loans of fashion, 
          jewelry, and art to spark cross-disciplinary dialogues and juxtapositions,” says Yokobosky, who 
          combined the old (the oldest item being a large sarcophagus lid from the 22nd Dynasty, which is 
          on view for the first time in over a century) with the new, including garments such as a golden-foil 
          gown from Balenciaga’s spring 2020 collection, designed by Demna.`,
      imgSrc: "exhibition.jpeg",
      imgAlt: "Exhibition Image"
    },
    {
      title: "Sports News: Eagles vs. Commanders",
      category: "culture",
      content: `The Philadelphia Eagles scored three fourth-quarter touchdowns, including two by star running back Saquon
          Barkley, to pull away and defeat the Washington Commanders 26-18 on Thursday night at Lincoln Financial Field.
          Barkley finished with 146 rushing yards and two scores as the Eagles extended their win streak to six straight 
          games and now hold a 1.5 game lead over the Commanders for first place in the NFC East.Washigton opened the 
          scoring in the first quarter with rookie quarterback Jayden Daniels orchestrating a four-play, 58-yard drive 
          to put the Commanders ahead 7-0. Daniels had completed a screen-pass in the backfield to Austin Ekeler earlier 
          in the drive to move Washington down the field, and the running back initially evaded the defender before being 
          taken down for a 34-yard gain.Meanwhile, Brian Robinson rushed for an 18-yard gain a few plays later, before 
          eventually getting an inside handoff near the goal line for the touchdown.Eagles quarterback Jalen Hurts momentarily 
          left the game in the second quarter and was evaluated for a concussion after being tackled from behind by defensive 
          back Quan Martin and another Commanders defender. As he was falling forward, Hurts’ head was pressed into the turf 
          by Martin’s chest.
          The 26-year-old entered the blue medical tent, and then later jogged into the locker room at halftime with the Eagles 
          trailing 7-3. Hurts was cleared by the medical staff and played the entire second half.Hurts completed 18-of-28 pass 
          attempts for 221 yards, adding 39 yards and a touchdown on the ground.“What we talked about at halftime was that this 
          was going to be a grimy and gritty game, and just keep going because we know we’re grimy and gritty,” Eagles head coach 
          Nick Sirianni said after the game. “We just kept going, that was the talk at halftime, like, ‘Hey this is a street fight. 
          It’s not about who’s tougher, but who is tougher longer.’”The turning point in the game came in the fourth quarter. 
          Trailing 12-10, with the Commanders facing a fourth-and-two in field goal range, Washington elected to go for a first down. 
          Daniels bobbled the snap before attempting to scramble for the first, but was tackled along the sideline.
          “That was huge. That’s huge. That’s a turnover in our eyes,” Sirianni said of the fourth-down stop. “Jayden Daniels is 
          obviously a really good athlete, a really good football player. It was good to be able to string that thing out and get 
          the stop. It was huge because we went down and made it a two-score game.”`,
      imgSrc: "sport.jpg",
      imgAlt: "Sport Image"
    }
  ];

  // Populate the articles
  articles.forEach((articleData) => {
    const article = document.createElement("article");
    article.innerHTML = `
      <h2>${articleData.title}</h2>
      <p>${articleData.content}</p>
      <figure>
        <img src="${articleData.imgSrc}" alt="${articleData.imgAlt}" />
      </figure>
    `;
    newsFeed.appendChild(article);
  });
});

function searchArticles() {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const articles = document.querySelectorAll("article");

  articles.forEach((article) => {
    const textContent = article.innerText.toLowerCase();
    if (textContent.includes(searchTerm)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
}

function filterByCategory() {
  const selectedCategory = document.getElementById("categorySelect").value.toLowerCase();
  const articles = document.querySelectorAll("article");

  articles.forEach((article) => {
    const category = article.getAttribute("data-category");
    if (selectedCategory === "" || category === selectedCategory) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
}
