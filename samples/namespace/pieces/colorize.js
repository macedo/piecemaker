App.pieces.colorize = function () {

  function Piece(container) {
    container.style.background = container.dataset.color
  }

  return Piece

}()
