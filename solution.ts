function middleNode(head: ListNode | null): ListNode | null {
    const s: number = size(head);
    if (s == 1 || s == 0) 
        return head;
    const half: number = Math.floor(s / 2);
    // find the node
    let move: ListNode | null= head;
    for (let i = 0; i < half; i++) {
        move = move!.next;
    }
    return move;
};

function size(head: ListNode | null): number {
    var count: number = 0;
    var move: ListNode | null = head;
    while (move != null) {
        count++;
        move = move.next;
    }
    return count;
};