/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
         function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(-1);
    let curr = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    curr.next = l1 || l2;
    return dummy.next;
}
          if (!lists.length) return null;

    while (lists.length > 1) {
        let merged = [];

        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = lists[i + 1] || null;

            merged.push(mergeTwoLists(l1, l2));
        }

        lists = merged;
    }

    return lists[0];
    }
}
