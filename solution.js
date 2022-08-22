function middleNode(head) {
    var s = size(head);
    if (s == 1 || s == 0)
        return head;
    var half = Math.floor(s / 2);
    // find the node
    var move = head;
    for (var i = 0; i < half; i++) {
        move = move.next;
    }
    return move;
}

function size(head) {
    var count = 0;
    var move = head;
    while (move != null) {
        count++;
        move = move.next;
    }
    return count;
}