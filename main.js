//    var gresult=undefined

        //C:\tmp\chromeapps\TicTacToe>curl -L "https://script.google.com/macros/s/AKfycbxjSzVAXC54wCmYZNqstXDFN99lUR_0XRCCsqmkZ_b24L-3q86q/exec?input1=collado&limit=10&output=json&callback=jQuery110207950355389621109_1404229712532"

/*
         jQuery( document ).ready(function() {
         //alert('ready')
        var url = 
           //"https://script.google.com/macros/s/AKfycbxjSzVAXC54wCmYZNqstXDFN99lUR_0XRCCsqmkZ_b24L-3q86q/exec?input1=yozzo&limit=10&output=json&callback=?"
           "https://script.google.com/macros/s/AKfycbxjSzVAXC54wCmYZNqstXDFN99lUR_0XRCCsqmkZ_b24L-3q86q/exec?input1=collado,+jose&limit=10&output=json&callback=?"
      var jsonData = $.ajax({
          url: url,
          dataType:"json",
          //async: false
          })
        .done(function(result) {
            //alert( "success: " + JSON.stringify(result) );
            //console.log( "success: " + JSON.stringify(result) );
            //gresult=result
            localStorage.setItem("gresult",JSON.stringify(result));
            })  
            .fail(function(jqXHR, textStatus, errorThrown) {
            alert( "error: " + textStatus + ' errorThrown: ' + errorThrown );
            })
         }) 
        */ 

//         jQuery( document ).ready(function() {
document.addEventListener('DOMContentLoaded', function() {

  var gameEl = document.getElementById('game');
  var cells = game.querySelectorAll('.board .cell');

  window.board = new Board();

  window.board.setCallback('onTurnChanged', redrawBoard);
  window.board.setCallback('onFinished', handleFinished);
  window.board.init()

  // set click listeners
  Array.prototype.forEach.call(cells, function(e, i) {
    e.setAttribute("board_cell", i );
    e.addEventListener('click', function(e) {
        //alert(gresult)

        //var gresult = JSON.parse(localStorage.getItem("gresult"));
        //if (! gresult ) return;

        //alert('hi: ' + gresult);
        //console.log( "success: " + JSON.stringify(gresult) );
      window.board.play(i);
    });
  });

  function getPlayerLabel(board, player) {
    switch (player) {
      case board.PLAYER_1: return '1';
      case board.PLAYER_2: return '2';
      default: return '';
    }
  }

  function redrawBoard(board) {
    // redraw cell states:
    Array.prototype.forEach.call(cells, function(e, i) {
      var state = board.getCellState(i);
//      console.log('state: ' + state)
//      console.log('e: ' + e)
//      console.log(e)
//      console.log('e.classList: ' + e.classList)
//      console.log('board: ' + board)
//      console.log(board)
      if (state) {
        e.classList.add(state == board.PLAYER_1 ? 'tic' : 'tac');
        //e.append(board.boardwords[i])
        //console.log('board.boardwords[i]:')
        //console.log(board.boardwords[i])
        //e.appendChild(board.boardwords[i])
        //alert(board.boardwords[i])

        //console.log(e)
        e.innerHTML = board.boardwords[i]
        var elem = document.createElement("img");
        elem.src ="deblasiobydonkeyhoteysmall.png";
        elem.setAttribute("alt", "deblasio");
        elem.setAttribute("position", "fixed");
        elem.setAttribute("top", "0");
        elem.setAttribute("left", "0");
        //console.log('i: ' + "a"+i)
        //console.log(document.getElementById("a"+i))
        //var foo = document.getElementById("a"+i);
        //foo.appendChild(elem);
        document.getElementById("a"+i).appendChild(elem);
        //console.log( "success: " + JSON.stringify(gresult) );
        //e.classList.add('text');
      }
    });
    drawStatusMessage(board);
  }

  function drawStatusMessage(board) {
    // redraw "next player" status message:
    var message = '';
    switch (board.getBoardState()) {
      case board.STATE_PLAYING:
        message = 'Player '+getPlayerLabel(board, board.getNextPlayer());
        break;
      case board.STATE_FINISHED:
        if (board.getWinner()) {
          message = 'Winner: player '+getPlayerLabel(board, board.getWinner());
        } else {
          message = 'Draw!';
        }
        break;
    }
    game.querySelector('.controls .message').innerText = message;
  }

  game.querySelector('.controls .restart').addEventListener('click', function() {
    game.classList.remove('finished');
    Array.prototype.forEach.call(cells, function(e, i) {
      e.classList.remove('solution');
      e.classList.remove('tic');
      e.classList.remove('tac');
    });
    window.board.init();
    drawStatusMessage(board);
  });


  function handleFinished(board) {
    redrawBoard(board);
    game.classList.add('finished');
    if (board.getWinningCells()) {
      for (var c=0; c < board.getWinningCells().length ; c++) {
        if (board.getWinningCells()[c]) {
          cells.item(c).classList.add('solution');
        } else {
          cells.item(c).classList.remove('solution');
        }
      }
    }
  }

//});
})