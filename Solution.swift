class Solution {
    func middleNode(_ head: ListNode?) -> ListNode? {
        let size: Int = size(head)
        if (size == 1) {
            return head
        }
        let half: Int = size / 2
        // find the node
        var move: ListNode? = head
        for i in 1...half {
            move = move!.next
        }
        return move
    }
    func size(_ head: ListNode?) -> Int {
        var count: Int = 0
        var move: ListNode? = head
        while (move != nil) {
            count += 1
            move = move!.next
        }
        return count
    }
}