(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,r){e.exports=r(42)},23:function(e,t,r){},30:function(e,t,r){},32:function(e,t,r){},34:function(e,t,r){},36:function(e,t,r){},38:function(e,t,r){},40:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(15),c=r.n(s),o=(r(23),r(2)),l=r(3),i=r(6),u=r(4),m=r(7),p=r(9),d=r(5),h=(r(30),function(e){function t(){var e,r;Object(o.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(r=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).handleStart=function(){r.props.start_game(!0);var e,t=r.props.guessWord.toUpperCase(),a=r.props.usedLetters.concat(" ");e=Object(p.a)(t).filter(function(e){var t;return a.includes(e)?t:t=e}),r.props.remain_letters(e),r.props.count_letters(e.length)},r.handleClick=function(e){r.props.deactivate_letter(e.target.innerText),r.props.use_letter(e.target.innerText);var t,a=r.props.remain;a.includes(e.target.innerText)?(t=a.filter(function(t){return t!==e.target.innerText}),r.props.remain_letters(t),r.props.count_letters(t.length)):r.props.mistake(r.props.numberOfMistakes+1),4===r.props.numberOfMistakes&&r.props.game_over(!0),0===r.props.lettersToGuess&&r.props.game_over(!0)},r}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.alphabet.map(function(t,r){return n.a.createElement("div",{key:r,className:!0===t.clicked?"letter-clicked":"letter-active",onClick:e.handleClick}," ",t.letter)});return n.a.createElement("div",{className:"alphabet-container"},!0===this.props.startGame?n.a.createElement("div",null,t):n.a.createElement("div",{className:"alphabet-startButton",onClick:this.handleStart},"START GAME"))}}]),t}(a.Component)),f=Object(d.b)(function(e){return{alphabet:e.alphabet.letters,guessWord:e.guessWord.word,usedLetters:e.alphabet.usedLetters,remain:e.guessWord.remainLetters,numberOfLettersToGuess:e.guessWord.lettersToGuess,numberOfMistakes:e.guessWord.numberOfMistakes,startGame:e.start.start,lettersToGuess:e.guessWord.lettersToGuess}},function(e){return{deactivate_letter:function(t){e({type:"CLICKED_LETTER",letter:t})},use_letter:function(t){e({type:"USED_LETTER",letter:t})},count_letters:function(t){e({type:"COUNT_LETTERS",count:t})},remain_letters:function(t){e({type:"REMAIN_LETTERS",remain:t})},mistake:function(t){e({type:"MISTAKE",mistake:t})},start_game:function(t){e({type:"START_GAME",start:t})},game_over:function(t){e({type:"GAME_OVER",gameOver:t})}}})(h),v=(r(32),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://favqs.com/api/qotd").then(function(e){return e.json()}).then(function(t){e.props.new_quote(t.quote.body),e.props.new_author(t.quote.author)})}},{key:"render",value:function(){var e=this,t=this.props.guessWord.map(function(t){return e.props.usedLetters.includes(t.toUpperCase())?t:"_ "});return n.a.createElement("div",{className:"guess-container"},n.a.createElement("div",{className:"guess-board"},t),n.a.createElement("div",{className:"guess-author"},this.props.author))}}]),t}(a.Component)),E=Object(d.b)(function(e){return{guessWord:Object(p.a)(e.guessWord.word),usedLetters:e.alphabet.usedLetters,guess:e.guessWord.lettersToGuess,author:e.guessWord.author}},function(e){return{deactivate_letter:function(t){e({type:"CLICKED_LETTER",letter:t})},count_letters:function(t){e({type:"COUNT_LETTERS",count:t})},new_quote:function(t){e({type:"NEW_WORD",quote:t})},new_author:function(t){e({type:"NEW_AUTHOR",author:t})}}})(v),O=(r(34),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"mistake-container"},n.a.createElement("div",{className:"mistake-description"},n.a.createElement("span",{className:"mistake-description text"},"Number of mistakes: "),n.a.createElement("span",{className:"mistake-description number"},this.props.numberOfMistakes)),n.a.createElement("div",{className:"mistake-lettersToGuess"},n.a.createElement("span",{className:"mistake-lettersToGuess text"},"Number of letters to guess: "),n.a.createElement("span",{className:"mistake-lettersToGuess number"},this.props.toGuess)))}}]),t}(a.Component)),b=Object(d.b)(function(e){return{numberOfMistakes:e.guessWord.numberOfMistakes,toGuess:e.guessWord.lettersToGuess}})(O),g=(r(36),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.numberOfMistakes;return n.a.createElement("div",{className:"gallows-container"},n.a.createElement("div",{className:"gallows-background"},e>=1&&n.a.createElement("div",{className:"hangman-head"}),e>=2&&n.a.createElement("div",{className:"hangman-belly"}),e>=3&&n.a.createElement("div",{className:"hangman-hands"}),e>=4&&n.a.createElement("div",{className:"hangman-legs"})))}}]),t}(a.Component)),k=Object(d.b)(function(e){return{numberOfMistakes:e.guessWord.numberOfMistakes}})(g),T=(r(38),function(e){function t(){var e,r;Object(o.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(r=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).handleNewGame=function(){r.props.game_over(!1),r.props.new_game()},r}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"home-container"},n.a.createElement("div",{className:"logo"},"HA_GMA_"),this.props.gameOver?n.a.createElement("div",{className:"gameOver-container"},n.a.createElement("div",{className:"gameOver-text"},0===this.props.lettersToGuess?"CONGRATULATION":"GAME OVER"),n.a.createElement("div",{className:"gameOver-quote"},'"',this.props.quote,'"'),n.a.createElement("div",{className:"gameOver-author"},"~",this.props.author),n.a.createElement("div",{className:"gameOver-button",onClick:this.handleNewGame},"PLAY AGAIN ? ")):n.a.createElement("div",{className:"home-flex"},n.a.createElement("div",{className:"home-app"},n.a.createElement(E,null),n.a.createElement(f,null),n.a.createElement(b,null)),n.a.createElement(k,null)))}}]),t}(a.Component)),_=Object(d.b)(function(e){return{gameOver:e.gameOver.gameOver,quote:e.guessWord.word,author:e.guessWord.author,lettersToGuess:e.guessWord.lettersToGuess}},function(e){return{game_over:function(t){e({type:"GAME_OVER",gameOver:t})},deactivate_letter:function(t){e({type:"CLICKED_LETTER",letter:t})},count_letters:function(t){e({type:"COUNT_LETTERS",count:t})},new_game:function(){e({type:"NEW_GAME"})}}})(T),j=(r(40),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(_,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=r(10),y=r(1),G={letters:[{letter:"A",clicked:!1},{letter:"B",clicked:!1},{letter:"C",clicked:!1},{letter:"D",clicked:!1},{letter:"E",clicked:!1},{letter:"F",clicked:!1},{letter:"G",clicked:!1},{letter:"H",clicked:!1},{letter:"I",clicked:!1},{letter:"J",clicked:!1},{letter:"K",clicked:!1},{letter:"L",clicked:!1},{letter:"M",clicked:!1},{letter:"N",clicked:!1},{letter:"O",clicked:!1},{letter:"P",clicked:!1},{letter:"Q",clicked:!1},{letter:"R",clicked:!1},{letter:"S",clicked:!1},{letter:"T",clicked:!1},{letter:"U",clicked:!1},{letter:"V",clicked:!1},{letter:"W",clicked:!1},{letter:"X",clicked:!1},{letter:"Y",clicked:!1},{letter:"Z",clicked:!1}],usedLetters:[".",",",":",";","-","_","'",'"',"?","!","/","`","~","(",")"]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;if("CLICKED_LETTER"===t.type){var r=e.letters.filter(function(e){return t.letter!==e.letter});return Object(y.a)({},e,{letters:r})}if("USED_LETTER"===t.type){var a=Object(p.a)(e.usedLetters).concat([t.letter]);return Object(y.a)({},e,{usedLetters:a})}return e},W={word:" ",author:null,lettersToGuess:0,remainLetters:null,numberOfMistakes:0},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;if("COUNT_LETTERS"===t.type){var r=t.count;return Object(y.a)({},e,{lettersToGuess:r})}return"REMAIN_LETTERS"===t.type?Object(y.a)({},e,{remainLetters:t.remain}):"MISTAKE"===t.type?Object(y.a)({},e,{numberOfMistakes:t.mistake}):"NEW_WORD"===t.type?Object(y.a)({},e,{word:t.quote}):"NEW_AUTHOR"===t.type?Object(y.a)({},e,{author:t.author}):e},A={start:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;return"START_GAME"===t.type?Object(y.a)({},e,{start:t.start}):e},C={gameOver:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return"GAME_OVER"===t.type?Object(y.a)({},e,{gameOver:t.gameOver}):e},S=Object(N.b)({alphabet:L,guessWord:w,start:M,gameOver:R}),I=Object(N.c)(function(e,t){return"NEW_GAME"===t.type&&(e=void 0),S(e,t)});c.a.render(n.a.createElement(d.a,{store:I},n.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.d91d8f2c.chunk.js.map