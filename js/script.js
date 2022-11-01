var inputAdd = document.querySelector('.input-add')
var addButton = document.querySelector('.add-button')
var firstBox = document.querySelector('.first-box ')
var boxs = document.querySelectorAll('.box ')
var drag = null
addButton.addEventListener('click', addItemsToFristBox)
function addItemsToFristBox() {
  if (inputAdd.value !== '') {
    var itemAdded = inputAdd.value
    firstBox.innerHTML +=
      '<p class="items" draggable="true">' + itemAdded + '</P>'
    inputAdd.value = ''
    dragAndDrop()
  } else {
    alert('please enter data')
  }
}
function dragAndDrop() {
  var items = document.querySelectorAll('.items')
  items.forEach((item) => {
    item.addEventListener('dragstart', function () {
      item.style.opacity = '.5'
      drag = item
    })
    item.addEventListener('dragend', function () {
      item.style.opacity = '1'
      drag = null
    })
    boxs.forEach(function (box) {
      box.addEventListener('dragover', function (e) {
        e.preventDefault()
        box.style.background = '#090'
        box.style.color = '#fff'
      })
      box.addEventListener('dragleave', function () {
        box.style.background = '#fff'
        box.style.color = '#000'
      })
      box.addEventListener('drop', function () {
        box.append(drag)
        box.style.background = '#fff'
        box.style.color = '#000'
      })
    })
  })
}
