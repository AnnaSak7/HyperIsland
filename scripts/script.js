// url : https://emoji-api.com/emojis?access_key=0b8f433fa656862fd20282da5f9f0dc5be5a1946
// key : 0b8f433fa656862fd20282da5f9f0dc5be5a1946

//CREATE variable listOfEmojis
let listOfEmojis = false;

function getEmojis() {
  //FETCH emojis from api
  fetch(
    'https://emoji-api.com/emojis?access_key=0b8f433fa656862fd20282da5f9f0dc5be5a1946'
  )
    //CONVERT response from api to json
    .then((response) => response.json())
    .then((data) => {
      listOfEmojis = data;
      console.log('LIST', listOfEmojis);
      //console.log('array?', Array.isArray(data));

      //IF response from api is an array
      //STORE converted res in variable listOfEmojis
    });
}

//ACTION user presses the button
function searchForEmoji(evt) {
  if (listOfEmojis) {
    // GET user input in searchfield
    // STORE the value in a variable
    var searchStr = new FormData(evt).get('search');

    // IF user input is a string
    if (typeof searchStr === 'string') {
      let emojis = document.getElementById('emojis');
      // CLEAR #emojis element
      emojis.innerHTML = '';
      // FOR  all as ITEM in listOfEmojis
      listOfEmojis.forEach((element) => {
        // IF the variable from user input is the same as the ITEM description
        if (
          element.unicodeName.includes(searchStr) &&
          !emojis.innerHTML.includes(element.character)
        ) {
          // STORE the item in a variable
          emojis.innerHTML += element.character;
        }
      });

      if (emojis.innerHTML === '') {
        emojis.innerHTML = 'There are no matches';
      }
    }

    // ENDIF
  }

  //      PRINT the variable in 3emojis by innerHTML
  //    ELSE
  //      PRINT "there are no matches" in #emojisr
  //    ENDIF
  // ENDFOR
}
