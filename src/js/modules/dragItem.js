export default function dragItem (item, parent) {
    let elementX = 0, elementY = 0, cursorX = 0, cursorY = 0
    const leftLimit = 0
    const rightLimit = parent.clientWidth - item.clientWidth - 5
    const topLimit = 0
    const bottomLimit = parent.clientHeight - item.clientHeight - 5

    item.onmousedown = dragMouseDown;
    
    function dragMouseDown(e) {
        e.preventDefault();
        // записываем первоначальные координаты курсора
        cursorX = e.clientX;
        cursorY = e.clientY;
        item.style.boxShadow = '2px 2px 13px 1px black'
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
        e.preventDefault();
        // получаем координаты
        elementX = cursorX - e.clientX;
        elementY = cursorY - e.clientY;
        cursorX = e.clientX;
        cursorY = e.clientY;

        // ограничиваем перемещение
        let limitedX = checkLimit(leftLimit, rightLimit, (item.offsetLeft - elementX))
        let limitedY = checkLimit(topLimit, bottomLimit, (item.offsetTop - elementY))
        
        item.style.top = limitedY;
        item.style.left = limitedX;
    }
    
    function closeDragElement() {
        item.style.boxShadow = ''
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function checkLimit (minLimit, maxLimit, currentPossition) {
        let limitedPosition
        if (currentPossition < maxLimit && currentPossition > minLimit) {
            limitedPosition = currentPossition + "px"
        } else if (currentPossition > maxLimit) {
            limitedPosition = maxLimit + "px"
        } else if (currentPossition < minLimit) {
            limitedPosition = minLimit + "px"
        }
        return limitedPosition
    }
}